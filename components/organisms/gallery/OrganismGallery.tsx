import { FC } from "react";
import NextImage from "next/image";
import { Box, Flex } from "@chakra-ui/react";
import { Masonry } from "masonic";
import { v4 as uuidv4 } from "uuid";

const MasonryCard = ({ index, data, width }) => (
  <NextImage
    src={`http:${data.fields.zdjecie.fields.file.url}`}
    width={data.fields.zdjecie.fields.file.details.image.width}
    height={data.fields.zdjecie.fields.file.details.image.height}
    alt={data.fields.zdjecie.fields.title}
  />
);

interface IProps {
  gallery: { [key: string]: any }[];
}

const OrganismGallery: FC<IProps> = ({ gallery }) => {
  return (
    <Box as="section" paddingTop="100px" paddingBottom="150px" id="reviews">
      <Flex justifyContent="center">
        <Box maxWidth="1128px" width="100%" position="relative" paddingX="2rem">
          <Masonry
            itemKey={() => uuidv4()}
            items={gallery}
            render={MasonryCard}
            columnGutter={40}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default OrganismGallery;
