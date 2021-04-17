import { Image } from "@chakra-ui/image";
import { Flex, Stack, Text, VStack } from "@chakra-ui/layout";

export function Banner(){
  return (
    <Flex 
      height={[163,335]}
      backgroundImage="url('/images/background.svg')"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      justify="center"
    >
      <Flex
        width="100%"
        maxWidth="1160px"
        align="center"
        justify="space-between"
        mx="1rem"
      >
        <Flex 
          justify="center"
          direction="column"
          maxWidth={600}
        >
          <Stack>
            <Text
              fontSize={["1.25rem","2.25rem"]}
              color="gray.50"
            >
              5 Continentes,<br /> infinitas possibilidades
            </Text>

            <Text
              fontSize={["0.875rem", "1.25rem"]}
              color="gray.200"
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
          </Stack>
        </Flex>
        
        <Image
          src="/images/airplane.svg"
          alt="airplane"
          alignSelf="flex-end"
          marginBottom="-2.125rem"
          display={["none","none","block"]}
        />
      </Flex>
    </Flex>
  );
}