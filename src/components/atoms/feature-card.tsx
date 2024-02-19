import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface FeatureCardInterface {
  category: string;
  title: string;
  description: string;
  image: string;
  link: string;
  linkText: string;
}
const FeatureCard = ({
  category,
  title,
  description,
  image,
  link,
  linkText
}: FeatureCardInterface) => {
  return (
    <Card>
      <CardHeader>{category}</CardHeader>
      <CardBody>
        <Heading>{title}</Heading>
        <Text>{description}</Text>
        <Image src={image} alt={title} width={127} height={50} />
      </CardBody>
      <CardFooter>
        <Link href={link}>{linkText}</Link>
      </CardFooter>
    </Card>
  );
};

export default FeatureCard;