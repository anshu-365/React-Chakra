import { Avatar, Button, Container, Heading, Input, Text, VStack } from "@chakra-ui/react";
import {Link} from 'react-router-dom'
import React from "react";

const Signup=()=>{
    return(
<Container
maxW={"Container.xl"}
h={'120vh'}
p={'16'}
>
<form>
    <VStack 
    alignItems={'stretch'}//strech will take full width 
    spacing={'8'} w={['full','96']} m={'auto'} my={'16'}>
        <Heading>Video Collection</Heading>
        <Avatar alignSelf={'center'} boxSize={'32'}/>
     
        <Input
        placeholder={'Name'} 
        type={'text'}
        required
        focusBorderColor={'purple.800'}
        />

        <Input
        placeholder={'Email'} 
        type={'email'}
        required
        focusBorderColor={'purple.800'}
        />
                <Input
        placeholder={'password'} 
        type={'password'}
        required
        focusBorderColor={'purple.800'}
        // textTransform={'capitalize'}
        />
       
        <Button 
        colorScheme={'purple'}
        type={'submit'}
        >
            Sign Up
        </Button>
        <Text textTransform={'capitalize'} textAlign={'right'}> Already sign Up?{' '}
        <Button textTransform={'capitalize'}
        colorScheme={"purple"}
        variant={'link'}
        // alignSelf={'flex-end'}
        >
            <Link to={'/login'}  > Log in</Link>
        </Button>
        </Text>
           
        
    </VStack>
</form>
</Container>
        
    );
}
export default Signup;