import { Box, Button, HStack, Heading, Input, Stack, VStack,Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineSend} from 'react-icons/ai'; 
import {NavLink} from 'react-router-dom'


const Footer=()=>{
    return(
        <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'gray'}>
           <Stack  direction={['column','row']}>{/* col=small screen.. row=big screen  */}
            <VStack
            alignItems={'stretch'}
            w={'full'}
            px={'4'}
            > 
           
           <Heading size={'md'} textTransform={'uppercase'}textAlign={['center','left']} >
            Subscribe get notification
           </Heading>
           <HStack
           borderBottom={'2px solid white'}
           py={'2'}
           >
            <Input 
            placeholder="enter email here..." 
            border={'none'} 
            borderRadius={'none'}
            outline={'none'}
            // focusBorderColor="none"//border radius none ho jayega
            
            />
            <Button
            p={'0'}
            variant={'ghost'}
            colorScheme={'purple'}
            borderRadius={'0 20px 20px 0'}

            >
                <AiOutlineSend //send icon
                size={'20'}/>
            </Button>
           </HStack>
           </VStack>
           <VStack //second vstack
           w={'full'}
           borderLeft={['none','1px solid white']} 
           borderRight={['none','1px solid white']} 

            >
                <Heading
                // size={'md'}
                textTransform={'uppercase'}
                textAlign={'center'}
                >VIDEO Collection
                </Heading>
                <Text>
                    All right received
                </Text>

           </VStack>
           <VStack //third vstack
           w={'full'}
           >
<Heading
size={'md'}
textTransform={'uppercase'}
>
    Social Media
</Heading>
<Button 
display={'flex'}
variant={'link'}//button will look only line while over the link
colorScheme={"white"}
textTransform={'uppercase'}

>
<NavLink  to="https://youtube.com" target={"blank"} 
>YouTube</NavLink>
</Button>
<Button 
display={'flex'}
variant={'link'}//button will look only line while over the link
colorScheme={"white"}
textTransform={'uppercase'}

>
<NavLink  to="https://www.instagram.com/anshu__365/" target={"blank"}>instagram</NavLink>
</Button>
<Button 
display={'flex'}
variant={'link'}//button will look only line while over the link
colorScheme={"white"}
textTransform={'uppercase'}

>

<NavLink  to="https://github.com/anshu-365" target={"blank"}>GitHub</NavLink>
</Button>

           </VStack>

           </Stack>
        </Box>
    );

};
export default Footer;