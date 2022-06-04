import {Card, Group, Image, SimpleGrid, Text} from '@mantine/core'
const Cards = ({name, area, population, flag, region, language, sym, cname}) => {
    return(
       <Card
       p='md'
       shadow='sm'>
        <Card.Section>
            <Image src={flag} height={180} alt={'malia'}/>
        </Card.Section>
        <Card.Section p='sm'>
        <Text color='blue' weight={600} size='lg'>
            Name: {name}
        </Text>
        <Text color='grape' weight={500} size='md'>
           Region: {region}
        </Text>
        <Text weight={500} size='md'>
          Population: {population}
        </Text>
        <Text  weight={500} size='sm'>
           Ares: {area}
        </Text>
        <Text weight={500} size='sm'>
           Language: {language}
        </Text>
        <Text  weight={500} size='sm'>
           Currency Name: {cname}
        </Text>
        <Text color='green' weight={500} size='sm'>
            Currency Symbol: {sym}
        </Text>
        </Card.Section>

       

       </Card>
    )
}
export {Cards}