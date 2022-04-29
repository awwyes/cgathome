import { Box, SimpleGrid, Text, Stack, Link, Image } from '@chakra-ui/react';

interface FeatureProps {
  title: string;
  image: string;
  href: string;
}
  
const Feature = ({ title, image, href }: FeatureProps) => {
    return (
      <Stack>
        <Text fontWeight={600}>{title}</Text>
        <Image src={image} width={'230px'} height={'60px'} />
        <Link color={'black'} href={href}>{href}</Link>
      </Stack>
    );
};
  
  export default function ResourcesList() {
    return (
      <Box p={4}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                <Feature
                    title={'Aging Life Care Association'}
                    image={'https://www.aginglifecare.org/App_Themes/ALCAAustinR/images/Logo_ALCA.svg'}
                    href={'https://www.aginglifecare.org/'}
                />
                <Feature
                    title={'Alzheimer’s Association'}
                    image={'https://www.alz.org/media/Images/Logos/logo.png'}
                    href={'http://www.alz.org/'}
                />
                <Feature
                    title={'Alzheimer’s Foundation of America'}
                    image={'https://149744320.v2.pressablecdn.com/wp-content/uploads/2021/12/AFAAnniversary-Logo-212x212-1.png'}
                    href={'http://www.alzfdn.org/'}
                />
                <Feature
                    title={'American Association of Retired Persons'}
                    image={'https://cdn.aarp.net/content/dam/aarp/graphics/aarp_logos/139x36-aarp-logo-header-white-smaller.imgcache.rev5a931b762f5ebff74aa86c12542767eb.svg'}
                    href={'http://www.aarp.org/'}
                />
                <Feature
                    title={'American Parkinson Disease Association'}
                    image={'https://www.apdaparkinson.org/wp-content/uploads/2017/02/apda-logo-506x130-1.png'}
                    href={'http://www.apdaparkinson.org/'}
                />
                <Feature
                    title={'American Society on Aging'}
                    image={'https://www.asaging.org/themes/custom/gavias_edmix/logo.png'}
                    href={'http://www.asaging.org/'}
                />
                <Feature
                    title={'Arthritis Foundation'}
                    image={'https://www.arthritis.org/img/template-images/logo.jpg'}
                    href={'http://arthritis.org/'}
                />
                <Feature
                    title={'Benefits Check-Up'}
                    image={'https://bcu-qa-wp-content.s3.amazonaws.com/content/uploads/2021/03/05163008/2021-NCOA-sub-BCU-1.svg'}
                    href={'https://www.benefitscheckup.org/'}
                />
                <Feature
                    title={'Medicare'}
                    image={'https://frontend.medicare.gov/static/media/medicare-logo-green.9e8316a5.svg'}
                    href={'https://www.medicare.gov/'}
                />
                <Feature
                    title={'National Area Agencies on Aging'}
                    image={'https://www.usaging.org/images/theme/logo.png'}
                    href={'http://www.n4a.org/'}
                />
                <Feature
                    title={'National Institute on Aging'}
                    image={'https://www.nia.nih.gov/themes/nia/images/logo_nih-nia_min.svg'}
                    href={'http://www.nia.nih.gov/'}
                />
                <Feature
                    title={'Social Security Administration'}
                    image={'https://www.ssa.gov/framework/images/logo.svg'}
                    href={'http://www.ssa.gov/'}
                />
                <Feature
                    title={'U.S Department of Veterans Affairs'}
                    image={'https://s3-us-gov-west-1.amazonaws.com/content.www.va.gov/img/header-logo.png'}
                    href={'http://www.va.gov/'}
                />
            </SimpleGrid>
        </Box>
    );
}