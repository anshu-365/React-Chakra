//it is which is use for chakra css

import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

 const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      variant="ghost"
      color="current"
      pos="fixed"
      top="4"//position direct propeerty.....1=4px
      right="4"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      zIndex={'overlay'}
      {...props}
    />
  );
};
export default ColorModeSwitcher;