import React from "react";
import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button, useDisclosure, VStack, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";
const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()//hook...jiske aage use that is hook
    //isOpen =true or false tell it open of close drawer...onOpen fuc use to open the drawer ....onClose fun use to close drawer
    return (
        <>
            <Button
             pos={'fixed'}
             top={'4'}
             left={'4'} 
             colorScheme="purple" 
             p={'0'} 
             w={'10'} 
             h={'10'} 
             zIndex={'overlay'}
             borderRadius={'full'} 
             onClick={onOpen}//after clicking onOpen Fuc will call
             >
                <BiMenuAltLeft size={'20'} />{/*menu icon */}

            </Button>
            <Drawer //menu par click karne par drawer jaise aayega
            isOpen={isOpen}//it is work as boolean...isOpen is inbuild fun like boolean..and {isOpen} it is user define fun...if true, the modal will be open.
            placement='left'//direction
            onClose={onClose}//inBuild onClose Callback invoked to close the modal...{onClose} it is user define 
            
            >
                <DrawerOverlay/>
                <DrawerContent> {/*Drawer contents we write inside the this tag */}
                    <DrawerCloseButton/>{/*by which it close drawer by it sign X */}
                    <DrawerHeader colorScheme={'red'} >VIDEO COLLECTION</DrawerHeader>
                    <DrawerBody> {/* body ke inside we write everythings */}
                <VStack alignItems={'flex-start'}>{/*all the content will be in verticle...VStack bydefault display is flex */}
                    <Button onClick={onClose} variant={'ghost'} colorScheme={'blue'} >
                        <Link to={'/'}>Home</Link>
                    </Button >
                    <Button onClick={onClose} variant={'ghost'} colorScheme={'blue'} >
                        <Link to={'/videos'}>Video</Link>{/*when we click to it redirect to videos file */}
                    </Button>
                    <Button onClick={onClose} variant={'ghost'} colorScheme={'blue'} >
                        <Link to={'/videos?category=free'}  >Free Video</Link>{/*when we click to it redirect to videos file ...'/videos?category=free' its like query */}
                    </Button>
                    <Button onClick={onClose} variant={'ghost'} colorScheme={'blue'} >
                        <Link to={'/upload'}>Upload Video</Link>
                    </Button>
                   
                </VStack>
                <HStack position={'absolute'}
                 bottom={'10'}
                left={'0'} 
                //bgColor={'gray'} 
                w={'full'}//width
                justifyContent={'space-evenly'}
                >
                    <Button onClick={onClose} colorScheme={'purple'}>{/* provoding onclose to every button  when we click the button drwawer should be closed  */}
                        <Link to={'/login'}  >Log In</Link>
                    </Button>
                    <Button onClick={onClose} colorScheme={'purple'} variant={'outline'}>
                        <Link  to={'/signup'}>Sign Up</Link>
                    </Button >
                </HStack>
                </DrawerBody>
                </DrawerContent>
            </Drawer>
           
        </>
    );
}
export default Header;