import { numberFormat } from "@/utils/helpers";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Card, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface XPRTDefiCardInterface {
  tokens: {
    name: string;
    image: string;
  }[];
  cta: {
    label: string;
    link: string;
    bg: string;
  };
  description: string;
  stats: {
    label: string;
    value: string;
  }[];
}

const XPRTDefiCard = ({
  tokens,
  cta,
  description,
  stats
}: XPRTDefiCardInterface) => {
  return (
    <Card
      w="full"
      px={6}
      py={8}
      borderRadius={8}
      boxShadow={
        "0px 12px 16px -4px rgba(27, 27, 27, 0.08), 0px 4px 6px -2px rgba(27, 27, 27, 0.03)"
      }
    >
      <HStack justify={"space-between"}>
        <HStack>
          <HStack spacing="-2">
            {tokens.map((token, index) => {
              return (
                <Box key={token.name} ml={index !== tokens.length - 1 ? 0 : -3}>
                  <Image
                    src={token.image}
                    alt={token.name}
                    width={36}
                    height={36}
                  />
                </Box>
              );
            })}
          </HStack>
          <Text fontSize={32} fontWeight={700}>
            {tokens.map((token) => token.name).join("/")}
          </Text>
        </HStack>

        <Link href={cta.link} target="_blank" rel="noopener noreferrer">
          <Button bg={cta.bg} color="white" rightIcon={<ArrowForwardIcon />}>
            {cta.label}
          </Button>
        </Link>
      </HStack>
      <Text mt={4}>{description}</Text>
      <HStack gap={8} mt={4}>
        {stats.map((stat) => {
          return (
            <VStack key={stat.label} align={"stretch"} gap={0}>
              <Text color={"#423F40"} fontSize={16}>
                {stat.label}
              </Text>
              <Text fontSize={24} fontWeight={700}>
                {stat.label === "TVL"
                  ? `$${numberFormat(Number(stat.value), 3)}`
                  : `${stat.value}%`}
              </Text>
            </VStack>
          );
        })}
      </HStack>
    </Card>
  );
};

export default XPRTDefiCard;
