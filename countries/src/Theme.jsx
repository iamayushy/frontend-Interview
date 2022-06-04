import App from "./App"
import {FiSun, FiMoon} from 'react-icons/fi';
import {ActionIcon,MantineProvider, ColorSchemeProvider, Group} from '@mantine/core';
import { useState } from "react";

const Theme = () => {
  const [colorScheme, setColorScheme] = useState('light');
  const [handle, setHandle] = useState(false)
  function setMode(){
      setHandle(!handle)
      handle ? setColorScheme('light') : setColorScheme('dark')
  }

  return (
    <ColorSchemeProvider colorScheme={colorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
      <Group position="center" p='md'>
      <ActionIcon
      variant="outline"
      color={colorScheme === 'dark' ? 'yellow' : 'blue'}
      onClick={setMode}
      size='lg'
      title="Toggle color scheme"
    >
      {colorScheme === 'dark' ? <FiSun size={21} /> : <FiMoon size={21} />}
     </ActionIcon>
     </Group>

        <App/>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
export {Theme}