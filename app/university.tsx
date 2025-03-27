'use client';
import { Box, Link, Flex, Card,Text, IconButton, Dialog, Inset, Button, DataList, VisuallyHidden, Code } from "@radix-ui/themes";
import { ArrowTopRightIcon, InfoCircledIcon } from "@radix-ui/react-icons";

export default function University({ name, webpage, domain, alpha_two_code }: { name: string, webpage: string, domain: string, alpha_two_code: string }) {
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
                <Link size="2" href={webpage} target="_blank">{webpage} <ArrowTopRightIcon></ArrowTopRightIcon></Link>
              </Box>
              <Box>

                <Dialog.Root>
                  <Dialog.Trigger>
                    <IconButton variant="ghost">
                      <InfoCircledIcon width="20" height="20" />
                    </IconButton>
                  </Dialog.Trigger>
                  <Dialog.Content>
                    <VisuallyHidden>
                      <Dialog.Title>Details</Dialog.Title>
                    </VisuallyHidden>
                    <Dialog.Description>
                      {name}
                    </Dialog.Description>
                    <Inset side="x" mx="7" my="5">
                      <DataList.Root>
                        <DataList.Item>
                          <DataList.Label minWidth="88px">Web page</DataList.Label>
                          <DataList.Value>
                            <Link size="2" href={webpage} target="_blank">{webpage} <ArrowTopRightIcon></ArrowTopRightIcon></Link>
                          </DataList.Value>
                        </DataList.Item>
                        <DataList.Item>
                          <DataList.Label minWidth="88px">Domain</DataList.Label>
                          <DataList.Value>
                            <Code>{domain}</Code>
                          </DataList.Value>
                        </DataList.Item>
                        <DataList.Item>
                          <DataList.Label minWidth="88px">Alpha two code</DataList.Label>
                          <DataList.Value>
                            <Code>{alpha_two_code}</Code>
                          </DataList.Value>
                        </DataList.Item>
                      </DataList.Root>
                    </Inset>
                    <Flex gap="3" justify="end">
                      <Dialog.Close>
                        <Button variant="soft" color="gray">
                          Close
                        </Button>
                      </Dialog.Close>
                    </Flex>
                  </Dialog.Content>
                </Dialog.Root>

              </Box>
            </Flex>
          </Box>
        </Flex>
      </Card>
    </Box>
  );
}
