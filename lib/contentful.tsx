import { createClient, EntryCollection } from "contentful";
import { FC, memo } from "react";
import { v4 as uuid } from "uuid";

import { Box, Text } from "@chakra-ui/react";

export type TFetchAllEntries = EntryCollection<unknown>;

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

export const fetchSingleEntry: (
  entryName: string
) => Promise<EntryCollection<unknown>> = async (entryName) => {
  return await client.getEntries({ content_type: entryName });
};

interface IProps {
  element: { content: { content: { value: string }[] }[] };
}

export const ComplexText: FC<IProps> = memo(({ element }) => {
  return (
    <>
      {element.content.map((el) => (
        <Text
          display="inline-block"
          _even={{
            paddingTop: "20px",
          }}
          key={uuid()}
        >
          {el.content.map((innerEl) => innerEl.value)}
        </Text>
      ))}
    </>
  );
});
