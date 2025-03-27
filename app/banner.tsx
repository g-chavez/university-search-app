'use client';
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Box, Flex, Text } from "@radix-ui/themes";


export default function Banner () {

  return (
    <Box>
      <Flex align={"center"} justify={"center"}>
        <Box width={"100px"} style={{ backgroundImage: "url('../logo.webp')", backgroundRepeat: "no-repeat", height: "100px"}}></Box>
        <Box>
          <Text my={"5"} color="indigo" align={"center"} as="div" size={"8"}>
            University Search 
            <MagnifyingGlassIcon width="40" height="40" />
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
