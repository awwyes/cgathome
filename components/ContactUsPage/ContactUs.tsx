import { Fragment } from 'react';
import { Container, FormControl, FormLabel, Input, Textarea, Stack, Button, Image, Heading, useColorModeValue, VStack, Flex, Text, Icon, Divider, createIcon } from '@chakra-ui/react';
import { GoLocation } from 'react-icons/go';
import { BsPhone } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import Link from 'next/link';

export const FaxIcon = createIcon({
    displayName: 'FaxIcon',
    viewBox: '0 0 400 400',
    path: (
      <path
        fill="#48BB78"
        d='M165.342 15.988 C 155.482 19.503,155.469 19.572,155.469 66.772 L 155.469 107.031 140.309 107.031 L 125.149 107.031 122.806 102.880 C 117.444 93.379,108.645 86.072,97.418 81.796 L 91.016 79.358 68.750 79.076 C 43.306 78.754,38.785 79.322,29.232 84.042 C 18.130 89.527,9.527 99.392,5.125 111.684 L 2.734 118.359 2.523 229.467 C 2.288 353.774,1.985 346.533,7.910 358.548 C 13.657 370.205,24.607 379.256,37.891 383.328 C 44.901 385.478,87.137 385.480,94.100 383.332 C 100.644 381.312,107.010 377.948,112.040 373.851 L 116.355 370.337 237.279 370.129 L 358.203 369.922 363.470 367.873 C 379.097 361.793,389.571 351.073,395.060 335.539 L 397.266 329.297 397.266 239.453 L 397.266 149.609 395.011 142.730 C 388.254 122.117,369.923 108.272,348.518 107.616 L 342.194 107.422 342.191 66.967 C 342.188 34.763,341.972 25.997,341.132 23.986 C 339.737 20.647,335.139 16.692,331.467 15.672 C 326.578 14.314,169.196 14.614,165.342 15.988 M312.500 102.734 L 312.500 160.938 248.828 160.938 L 185.156 160.938 185.156 102.734 L 185.156 44.531 248.828 44.531 L 312.500 44.531 312.500 102.734 M88.735 110.076 C 93.096 112.057,97.310 116.603,98.778 120.910 C 100.401 125.674,100.661 337.036,99.050 342.487 C 95.934 353.034,89.594 355.464,65.234 355.447 C 42.019 355.431,37.958 353.987,33.493 344.158 C 31.470 339.704,31.215 125.341,33.227 120.525 C 35.185 115.839,37.991 112.784,42.319 110.628 C 47.813 107.890,83.001 107.472,88.735 110.076 M155.469 157.447 C 155.469 179.617,155.772 181.698,159.608 185.806 C 163.570 190.050,159.016 189.844,248.828 189.844 C 338.640 189.844,334.086 190.050,338.049 185.806 C 341.884 181.698,342.187 179.617,342.188 157.447 L 342.188 136.719 345.955 136.719 C 354.255 136.719,362.614 142.050,366.121 149.580 L 367.953 153.516 367.953 239.063 L 367.953 324.609 366.121 328.545 C 363.752 333.633,357.989 338.718,352.869 340.238 C 346.709 342.067,128.511 342.001,129.213 340.170 C 129.474 339.491,129.688 293.436,129.688 237.827 L 129.688 136.719 142.578 136.719 L 155.469 136.719 155.469 157.447 M185.349 225.219 C 174.993 229.142,172.476 242.535,180.733 249.784 C 192.683 260.276,209.274 246.737,202.249 232.226 C 199.316 226.168,191.451 222.907,185.349 225.219 M243.756 225.463 C 236.408 228.650,233.219 235.666,235.550 243.517 C 239.684 257.437,259.166 256.640,262.361 242.421 C 264.972 230.799,254.165 220.949,243.756 225.463 M303.743 224.991 C 295.512 227.472,291.389 237.597,295.310 245.699 C 301.913 259.338,321.844 253.900,321.871 238.451 C 321.886 229.480,312.347 222.397,303.743 224.991 M188.672 272.291 C 188.242 272.416,186.930 272.731,185.757 272.990 C 177.338 274.845,173.175 287.382,178.370 295.232 C 187.523 309.064,208.983 297.133,203.075 281.496 C 201.072 276.194,192.985 271.026,188.672 272.291 M245.016 272.831 C 238.631 274.537,233.631 282.610,234.883 289.190 C 236.864 299.595,247.950 304.678,256.286 299.004 C 269.724 289.858,260.599 268.668,245.016 272.831 M306.641 272.291 C 306.211 272.416,304.899 272.731,303.725 272.990 C 293.579 275.226,290.366 291.641,298.779 298.259 C 312.717 309.223,329.879 289.700,317.736 276.694 C 315.050 273.817,309.265 271.521,306.641 272.291 '
      />
    )
  })

