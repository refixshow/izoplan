import { FC } from "react";
import NextImage from "next/image";
import { Box, Flex } from "@chakra-ui/react";

interface IProps {
  gallery: { [key: string]: any }[];
}

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const OrganismGallery: FC<IProps> = ({ gallery }) => {
  return (
    <Box as="section" paddingTop="100px" paddingBottom="150px" id="reviews">
      <Flex justifyContent="center">
        <Box maxWidth="1128px" width="100%" position="relative" paddingX="2rem">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry gutter="20px">
              {gallery.map((img) => (
                <NextImage
                  key={img.fields.zdjecie.fields.title}
                  src={`http:${img.fields.zdjecie.fields.file.url}`}
                  width={img.fields.zdjecie.fields.file.details.image.width}
                  height={img.fields.zdjecie.fields.file.details.image.height}
                  alt={img.fields.zdjecie.fields.title}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </Box>
      </Flex>
    </Box>
  );
};

export default OrganismGallery;
