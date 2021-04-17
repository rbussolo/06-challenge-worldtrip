import { Divider, Flex, Text } from "@chakra-ui/layout";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { Carousel } from "../components/Carousel";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { Spotlight } from "../components/Spotlight";

export default function Home() {
  const isWideVersion = useBreakpointValue({ base: false, lg: true });

  return (
    <>
      <Header />
      
      <Banner />

      <Flex direction="column" width="100%" maxWidth="1440px" mt={["2.25rem","5rem"]} mx="auto">
        <Flex justify="space-around" flexFlow="row wrap" mx="3.125rem" minH={120}>
          <Spotlight icon="/images/cocktail.svg" description="vida noturna" />
          <Spotlight icon="/images/surf.svg" description="praia" />
          <Spotlight icon="/images/building.svg" description="moderno" />
          <Spotlight icon="/images/museum.svg" description="clássico" />
          <Spotlight icon="/images/earth.svg" description="e mais..." />
        </Flex>

        <Divider
          mt={["2.25rem", "5rem"]}
          width={["3.75rem","5.625rem"]}
          borderBottomWidth={[1,2]}
          alignSelf="center"
          color="gray.800"
          borderColor="gray.800"
          opacity="1" 
        />
      
        <Text
          mt="3.25rem"
          alignSelf="center"
          textAlign="center"
          fontSize={["1.25rem","2.25rem"]}
          color="gray.800"
          fontWeight="500"
        >
          Vamos nessa?
          <br />
          Então escolha seu continente
        </Text>

        <Carousel />
      </Flex>
    </>
  )
}
