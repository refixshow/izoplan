import { createClient, EntryCollection } from "contentful";

import axios from "axios";

export type TFetchAllEntries = EntryCollection<unknown>;

// PL -> EN
// cennik -> pricing
// galeria -> gallery
// korzysci -> cons
// oferta -> offer
// opis pracy -> work description
// pytania -> questions

export const entries = {
  cennik: "cennik",
  galeria: "galeria",
  korzysci: "korzysci",
  oferta: "oferta",
  opisPracy: "opisPracy",
  pytania: "pytania",
};

export const parseContentfulData = (contentfulData) => {
  if (contentfulData === undefined) {
    return null;
  }
  return contentfulData.items.reduce((accum, current) => {
    if (!accum[current.sys.contentType.sys.id]) {
      accum[current.sys.contentType.sys.id] = [];
    }
    accum[current.sys.contentType.sys.id].push(current.fields);
    return accum;
  }, {});
};

// @ts-ignore
const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFULL_SPACE,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFULL_ACCESSTOKEN,
});

export const fetchAllEntries: () => Promise<
  EntryCollection<unknown>
> = async () => {
  return await client.getEntries();
};

export const fetchAndParseFacebookReviews = async () => {
  let resWithToken: { [key: string]: any };
  let res: { [key: string]: any };

  try {
    resWithToken = await axios.get(
      "https://graph.facebook.com/v10.0/102063341422126",
      {
        params: {
          fields: "access_token",
          access_token:
            "EAAEpDMYI6WsBALDHNjIbFaeao5vXtVOtS1ya0AcUdgSoW97kZBrc3Qmj48L2WB808TZCwuBLZBoc9sSW0jcDbUigtoQb21jx1NfNGDsFDMy4daICB2njGKyzWfgBYzRXuVb7kqwHZANZAU3qZCwxl3YQGnnN4zsurjieYnKBZBdZAjmYZBaGnccNNXA69wDlwfQpsT0y4ameK7hdZB4If56TEkdsakLQx3MBcZD",
        },
      }
    );

    res = await axios.get("https://graph.facebook.com/v10.0/102063341422126", {
      params: {
        fields:
          "ratings.limit(3){open_graph_story,has_rating,has_review,rating,recommendation_type,review_text,reviewer}",
        access_token: resWithToken.data.access_token,
      },
    });
  } catch (err) {
    console.error(err);
  }

  return res.data.ratings.data;
};

export const fetchSingleEntry: (
  entryName: string
) => Promise<EntryCollection<unknown>> = async (entryName) => {
  return await client.getEntries({ content_type: entryName });
};
