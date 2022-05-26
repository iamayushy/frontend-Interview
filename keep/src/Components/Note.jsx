import { useState } from "react"
import note from '../Components/note.module.css'
import {Group, Input, SimpleGrid, Textarea} from '@mantine/core'
import { Card } from "./Card"

const Note = () => {
  
   
    return(
        <div>
           
            
            <Group position="center">
                
                <Textarea
               
                className={note.area}
                placeholder="Start Something Today"
                autosize
                minRows={1}

                />


            </Group>
            <SimpleGrid
            style={{padding:'2rem'}}
             spacing='lg'
              cols={4}
              breakpoints={[
                { maxWidth: 'sm', cols: 1 },
                { maxWidth: 'md', cols: 3 },
                { maxWidth: 1200, cols: 4 },
              ]}
              >
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </SimpleGrid>
            
        </div>
       
    )
}
export {Note}