import { Heading, Grid, Flex, Link, Button, Text } from '@chakra-ui/core';
import Divider from '../components/Divider';
import Input from '../components/Input';

export default function Home() {
  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="1fr 480px 480px 1fr"
      templateRows="1fr 480px 1fr"
      templateAreas="
        '. . . .'
        '. logo form .'
        '. . . .'
      "
      justifyContent="center"
      alignItems="center"
    >
      <Flex gridArea="logo" flexDir="column" alignItems="flex-start">
        <img src="/piffy.svg" alt="Piffy" width={210} />

        <Heading size="2xl" lineHeight="shorter" marginTop={16}>
          Log in to the <br /> platform
        </Heading>
      </Flex>

      <Flex
        gridArea="form"
        height="100%"
        backgroundColor="gray.700"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={16}
      >
        <Input placeholder="Email" />

        <Input placeholder="Password" marginTop={2} />

        <Link
          alignSelf="flex-start"
          marginTop={2}
          fontSize="sm"
          color="blue.500"
          fontWeight="bold"
          _hover={{ color: 'blue.600' }}
        >
          I forgot my password
        </Link>

        <Button
          backgroundColor="blue.500"
          height="50px"
          borderRadius="sm"
          marginTop={6}
          _hover={{ backgroundColor: 'blue.600' }}
        >
          ENTER
        </Button>

        <Text textAlign="center" fontSize="sm" color="gray.300" marginTop={6}>
          Don't have an account?{' '}
          <Link
            color="blue.500"
            fontWeight="bold"
            _hover={{ color: 'blue.600' }}
          >
            Register
          </Link>
        </Text>

        <Divider />

        <Flex alignItems="center">
          <Text fontSize="sm">Or sign in with</Text>
          <Button
            height="50px"
            flex="1"
            backgroundColor="gray.600"
            marginLeft={6}
            borderRadius="sm"
            _hover={{ backgroundColor: 'blue.600' }}
          >
            FACEBOOK
          </Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
