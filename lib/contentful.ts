import { createClient, EntryCollection, Entry } from "contentful";

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

export const client = createClient({
  space: process.env.CONTENTFULL_SPACE,
  accessToken: process.env.CONTENTFULL_ACCESSTOKEN,
});

export const fetchAllEntries: () => Promise<EntryCollection<unknown>> =
  async () => {
    return await client.getEntries();
  };

export const fetchSingleEntry: (
  entryName: string
) => Promise<EntryCollection<unknown>> = async (entryName) => {
  return await client.getEntries({ content_type: entryName });
};
