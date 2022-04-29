import { Box, SimpleGrid, Text, Stack } from '@chakra-ui/react';

interface FeatureProps {
  title: string;
  text: string;
}
  
const Feature = ({ title, text }: FeatureProps) => {
    return (
      <Stack>
        <Text fontWeight={600}>{title}</Text>
        <Text color={'gray.600'}>{text}</Text>
      </Stack>
    );
};
  
  export default function ServicesList() {
    return (
      <Box p={4}>
            <Text as={'h2'} textAlign={'center'} fontFamily={'heading'} fontSize={'3xl'} mb={10}><strong>Services</strong></Text>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Feature
                    title={'Companionship'}
                    text={'This may include, but not limited to, reading to the client, playing cards, board games, puzzles, taking the client for a walk, conversing with the client and simply being with them.'} />
                <Feature
                    title={'Personal Care Services'}
                    text={'We can assist with grooming, bathing, toileting, getting in and out of bed, and dressing.'} />
                <Feature
                    title={'Light housekeeping/Meal preparation'}
                    text={'We’ll help with laundry, bed making, washing dishes, menu planning, grocery shopping and preparing nutritious meals.'} />
                <Feature
                    title={'Medication assistance'}
                    text={'Reminders to take medication, assist with opening containers, picking up prescriptions, delivering medications the client may need.'} />
                <Feature
                    title={'Transportation and errands for incidentals'}
                    text={'We can run errands such as grocery shopping, post office, medical appointments and beauty shop trips.'} />
                <Feature
                    title={'Family Respite'}
                    text={'We provide family members a temporary and well deserved break from care-giving.'} />
                <Feature
                    title={'Tuck-In calls and Well-being checks'}
                    text={'To provide ease-of-mind, we are able to do regular tuck-in calls and checkups.'} />
            </SimpleGrid>
        </Box>
    );
}