import { MutableRefObject } from "react";
import { useCallback, useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

const useContactForm = (recaptchaRef: MutableRefObject<ReCAPTCHA>) => {
  const [state, setState] = useState({
    isLoading: false,
    wasEmailSent: false,
    isError: false,
  });

  const handleFakeSubmit = useCallback((event) => {
    event.preventDefault();
  }, []);

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();

    if (state.wasEmailSent === true) {
      return;
    }

    if (state.isLoading) {
      return;
    }

    try {
      const token = await recaptchaRef.current.executeAsync();
      recaptchaRef.current.reset();

      setState((prev) => ({ ...prev, isLoading: true }));

      await axios.post(
        "/api/mailer",
        {
          imie: event.target.imie.value,
          nazwisko: event.target.nazwisko.value,
          email: event.target.email.value,
          text: event.target.text.value,
          token,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      localStorage.setItem("email", "true");
      setState((prev) => ({
        ...prev,
        isLoading: false,
        wasEmailSent: true,
      }));
    } catch (err) {
      console.error(err);
      setState((prev) => ({ ...prev, isLoading: false, isError: true }));
      return;
    }
  }, []);

  useEffect(() => {
    const persistedWasEmailSent = JSON.parse(
      window.localStorage.getItem("email")
    );

    if (persistedWasEmailSent !== null) {
      setState((prev) => ({
        ...prev,
        wasEmailSent: persistedWasEmailSent,
      }));
      return;
    }

    setState((prev) => ({
      ...prev,
      wasEmailSent: false,
    }));
  }, []);

  return { handleFakeSubmit, handleSubmit, ...state };
};

export default useContactForm;