const contactOptions = [
    {
      label: 'ADDRESS',
      value: '5619 Main St Suite 113, Ooltewah, TN 37363',
      href: 'https://www.google.com/maps/place/Caregivers+at+Home/@35.0745449,-85.0646263,17z/data=!3m1!4b1!4m5!3m4!1s0x886087e1378b9f4f:0x9db943a30ab71db2!8m2!3d35.0745405!4d-85.0624323',
      icon: GoLocation
    },
    {
      label: 'PHONE NUMBER',
      value: '+1 (423) 503-4851',
      href: 'tel:+1-423-424-9958',
      icon: BsPhone
    },
    {
      label: 'FAX',
      value: '+1 (423) 910-1450',
      href: 'tel:+1-(423)-910-1450',
      icon: FaxIcon
    },
    {
      label: 'EMAIL',
      value: 'donnascaregiversathome@gmail.com',
      href: 'mailto:donnascaregiversathome@gmail.com?subject=Website: Contact Us Form',
      icon: HiOutlineMail
    }
  ];

export default function ContactUsPage() {
    return (
        <Container maxW="7xl" py={10} px={8}>
        <Stack spacing={10}>
          <Flex align="center" justify="center" direction="column">
            <Heading fontSize="4xl" mb={2}>
              Contact Us
            </Heading>
            <Image width={'740px'} height={'300px'} objectFit={'cover'} src={'/contactus.webp'} alt={'Contact Us Image'} mb={6} />
            <Divider />

          </Flex>
          <Stack
            spacing={{ base: 6, md: 0 }}
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
          >
            {contactOptions.map((option, index) => (
              <Fragment key={index}>
                <Stack spacing={3} direction="column" justify="center" alignItems="center" px={3}>
                  <Link href={option.href}>
                    <Icon as={option.icon} w={10} h={10} color="green.400" />
                  </Link>
                  <Text fontSize="lg" fontWeight="semibold">
                    {option.label}
                  </Text>
                  
                  <Text fontSize="md" textAlign="center">
                    {option.value}
                  </Text>
                  
                </Stack>
                {contactOptions.length - 1 !== index && (
                  <Flex d={{ base: 'none', md: 'flex' }}>
                    <Divider orientation="vertical" />
                  </Flex>
                )}
              </Fragment>
            ))}
          </Stack>
          <Divider orientation='horizontal' />
          <VStack
            as="form"
            spacing={8}
            w="100%"
            bg={useColorModeValue('white', 'gray.700')}
            rounded="lg"
            boxShadow="lg"
            p={{ base: 5, sm: 10 }}
          >
            <VStack spacing={4} w="100%">
              <Stack w="100%" spacing={3} direction={{ base: 'column', md: 'row' }}>
                <FormControl id="name">
                  <FormLabel>Name</FormLabel>
                  <Input type="text" placeholder="Your Name" rounded="md" />
                </FormControl>
                <FormControl id="email">
                  <FormLabel>Email</FormLabel>
                  <Input type="email" placeholder="Email Address" rounded="md" />
                </FormControl>
              </Stack>
              <FormControl id="message">
                <FormLabel>Message</FormLabel>
                <Textarea size="lg" placeholder="Enter your message" rounded="md" />
              </FormControl>
            </VStack>
            <VStack w="100%">
              <Button
                bg="green.300"
                color="white"
                _hover={{
                  bg: 'green.500'
                }}
                rounded="md"
                w={{ base: '100%', md: 'max-content' }}
              >
                Send Message
              </Button>
            </VStack>
          </VStack>
        </Stack>
      </Container>
    )
}