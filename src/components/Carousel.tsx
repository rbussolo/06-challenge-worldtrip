import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Flex, Text } from '@chakra-ui/layout';
import Link from 'next/link';
import { useBreakpointValue } from '@chakra-ui/media-query';

const continents = [{
  uuid: "europa",
  name: "Europa",
  description: "O continente mais antigo",
  url: "/images/europa.svg"
},{
  uuid: "america-do-sul",
  name: "América do Sul",
  description: "O continente onde tem mais Hue Hue",
  url: "/images/south_america.jpg"
},{
  uuid: "america-do-norte",
  name: "América do Norte",
  description: "O continente que ama Mc Donalds",
  url: "/images/north_america.jpg"
}];

SwiperCore.use([Navigation, Pagination, Autoplay]);

export function Carousel(){
  const isWideVersion = useBreakpointValue({ base: "swipper-small", lg: "swipper-normal" });

  return (
    <Box maxW={1240} w="100%" mx="auto" my={["1.25rem", "5rem"]} className={isWideVersion}>
      <Swiper
        id="swiper"
        pagination
        navigation
      >
        {continents.map(continent => (
          <SwiperSlide key={continent.uuid}>
            <Link href={`/continent/${continent.uuid}`} passHref>
              <Flex
                as="a"
                background={`linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url('${continent.url}') no-repeat center`}
                justify="center"
                align="center"
                direction="column"
                height={[250,450]}
              >
                <Text fontSize={["1.5rem", "3rem"]} color="gray.50" fontWeight="700">{continent.name}</Text>
                <Text fontSize={["0,875rem", "1.5rem"]} color="gray.200" fontWeight="700" mt="1rem">{continent.description}</Text>
              </Flex>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}