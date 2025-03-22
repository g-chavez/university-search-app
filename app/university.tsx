'use client';
import { Box, Link, Flex, Card,Text } from "@radix-ui/themes";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

export default function University({ name, webpage }: { name: string, webpage: string }) {

  return (
    <Box maxWidth="500px">
      <Card>
        <Flex gap="3" align="center">
          <Box>
            <Text as="div" size="2" weight="bold">
              {name}
            </Text>
            <Link size="2" href={webpage} target="blank">{webpage} <ArrowTopRightIcon></ArrowTopRightIcon></Link>
          </Box>
        </Flex>
      </Card>
    </Box>
  );
}
