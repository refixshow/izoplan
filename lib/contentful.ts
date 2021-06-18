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
  let res: { [key: string]: any };
  try {
    res = await axios.get("https://graph.facebook.com/v10.0/102063341422126", {
      params: {
        fields:
          "ratings.limit(3){open_graph_story,has_rating,has_review,rating,recommendation_type,review_text,reviewer}",
        access_token: process.env.NEXT_PUBLIC_FB_TOKEN,
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
