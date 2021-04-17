import { ArrowBackIcon } from "@chakra-ui/icons";
import { Flex, Icon, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from 'next/router';

export function Header(){
  const { asPath } = useRouter();

  if (asPath != '/'){
    return (
      <Flex align="center" height={["3.125rem", "6.25rem"]} maxWidth="1160px" mx="auto">
        <Link href="/" passHref>
          <Icon as={ArrowBackIcon} h={[4, 8]} w={[4, 8]} _hover={{ cursor: "pointer" }} />
        </Link>
        <Image src="/images/logo.svg" alt="worldtrip" height={["20px", "auto"]} mx="auto" />
      </Flex>
    );
  }

  return (
    <Flex align="center" justify="center" height={["3.125rem", "6.25rem"]}>
      <Image src="/images/logo.svg" alt="worldtrip" height={["20px","auto"]} />
    </Flex>
  );
}