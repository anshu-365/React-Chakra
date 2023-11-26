import { Button, Container, Heading, Input, Text, VStack } from "@chakra-ui/react";
import {Link} from 'react-router-dom'
import React from "react";

const Login=()=>{
    return(
<Container
maxW={"Container.xl"}
h={'100vh'}
p={'16'}
>
<form>
    <VStack 
    alignItems={'stretch'}//strech will take full width 
    spacing={'8'} w={['full','96']} m={'auto'} my={'16'}>
        <Heading>Welcome BAck</Heading>
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
        <Button textTransform={'capitalize'}
        variant={'link'}
        alignSelf={'flex-end'}
        >
            <Link to={'/forgetpassword'}  > forget Password</Link>
        </Button>
        <Button 
        colorScheme={'purple'}
        type={'submit'}
        >
            log in
        </Button>
        <Text textTransform={'capitalize'} textAlign={'right'}> new user?
        <Button textTransform={'capitalize'}
        colorScheme={"purple"}
        variant={'link'}
        // alignSelf={'flex-end'}
        >
            <Link to={'/signup'}  > Sign Up</Link>
        </Button>
        </Text>
           
        
    </VStack>
</form>
</Container>
        
    );
}
export default Login;

