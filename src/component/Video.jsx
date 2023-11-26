//imp component use for revision..how to handle more than two usestate using single button

import { Button, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const Video=()=>
{
    const videosArr = [
        'https://player.vimeo.com/progressive_redirect/playback/689949818/rendition/540p?loc=external&oauth2_token_id=1027659655&signature=cf602155bf49e4e74db6f2ec9d4ecf067fbab44c4295a8950d58ecdb88910882',
        'https://player.vimeo.com/progressive_redirect/playback/697718184/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=26d69c3df603d083fedd663acaab4d35a33444d11033a626864cf1e578e136cf',
        'https://player.vimeo.com/external/510850877.hd.mp4?s=d5e9ed9ea40ba755e28512cce6c1ad00d92506f7&profile_id=174',
        'https://player.vimeo.com/external/577442929.hd.mp4?s=95231c8a7fe2066ffb640204591b01a6c326b97c&profile_id=174',
        'https://player.vimeo.com/progressive_redirect/playback/689925384/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=5a819f11298d53cc1ed85837342f47ea61c8f95b9aeeb0c38edab72a80e0db78',
        'https://player.vimeo.com/progressive_redirect/playback/688648666/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=070a16d4b244bc11c2bd17b03e04e50460be3d2726ed554959a49fc05dbd0281',
        'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',
      ];
   /*video title  */   const videoTitle=['develop Coutnry','wild life','sky and clouds view','enjoy Peacfull enviroment','forest enviroment','enjoy sea enviroment','wave of sea'];

/*video description */ const videoDescription=["Dubai is a vibrant and modern city known for its stunning skyline, luxury shopping, and futuristic architecture. Home to iconic landmarks such as the Burj Khalifa, the world's tallest building, and the Palm Jumeirah, an artificial archipelago, Dubai seamlessly blends tradition with innovation.","Wild animal life is characterized by a diverse array of species, each adapted to its environment through evolutionary processes. In the wild, animals employ various survival strategies, including physical adaptations, behavioral patterns, and unique ecological roles.","The view of the clouds and sky is a captivating and ever-changing spectacle that can evoke a sense of wonder and tranquility. The sky serves as a canvas for nature's artistic expressions, offering a myriad of colors, patterns, and textures","Enjoying a peaceful environment is a serene escape from the hustle and bustle of everyday life. Surrounded by nature's tranquility, one finds solace in the gentle rustle of leaves, the melodious chirping of birds, and the soothing flow of a nearby stream","A forest view is a captivating tableau of nature's grandeur. Towering trees create a lush canopy, dappling sunlight on the forest floor. The air is filled with the earthy scent of moss and the gentle murmur of rustling leaves","Enjoying the sea environment is a sensory symphony of relaxation. The rhythmic sound of waves kissing the shore creates a soothing soundtrack, accompanied by the gentle caress of sea breeze.","The sea view captivates with its mesmerizing waves — a rhythmic dance of energy and serenity. Each wave rises and falls in graceful patterns, reflecting the sunlight in a shimmering display. "]


const[videoSrc,setVideoSrc]=useState(videosArr[0])//acceseing first video from videoarr collection

const[videoTitles,setVideoTitles]=useState(videoTitle[0])//use for video title or title

const [videoDes,setVideoDes]=useState(videoDescription[0])//use for video description to iterarte the video desc





    return (
        <Stack 
        direction={['column','row']}
        h={'100vh'}
        >
      <VStack //only for media player
      w={'full'}>
        <video  
        controls
        controlsList='nodownload'
        src={videoSrc }
        style={{
            width:'100%'
        }}
        ></video>
<VStack //description
alignItems={'flex-start'}
p={'4'}
w={'full'}
overflowY={'auto'}

>
<Heading  textTransform={'capitalize'}>
    {videoTitles}{/*video heading accessesing from array using usestate hook */}
</Heading>
<Text> {videoDes} </Text>
{/* <Heading>Sample Video 1</Heading>
<Text> this is sample and demo video </Text> */}
</VStack>
      </VStack>
      <VStack //sari video download
      width={['full','xl']} //for phone wisth will be full......for big screen will be xl
      alignItems={'stretch'}
      p={'8'}
      spacing={'8'}
      overflow={'auto'}
      >
       
    
       {
        videosArr.map((item,index)=>(//NOTE:IMPORTANT TO HANDLE MORE THAN TWO USESTATE WITH SINGLE STATE
            <Button 
            variant={'ghost'} 
            colorScheme={'gray'} 
            fontFamily={'sans-serif'}
            // fontWeight={'1'}
            // lineHeight={'0.001'}
            textTransform={'uppercase'} 
            // overflowX={'auto'}
            // onClick={()=>setVideoSrc(item)}
            onClick={() => {
                setVideoSrc(item); //it accessing the item of videoArr
                setVideoTitles(videoTitle[index]);//from here i am accessing videoTitles useState element
                setVideoDes(videoDescription[index])//accessing the video description 
              }}
            >
                {(videoTitle[index])} {/*{index +1}now it's index start from 1 instead of 0.......now only we keep the button as title name */}
            </Button>

        ))
       }
      </VStack>
        </Stack>
    );
}
export default Video;

