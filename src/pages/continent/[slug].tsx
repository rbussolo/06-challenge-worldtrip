import Icon from "@chakra-ui/icon";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import { Flex, Grid, HStack, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";
import { GetStaticPaths, GetStaticProps } from "next";
import { Header } from "../../components/Header";

const continents = [{
  uuid: 'europa',
  name: 'Europa',
  description: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a penínsua ocidental da Eurásia, a Europa geralmente divide-se da Á sia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.',
  countCountry: 50,
  countLanguage: 60,
  countTop100: 27,
  urlBanner: '/images/europa_2.png',
  cities: [{
    uuid: 'londres',
    name: 'Londres',
    country: 'Reino Unido',
    urlCity: '/images/londres.png',
    urlFlag: '/images/flag_reino_unido.png'
  }, {
    uuid: 'paris',
    name: 'Paris',
    country: 'França',
    urlCity: '/images/paris.png',
    urlFlag: '/images/flag_franca.png'
  }, {
    uuid: 'roma',
    name: 'Roma',
    country: 'Itália',
    urlCity: '/images/roma.png',
    urlFlag: '/images/flag_italia.png'
    }, {
    uuid: 'londres2',
    name: 'Londres',
    country: 'Reino Unido',
    urlCity: '/images/londres.png',
    urlFlag: '/images/flag_reino_unido.png'
  }, {
    uuid: 'paris2',
    name: 'Paris',
    country: 'França',
    urlCity: '/images/paris.png',
    urlFlag: '/images/flag_franca.png'
  }, {
    uuid: 'roma2',
    name: 'Roma',
    country: 'Itália',
    urlCity: '/images/roma.png',
    urlFlag: '/images/flag_italia.png'
  }]
}, {
  uuid: 'america-do-sul',
  name: 'América do Sul',
  description: 'A América do Sul é um lugar top, aqui tem muita praia, muita comida boa, tem um pessoal gente boa! Se tu quer saber como é viver nesta maravilha é só vim para cá!',
  countCountry: 20,
  countLanguage: 5,
  countTop100: 15,
  urlBanner: '/images/south_america.jpg',
  cities: [{
    uuid: 'cuiaba',
    name: 'Cuiabá',
    country: 'Brasil',
    urlCity: '/images/cuiaba.jpg',
    urlFlag: '/images/flag_italia.png'
  }, {
    uuid: 'meia-praia',
    name: 'Meia Praia',
    country: 'Brasil',
    urlCity: '/images/meia_praia.jpg',
    urlFlag: '/images/flag_franca.png'
  }]
}]

interface Continent {
  uuid: string;
  name: string;
  urlBanner: string;
  description: string;
  countCountry: number;
  countLanguage: number;
  countTop100: number;
  cities: {
    uuid: string;
    name: string;
    country: string;
    urlCity: string;
    urlFlag: string;
  }[];
}

interface ContinentProps {
  continent: Continent;
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <>
      <Header />

      <Flex
        height={[150,500]}
        maxW={1440}
        background={[`linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url('${continent.urlBanner}') no-repeat`, `linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url('${continent.urlBanner}') no-repeat`,`url("${continent.urlBanner}")`]}
        backgroundPosition="50% 50%"
        backgroundSize="cover"
        mx="auto"
        justify="center"
      >
        <Flex maxW={1160} width="100%" height="100%" direction="column" align={["center", "center", "flex-start"]} justify={["center", "center", "flex-end"]} pb={["0rem", "3.6875rem"]}>
          <Text fontWeight="600" fontSize={["1.75rem", "1.75rem", "3rem"]} color="gray.50">{continent.name}</Text>
        </Flex>
      </Flex>

      <Flex maxW={1160} width="100%" mt={["5", "5","20"]} mx="auto">
        <Flex direction={["column", "column", "row"]}>
          <Text fontSize={["0.875rem", "0.875rem", "1.5rem"]} flex="1" px={["1rem", "0rem"]} textAlign="justify">{continent.description}</Text>
          <Flex justify="space-around" align="center" flex="1">
            <Flex direction="column" textAlign="center" p="0.5rem">
              <Text fontSize={["1.5rem", "1.5rem", "3rem"]} color="yellow.800" fontWeight="600">{continent.countCountry}</Text>
              <Text fontSize={["1.125rem", "1.125rem", "1.5rem"]} fontWeight="600">países</Text>
            </Flex>
            <Flex direction="column" textAlign="center" p="0.5rem">
              <Text fontSize={["1.5rem", "1.5rem", "3rem"]} color="yellow.800" fontWeight="600">{continent.countLanguage}</Text>
              <Text fontSize={["1.125rem", "1.125rem", "1.5rem"]} fontWeight="600">línguas</Text>
            </Flex>
            <Flex direction="column" textAlign="center" p="0.5rem">
              <Text fontSize={["1.5rem", "1.5rem", "3rem"]} color="yellow.800" fontWeight="600">{continent.countTop100}</Text>
              <Text fontSize={["1.125rem", "1.125rem", "1.5rem"]} fontWeight="600">cidades +100 <Tooltip label="As cidades mais visitadas no mundo!" aria-label="A tooltip">
                <Icon w={[2, 4]} h={[2, 4]} as={InfoOutlineIcon} color="gray.500" style={{ cursor: "text" }}/>
              </Tooltip></Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex maxW={1160} mt={["8", "20"]} mb={["8", "20"]} mx="auto" direction="column">
        <Text fontSize={["1.5rem", "2.25rem"]} fontWeight="500" px={["1rem", "0rem"]}>Cidades +100</Text>
        <SimpleGrid minChildWidth="256px" w="100%" spacing="45px" mt={["20px", "40px"]}>
          {continent.cities.map(city => (
            <Flex key={city.uuid} justify="center">
              <Flex w="256px" height={279} direction="column" >
                <Image src={city.urlCity} w="auto" h={173} maxW="inherit" />
                <Flex px="1.5rem" justify="space-between" align="center" borderStyle="solid" borderColor="yellow.400" borderWidth="1px" borderBottomRadius="4px" w="100%" h="100%" borderTop="none">
                  <Flex direction="column">
                    <Text fontSize="1.25rem" fontWeight="600">{city.name}</Text>
                    <Text mt="0.75rem" color="gray.500">{city.country}</Text>
                  </Flex>
                  <Image src={city.urlFlag} w={30} h={30} />
                </Flex>
              </Flex>
            </Flex>
          ))}
        </SimpleGrid>
      </Flex>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async({ params }) => {
  const { slug } = params;

  const continent = continents.find(continent => continent.uuid === slug);

  if (!continent) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { continent },
    redirect: 60 * 30, // 30 minutes
  };
}