import {
  Box,
  Flex,
  Stack,
  Text,
  useColorModeValue,
  theme,
} from "@chakra-ui/react";

interface IProps {
  desc: any[];
}

const OrganismDescription = ({ desc }: IProps) => {
  const grayColor = useColorModeValue(
    theme.colors.gray[300],
    theme.colors.gray[800]
  );

  return (
    <Box
      padding="3rem"
      backgroundColor={grayColor}
      gridColumn="full-start / full-end"
    >
      {desc.map((el) => {
        return (
          <Flex
            key={el.tytul}
            padding="2"
            _even={{
              flexDirection: ["row", "row", "column-reverse"],
              textAlign: ["left", "left", "right"],
            }}
            marginTop="4"
            marginBottom="4"
          >
            <Box display={["none", "none", "block"]}>img</Box>
            <Stack>
              <Text as="h3" fontWeight="bold">
                {el.tytul}
              </Text>
              <Text>{el.opis.content[0].content[0].value}</Text>
            </Stack>
          </Flex>
        );
      })}
    </Box>
  );
};

export default OrganismDescription;
