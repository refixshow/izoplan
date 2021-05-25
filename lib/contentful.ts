import { createClient, EntryCollection } from "contentful";

export type TFetchAllEntries = EntryCollection<unknown>;

export const client = createClient({
  space: process.env.CONTENTFULL_SPACE,
  accessToken: process.env.CONTENTFULL_ACCESSTOKEN,
});

export const fetchAllEntries: () => Promise<
  EntryCollection<unknown>
> = async () => {
  return await client.getEntries();
};
