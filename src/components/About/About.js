import {
  Avatar,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  VStack,
  Box,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import termsAndCondition from '../../assests/docs/termsAndCondition';
import me from '../../assests/images/founder.jpg';
import introVideo from '../../assests/videos/intro.mp4';
import React from 'react';
import { RiSecurePaymentFill } from 'react-icons/ri';
const Founder = () => (
  <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
    <VStack>
      <Avatar src={me} boxSize={['40', '48']} />
    </VStack>
    <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
      <Heading children="Course Bundler" size={['md', 'xl']} />
      <Text
        textAlign={['center', 'left']}
        children={`At CourseBundler, our vision is to be the most well regarded education provider in India committed to the highest standards of teaching excellence and learner care, supported by latest technology and cutting edge research.
We ask more of ourselves, so we can give more to our Learner. We push the boundaries of excellence in everything we do, so we can deliver the highest standards in improving skills.
`}
      />
    </VStack>
  </Stack>
);
const VideoPlayer = () => (
  <Box>
    <video
      controls
      autoPlay
      loop
      muted
      controlsList="nodownload nofullscreen noremoteplayback"
      disablePictureInPicture
      disableRemotePlayback
      src={introVideo}
    ></video>
  </Box>
);
const TandC = ({ termsAndCondition }) => (
  <Box>
    <Heading
      size={'md'}
      children="Terms & Condition"
      textAlign={['center', 'left']}
      my="4"
    />
    <Box h="sm" p="4" overflowY={'scroll'}>
      <Text
        letterSpacing={'widest'}
        fontFamily={'heading'}
        textAlign={['center', 'left']}
      >
        {termsAndCondition}
      </Text>
      <Heading
        my={'4'}
        size={'xs'}
        children="Refund only applicable within 7 Days"
      />
    </Box>
  </Box>
);
const About = () => {
  return (
    <Container maxW={'container.lg'} padding="16" boxShadow={'lg'}>
      <Heading children="About Us" textAlign={['center', 'left']} />
      <Founder />
      <Stack m="8" direction={['column', 'row']} alignItems="center">
        <Text fontFamily={'cursive'} m="8" textAlign={['center', 'left']}>
          We are a video streaming platform with some premium courses available
          only for premium users.
        </Text>

        <Link to="/subscribe">
          <Button variant={'ghost'} colorScheme="yellow">
            Checkout Our Plan
          </Button>
        </Link>
      </Stack>
      <VideoPlayer />
      <TandC termsAndCondition={termsAndCondition} />
      <HStack my="4" p={'4'}>
        <RiSecurePaymentFill />
        <Heading
          size={'xs'}
          fontFamily="sans-serif"
          textTransform={'uppercase'}
          children={'Payment is secured by Razorpay'}
        />
      </HStack>
    </Container>
  );
};

export default About;
