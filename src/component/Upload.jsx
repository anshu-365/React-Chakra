import { Button, Container, HStack, Input, VStack } from "@chakra-ui/react";
import {AiOutlineCloudUpload} from 'react-icons/ai';//we have to import Ai file after react-icon...uploadIcon
import React from "react";

const Upload=()=>{
return(
<Container maxW={'container.xl'} h={'100vh'} p={'16'} >
    <VStack 
    color={'purple.500'}
    h={'full'}
    justifyContent={'center'}
    >
        <AiOutlineCloudUpload size={'10vmax'}/>{/* upload icon */}
        <form>
            <HStack>
                <Input required type={'file'} 
                 css={{'&::file-selector-button':{//suedo selector
                    border:'none',
                    width:'calc(100%+36px)',
                    height:'100%',
                    marginLeft:'-20px',
                    color:'purple',
                    backgroundColor:'white',
                    cursor:'pointer'
                 }}}
                 />
                <Button colorScheme={'purple'} type={'submit'}>
                    Upload
                </Button>
            </HStack>
        </form>
    </VStack>

</Container>
);
}
export default Upload;

