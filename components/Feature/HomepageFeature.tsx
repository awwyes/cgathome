import {Box, Icon, chakra, Flex, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import { FaPrayingHands, FaUserNurse } from 'react-icons/fa';
import { BiHomeHeart } from 'react-icons/bi';

export default function HomepageFeature() {
    const Feature = (props) => {
      return (
        <Box>
          <Icon
            boxSize={12}
            color={useColorModeValue("brand.700", "brand.800")}
            mb={4}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            {props.icon}
          </Icon>
          <chakra.h3
            mb={3}
            fontSize="lg"
            lineHeight="shorter"
            fontWeight="bold"
            color={useColorModeValue("gray.900", 'gray.300')}
          >
            {props.title}
          </chakra.h3>
          <chakra.p
            lineHeight="tall"
            color={useColorModeValue("gray.600", "gray.400")}
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
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={20}
          px={{ base: 4, lg: 16, xl: 24 }}
          py={20}
          mx="auto"
          bg={useColorModeValue("white", "gray.800")}
          shadow="xl"
        >
          <Feature
            title="Quality Care"
            icon={
              <FaPrayingHands />
            }
          >
            We bring our warm loving care to your home. 
            Your home may be a Senior Retirement Community an Independent Living facility,
            an Assisted Living or even a Nursing Home. Caregivers at Home come to you wherever
            your residence may be in our service area.
            <br />
            <br />
            We provide a free in-home assessment. 
            During the assessment we look at what needs you may have and coordinate your care with you.
            We establish a plan of care and provide a Caregiver who is the right fit and one who can best
            meet your needs to help you reach your goals.
            <br />
            <br />
            <strong>
              Our Vision is to be the most trusted, customer focused, caring, home care organization
              in the communities we serve. We truly believe “Caring is our Calling.”
            </strong>
          </Feature>
  
          <Feature
            title="Trained Caregivers"
            icon={
              <FaUserNurse />
            }
          >
            At Caregivers at Home we use a standardized approach when training our caregivers. 
            Our training curriculum was developed by a Registered Nurse.
            <br />
            <br />
            <strong>
              We have a rigorous pre-employment screening process.
              Our Caregivers must pass all check points, including a fingerprint criminal background
              check and drug screen prior to employment.
            </strong>
          </Feature>
  
          <Feature
            title="In-home Care"
            icon={
              <BiHomeHeart />
            }
          >
            Not only do we provide compassionate care within the home, we also work at hospitals, assisted living facilities and other community residences.
          </Feature>
        </SimpleGrid>
      </Flex>
    );
  }
  