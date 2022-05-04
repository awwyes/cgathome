import { Box, Flex, chakra, Icon, useColorModeValue, SimpleGrid, Divider } from '@chakra-ui/react';

export default function FAQsFeature() {
    const Feature = (props) => {
    return (
        <Box>
        <Flex
          alignItems="center"
          justifyContent="center"
          w={8}
          h={8}
          mb={4}
        >
        </Flex>
        <chakra.h3
          mb={2}
          fontWeight="semibold"
          lineHeight="shorter"
          color={useColorModeValue("gray.900", "gray.400")}
        >
          {props.title}
        </chakra.h3>
        <chakra.p
          fontSize="sm"
          color={useColorModeValue("gray.500", "gray.400")}
        >
          {props.children}
        </chakra.p>
      </Box>
    );
  };
  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={20}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        px={8}
        py={12}
        mx="auto"
        bg={useColorModeValue("white", "gray.800")}
        shadow="xl"
      >
        <Box textAlign={{ lg: "center" }}>
          <chakra.p
            mt={2}
            mb={3}
            fontSize={{ base: "3xl", sm: "4xl" }}
            lineHeight="8"
            fontWeight="extrabold"
            letterSpacing="tight"
            color={useColorModeValue("gray.900", "gray.400")}
          >
            FAQs
          </chakra.p>
          <Divider />
          <chakra.p
            mt={4}
            maxW="2xl"
            fontSize="xl"
            mx={{ lg: "auto" }}
            color={useColorModeValue("gray.500", "gray.400")}
          >
            Answers to some of the most common In-home care questions
          </chakra.p>
        </Box>
        <SimpleGrid
          columns={{ base: 1, sm: 1, md: 2, lg: 4 }}
          spacingX={{ base: 16, lg: 24 }}
          spacingY={20}
          mt={6}
        >
          <Feature
            title="What geographical locations does “Caregivers at Home” operate in?"
          >
            We proudly serve numerous counties in East Tennessee. These counties include: Bledsoe, Bradley, Grundy, Hamilton, Marion, McMinn, Meigs, Polk, Rhea, and Sequatchie counties.
          </Feature>

          <Feature
            title="How are Caregivers selected?"
          >
            We hire only those that have a true passion for working with seniors in order to help them live independently and more comfortably. All of our Caregivers are screened thoroughly prior to employment.
          </Feature>

          <Feature
            title="Do you provide senior services to those in nursing homes?"
          >
            Yes, not only do we provide compassionate care and companionship within the home, we also work at hospitals, assisted living facilities, and other community residences.
          </Feature>

          <Feature
            title="What Payor Sources do you currently accept?"
          >
            We currently accept Private Pay, Options Program, Family Caregiver Support, Title lll Homemaker, Choices, Workers Comp, and Long Term Care Insurance. If your payment option or insurance is not listed, please give us a call and we’ll be happy to verify for you.
          </Feature>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
