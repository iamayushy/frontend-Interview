import { Button, SimpleGrid, Paper, Text, Title, Modal } from "@mantine/core"
import { useState } from "react"
import { Edit } from "./Edit"

const Card = () => {
    const [opened, setOpened] = useState(false)
    return(
        <Paper
         shadow="md"
          radius="md"
           p="lg" 
           withBorder
           >
        <Title order={3}>
            I have Some Data
        </Title>
        <br />
        <Text>Paper is the most basic ui component</Text>
        <Text>
          Use it to create cards, dropdowns, modals and other components that require background
          with shadow
        </Text>
        <Text>
          Use it to create cards, dropdowns, modals and other components that require background
          with shadow
        </Text>
        <Text>
          Use it to create cards, dropdowns, modals and other components that require background
          with shadow
        </Text>
        <SimpleGrid p='md'  spacing='xl' cols={2}>
        
        <Button
        onClick={() => setOpened(!opened)}
         uppercase>
            Edit
        </Button>
        <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!">
            <h1>Hello Modal</h1>
        </Modal>
        
        <Button

         size="sm" uppercase color='red'>
            Delete
        </Button>
        </SimpleGrid>
        
      </Paper>
    )
}
export {Card}