import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  VStack,
  Divider,
  Container,
  Stack
} from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowRightIcon } from "@chakra-ui/icons";
import React from "react";
import Image from "next/image";
import HomePageStats from "@/components/molecules/homepage-stats";

const homePagesStats = [
  {
    statValue: "232,947",
    statLabel: "Blocks"
  },
  {
    statValue: "45+",
    statLabel: "IBC Connection"
  },
  {
    statValue: "5+",
    statLabel: "Audits"
  }
];

const NotesSection = () => {
  return (
    <Container maxW={"1200px"} px={"60px"}>
      <Flex justify={"center"} mb={20}>
        <Box>
          <Heading textAlign="center" variant={"main"} mb={"4px"}>
            Making History With Our Tech.{" "}
          </Heading>
          <Text textAlign="center">
            Pushing boundaries when we commit code.
          </Text>
        </Box>
      </Flex>
      <VStack align={"stretch"} spacing={4}>
        <Stack spacing={2} direction="row">
          <Flex
            p={"32px"}
            bg={"#fff"}
            borderRadius={"20px"}
            direction={"column"}
          >
            <Heading variant={"secondary"}>
              First chain to adopt the Liquid Staking Module (LSM) in Cosmos
            </Heading>
            <Box m={"auto"}>
              <Image
                src={"/images/tech-page/note-img0.svg"}
                alt=""
                width={290}
                height={240}
              />
            </Box>
          </Flex>
          <VStack align={"stretch"} w={"600px"}>
            <Box pos={"relative"}>
              <Flex p={"32px"} bg={"#fff"} borderRadius={"20px"}>
                <Heading variant={"secondary"}>
                  Building the Restaking Infrastructure for Cosmos
                </Heading>
                <Image
                  src={"/images/tech-page/note-img1.svg"}
                  alt=""
                  width={220}
                  height={177}
                />
              </Flex>
              <Box
                pos={"absolute"}
                top={"-20px"}
                right={"-20px"}
                background={"#C73339"}
                w={"220px"}
                h={"210px"}
                zIndex={-1}
                borderRadius={"20px"}
              />
            </Box>
            <Flex p={"32px"} bg={"#fff"} borderRadius={"20px"}>
              <Heading variant={"secondary"}>
                Building the Restaking Infrastructure for Cosmos
              </Heading>
              <Image
                src={"/images/tech-page/note-img1.svg"}
                alt=""
                width={220}
                height={177}
              />
            </Flex>
          </VStack>
        </Stack>
        <HStack align={"stretch"} spacing={4}>
          <Box
            pos={"relative"}
            h={"300px"}
            w={"275px"}
            bg={"#fff"}
            borderRadius={"20px"}
          >
            <Flex
              p={"32px"}
              justify={"space-between"}
              direction={"column"}
              h={"100%"}
            >
              <Heading variant={"secondary"}>
                Contributing to the Cosmos Hub since 2019
              </Heading>
              <Image
                src={"/images/tech-page/note-img3.svg"}
                alt=""
                width={220}
                height={144}
              />
            </Flex>
            <Box
              pos={"absolute"}
              bottom={"-20px"}
              left={"-20px"}
              background={"#C73339"}
              w={"220px"}
              h={"210px"}
              zIndex={-1}
              borderRadius={"20px"}
            />
          </Box>
          <Flex
            p={"32px"}
            bg={"#fff"}
            h={"300px"}
            w={"275px"}
            justify={"space-between"}
            borderRadius={"20px"}
            direction={"column"}
          >
            <Heading variant={"secondary"}>
              Pioneered ATOM liquid staking in 2021
            </Heading>
            <Image
              src={"/images/tech-page/note-img2.svg"}
              alt=""
              width={220}
              height={144}
            />
          </Flex>
          <Flex
            p={"32px"}
            bg={"#fff"}
            h={"300px"}
            w={"275px"}
            justify={"space-between"}
            borderRadius={"20px"}
            direction={"column"}
          >
            <Heading variant={"secondary"}>
              One of the first chains to enable IBC
            </Heading>
            <Image
              src={"/images/tech-page/note-img1.svg"}
              alt=""
              width={220}
              height={144}
            />
          </Flex>
          <Flex
            p={"32px"}
            bg={"#fff"}
            h={"300px"}
            w={"275px"}
            justify={"space-between"}
            borderRadius={"20px"}
            direction={"column"}
          >
            <Heading variant={"secondary"}>Audit first, deploy later.</Heading>
            <Image
              src={"/images/tech-page/note-img1.svg"}
              alt=""
              width={220}
              height={144}
            />
          </Flex>
        </HStack>
      </VStack>
      <Spacer h={40} />
    </Container>
  );
};

export default NotesSection;