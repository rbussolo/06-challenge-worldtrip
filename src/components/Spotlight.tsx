import { Image } from "@chakra-ui/image";
import { Box, Flex, FlexProps, Text } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";

interface SpotlightProps extends FlexProps{
  icon: string;
  description: string;
}

export function Spotlight({ icon, description, ...rest }: SpotlightProps){
  const isWideVersion = useBreakpointValue({ base: false, lg: true });

  if(!isWideVersion){
    return (
      <Flex align="center" _before={{ content: `""`, width: "8px", height: "8px", background: "yellow.800", marginRight: "0.5rem", borderRadius: "4px" }} {...rest} >
        <Text fontSize="18" fontWeight="500">{description}</Text>
      </Flex>
    )
  }

  return (
    <Flex justify="center" align="center" direction="column" {...rest}>
      <Image src={icon} />
      <Text fontSize="24" fontWeight="600" marginTop="1.5rem">{description}</Text>
    </Flex>
  )
}