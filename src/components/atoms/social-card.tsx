import { Stack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SocialCard = ({
  title,
  description,
  image,
  link
}: {
  title: string;
  description: string;
  image: string;
  link: string;
}) => {
  return (
    <Link href={link} target="_blank" rel="noreferrer" key={title}>
      <Stack
        bg={"#FEFEFE"}
        borderRadius={10}
        px={"24px"}
        py={"28px"}
        cursor={"pointer"}
        boxShadow={
          "0px 12px 16px -4px rgba(27, 27, 27, 0.08), 0px 4px 6px -2px rgba(27, 27, 27, 0.03)"
        }
        direction={{ base: "column", md: "row" }}
      >
        <Image src={image} alt={title} width={45} height={45} />
        <VStack align={"flex-start"} justify={"center"} gap={0} ml={"12px"}>
          <Text color={"#3D3D3D"} fontSize={18} fontWeight={600}>
            {title}
          </Text>
          <Text color={"#423F40"} fontSize={14} fontWeight={400}>
            {description}
          </Text>
        </VStack>
      </Stack>
    </Link>
  );
};

export default SocialCard;
