import { Container, VStack, Heading, Text, Input, InputGroup, InputRightElement, Button, Link, Divider, HStack, Box } from "@chakra-ui/react";
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="lg">Welcome back!</Heading>
        <Text>Start managing your finance faster and better</Text>
        
        <InputGroup>
          <Input type="email" placeholder="you@example.com" />
        </InputGroup>

        <InputGroup>
          <Input type={showPassword ? "text" : "password"} placeholder="At least 8 characters" />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handlePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </Button>
          </InputRightElement>
        </InputGroup>

        <Link alignSelf="flex-end" color="blue.500">Forgot password?</Link>

        <Button colorScheme="blue" width="100%">Login</Button>

        <HStack width="100%" alignItems="center">
          <Divider />
          <Text>or</Text>
          <Divider />
        </HStack>

        <Button leftIcon={<FaGoogle />} colorScheme="red" width="100%">Google</Button>
        <Button leftIcon={<FaFacebook />} colorScheme="blue" width="100%">Facebook</Button>

        <Text>
          Don't you have an account? <Link color="blue.500">Sign Up</Link>
        </Text>
      </VStack>
      
      <Box position="absolute" bottom="4">
        <Text fontSize="sm">© 2022 ALL RIGHTS RESERVED</Text>
      </Box>
    </Container>
  );
};

export default Index;