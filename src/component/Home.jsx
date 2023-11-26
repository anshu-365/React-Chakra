import React from "react";
import { Box, Container, Heading, Image, Img, Stack, Text } from "@chakra-ui/react";
import img1 from "../assets/g1.jpg";
import img2 from "../assets/g2.jpg";
import img3 from "../assets/g3.jpg";
import img4 from "../assets/g4.jpg";
import img5 from "../assets/g6.png";
// import img6 from "../assets/g5.png";
import  "react-responsive-carousel/lib/styles/carousel.min.css";//css file inbuild while installing css
import { Carousel } from "react-responsive-carousel";//caraosel


const headingOptions={//this is object ....this is use to keep the heading center
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform:"translate(-50%,-50%)",
    textTransform:"uppercase",
    paddig:"4",
    size:"4xl"
}

const Home=()=>{
    
    return(
        <Box>
 
 
    <Carousel 
        autoPlay 
        infiniteLoop 
        interval={1000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}

        >
            <Box w="full" h={"100vh"}>{/*it's like Div */}

<Img src={img1}/>
<Heading 
textAlign={'center'} 
bgColor={'blackAlpha.200'} 
color={'white'}
{...headingOptions}//use the headingOption obj here to make the heading center
>LET'S PLAY </Heading>

</Box>
<Box w="full" h={"100vh"}>{/*it's like Div */}

<Img src={img2}/>
<Heading 
textAlign={'center'} 
bgColor={'whiteAlpha.300'} 
color={'GrayText'} 
{...headingOptions}//use the headingOption obj here to make the heading center
 >SHOOT THE ENEMY </Heading>
</Box>
{/* chanages */}
<Box w="full" h={"100vh"}>{/*it's like Div */}

<Img src={img3}/>
<Heading 
textAlign={'center'} 
bgColor={'blackAlpha.300'} 
color={'gray'} 
{...headingOptions}//use the headingOption obj here to make the heading center
 >KILLL</Heading>
</Box>

<Box w="full" h={"100vh"}>{/*it's like Div */}
<myCarousel/>
<Img src={img4}/>
<Heading 
textAlign={'center'} 
bgColor={'whiteAlpha.100'} //100 is brightness
color={'gray'} 
{...headingOptions}//use the headingOption obj here to make the heading center
 >SHOOT THE ENEMY </Heading>
</Box>



        </Carousel>
        <Container maxW={'full'}  minH={'100vh'}  p={'16'}>
        <Heading 
        textTransform={"uppercase"} 
        py={'2'} 
        w={'fit-content'}
        borderBottom={'2px solid'}
        m={'auto'}//margin
        >service</Heading>

        <Stack
        h={'full'}//height
        p={'4'}
        alignItems={'center'}
        direction={["column","row"]}//for big screen it behave as element as column for small screen it behave as big

        >
            <Image src={img5} h={['40','400']} filter={'hue-rotate(-130deg)' } borderRadius={'112'}/>{/*  filter={'hue-rotate(-130deg)' it change the color of imag...for big screen 400 and for small 40*/}
            <Text //chakra tag
            lineHeight={'190%'}
            p={['4','16']}//big screen=16 ...small screen=4
            letterSpacing={'widest'}
            textAlign={'center'}
            >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat cupiditate numquam totam, animi nisi pariatur quos impedit cum exercitationem dolore doloremque assumenda odit quas consequuntur ut rem. Quisquam eos explicabo a ducimus rem culpa, assumenda obcaecati doloremque autem rerum magnam ipsam laborum minima sequi asperiores dolor nemo eius nisi voluptas consequuntur fugiat, tenetur eligendi laboriosam nobis? Nam ex culpa dolores corporis veniam quisquam, quas voluptate officia totam.
            </Text>

        </Stack>
        </Container>

        </Box>

      
    );
}
export default Home;


