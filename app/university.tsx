'use client';
import { Box, Link, Flex, Card,Text, IconButton } from "@radix-ui/themes";
import { ArrowTopRightIcon, InfoCircledIcon } from "@radix-ui/react-icons";

export default function University({ name, webpage }: { name: string, webpage: string }) {

  return (
    <Box maxWidth="500px">
      <Card>
        <Flex gap="3" align="center">
          <Box>
            <Text as="div" size="2" weight="bold">
              {name}
            </Text>
            <Flex>
              <Box minWidth="450px">
                <Link size="2" href={webpage} target="blank">{webpage} <ArrowTopRightIcon></ArrowTopRightIcon></Link>
              </Box>
              <Box>
                <IconButton variant="ghost">
                  <InfoCircledIcon width="20" height="20" />
                </IconButton>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Card>
    </Box>
  );
}
