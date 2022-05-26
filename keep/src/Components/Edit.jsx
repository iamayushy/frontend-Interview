import { Modal } from "@mantine/core"
import { useState } from "react"

const Edit = ({handleModal}) => {
    cosnt [opened, setOpened] = useState(false)
    
    return(
        <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
      >
        {/* Modal content */}
      </Modal>

    </>
    )
}
export {Edit}