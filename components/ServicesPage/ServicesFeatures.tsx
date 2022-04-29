import { Flex, Box, useColorModeValue, SimpleGrid, chakra, Image, Divider } from '@chakra-ui/react';
import ServicesList from './ServicesList/ServicesList';

export default function ServicesFeatures() {
  return (
   <>
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={20}
      w="full"
      justifyContent="center"
      alignItems="center"
      pos="relative"
    >
      <Box
        shadow="xl"
        bg={useColorModeValue("white", "gray.800")}
        px={8}
        py={20}
        mx="auto"
      >
        <Box
            w="full"
            h="full"
            bg={useColorModeValue("gray.200", "gray.700")}
          >
          <Image
            width={'full'}
            height={'full'}
            src={'/../hands.webp'}
          />
          </Box>
        <SimpleGrid
          alignItems="start"
          columns={{ base: 1, md: 1 }}
          mb={10}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box>
            <chakra.h2
              mt={10}
              mb={4}
              fontSize={{ base: "xl", md: "4xl" }}
              letterSpacing="tight"
              textAlign={{ base: "center", md: "center" }}
              color={useColorModeValue("gray.900", "gray.400")}
              lineHeight={{ md: "shorter" }}
              textShadow="2px 0 currentcolor"
            >
              Expert Home Care For Seniors
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "center" }}
              color={useColorModeValue("gray.600", "gray.400")}
              fontSize={{ md: "lg" }}
            >
              Everyday primary caregivers are juggling work, home-life responsibilities, 
              outside commitments and trying to care for a loved one. Our caregivers can
              help ease your anxiety associated with the responsibility of caring for your senior.
            </chakra.p>
          </Box>
        </SimpleGrid>
        <Divider />
        <ServicesList />
      </Box>
    </Flex>
    </>
  );
}