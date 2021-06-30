import sgMail from "@sendgrid/mail";
import { check, validationResult } from "express-validator";
import LRU from "lru-cache";
import Cors from "cors";

const rateLimit = (options) => {
  const tokenCache = new LRU({
    max: parseInt(options.uniqueTokenPerInterval || 500, 10),
    maxAge: parseInt(options.interval || 60000, 10),
  });

  return {
    check: (res, limit, token) =>
      new Promise((resolve, reject) => {
        const tokenCount = tokenCache.get(token) || [0];
        if (tokenCount[0] === 0) {
          tokenCache.set(token, tokenCount);
        }
        tokenCount[0] += 1;

        const currentUsage = tokenCount[0];
        const isRateLimited = currentUsage >= parseInt(limit, 10);
        res.setHeader("X-RateLimit-Limit", limit);
        res.setHeader(
          "X-RateLimit-Remaining",
          isRateLimited ? 0 : limit - currentUsage
        );

        return isRateLimited ? reject() : resolve(true);
      }),
  };
};

const limiter = rateLimit({
  interval: 60 * 1000,
  uniqueTokenPerInterval: 99,
});

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

function initMiddleware(middleware) {
  return (req, res) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
}

function validateMiddleware(validations, validationResult) {
  return async (req, res, next) => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res.status(422).json({ errors: errors.array() });
  };
}

const cors = initMiddleware(
  Cors({
    origin: "*",
    methods: "POST",
  })
);

const validateReCAPTCHA = async (token: string) => {
  const VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";

  try {
    const res = await fetch(VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.NEXT_PUBLIC_SECRET_RECAPTCHA}&response=${token}`,
    });

    const response = await res.json();

    if (!response.success) {
      throw new Error("ReCAPTCHA WARN");
    }
  } catch (err) {
    throw new Error(err);
  }
};

const validateBody = initMiddleware(
  validateMiddleware(
    [
      check("imie").isLength({ min: 1, max: 25 }),
      check("nazwisko").isLength({ min: 1, max: 25 }),
      check("email").isEmail(),
      check("text").notEmpty(),
      check("token").notEmpty(),
    ],
    validationResult
  )
);

export default async (req, res) => {
  res.setHeader(
    "Cache-Control",
    "public, max-age=120, stale-while-revalidate=60"
  );

  try {
    await validateBody(req, res);
    await cors(req, res);
    await limiter.check(res, 10, "CACHE_TOKEN");
    await validateReCAPTCHA(req.body.token);

    const msg = {
      to: "adamscieszka@gmail.com",
      from: "adamscieszka@gmail.com",
      subject: `${req.body.imie} ${req.body.nazwisko} wypełnił formularz`,
      text: `${req.body.text} z adresu ${req.body.email}`,
    };

    await sgMail.send(msg);

    res.statusCode = 200;
    res.json({ name: "John Doe" });
  } catch (err) {
    res.json({ error: err });
  }
};
