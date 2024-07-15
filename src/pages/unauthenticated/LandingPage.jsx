import React from "react";
import BaseLayout from "../../components/layouts/BaseLayout";
import {
  Badge,
  Box,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import CustomInput from "../../components/inputs/CustomInput";
import abstract1 from "../../assets/images/abstract1.png";
import abstract2 from "../../assets/images/abstract2.png";

const LandingPage = () => {
  return (
    <BaseLayout>
      <Stack
        spacing={4}
        minH="100vh"
        justifyContent="center"
        alignItems="center"
        position="relative"
        bg="rgba(255, 255, 255, 0.05)"
      >
        <Image
          src={abstract2}
          position="absolute"
          right="0"
          maxW={[150, 300, 400, 500]}
          zIndex={1}
          alt="abstract"
        />
        <Text
          as="h1"
          textAlign="center"
          fontSize={["30px", "35px", "45px", "48px"]}
          color="#20F280"
          fontWeight="700"
          zIndex={1}
          px="20px"
        >
          Federal University Oye-Ekiti
        </Text>
        <Text
          as="h3"
          fontSize="20px"
          color="rgba(255, 255, 255, 0.73)"
          fontWeight="400"
          textAlign="center"
          zIndex={1}
          px="20px"
        >
          Innovation & Character For National Transformation
        </Text>
        <Box width={["90%", "80%", "900px", "900px"]} zIndex={1}>
          <CustomInput
            bg="white"
            height="50px"
            color="black"
            placeholder="Search for courses, past questions etc."
            rounded="40px"
            w="full"
          />
        </Box>
      </Stack>
      <VStack
        minH="100vh"
        pt={["50px", "70px", 0, 0]}
        alignItems="center"
        justifyContent="center"
        position="relative"
      >
        <Image
          src={abstract1}
          position="absolute"
          left="0"
          top={0}
          maxW={[100, 180, 200, 250]}
          zIndex={1}
          alt="abstract"
        />
        <Text
          as="h1"
          textAlign="center"
          fontSize={["25px", "30px", "40px", "40px"]}
          color="white"
          fontWeight="700"
          zIndex={1}
        >
          700M students saved, and counting
        </Text>
        <Text
          as="h2"
          textAlign="center"
          fontSize={["18px", "18px", "22px", "22px"]}
          color="white"
          fontWeight="400"
          maxW="730px"
          zIndex={1}
        >
          50K new study notes added every day, from the world’s most active
          student communities
        </Text>
        <HStack
          flexWrap="wrap"
          minW="80%"
          px="20px"
          my={["50px", "50px", "80px", "80px"]}
          justifyContent="space-evenly"
          alignItems="center"
        >
          <VStack zIndex={1} w="150px" alignItems="center">
            <Text
              as="h1"
              fontSize={["50px", "50px", "80px", "80px"]}
              lineHeight={["60px", "60px", "90px", "90px"]}
              color="white"
              fontFamily="Manrope"
              fontWeight="700"
            >
              35M
            </Text>
            <Text
              as="span"
              fontSize="14px"
              color="white"
              fontFamily="Manrope"
              fontWeight="400"
            >
              Study Resources
            </Text>
            <Badge
              rounded="20px"
              fontSize="12px"
              color="white"
              fontFamily="Manrope"
              fontWeight="500"
              bg="#006C31"
              px="8px"
              py="4px"
            >
              1 new each second
            </Badge>
          </VStack>
          <VStack zIndex={1} w="150px" alignItems="center">
            <Text
              as="h1"
              fontSize={["50px", "50px", "80px", "80px"]}
              lineHeight={["60px", "60px", "90px", "90px"]}
              color="white"
              fontFamily="Manrope"
              fontWeight="700"
            >
              25k
            </Text>
            <Text
              as="span"
              fontSize="14px"
              color="white"
              fontFamily="Manrope"
              fontWeight="400"
            >
              Institutions
            </Text>
            <Badge
              rounded="20px"
              fontSize="12px"
              color="white"
              fontFamily="Manrope"
              fontWeight="500"
              bg="#FB42F3"
              px="8px"
              py="4px"
            >
              In 50+ Countries
            </Badge>
          </VStack>
          <VStack zIndex={1} w="150px" alignItems="center">
            <Text
              as="h1"
              fontSize={["50px", "50px", "80px", "80px"]}
              lineHeight={["60px", "60px", "90px", "90px"]}
              color="white"
              fontFamily="Manrope"
              fontWeight="700"
            >
              15k
            </Text>
            <Text
              as="span"
              fontSize="14px"
              color="white"
              fontFamily="Manrope"
              fontWeight="400"
            >
              Users
            </Text>
            <Badge
              rounded="20px"
              fontSize="12px"
              color="white"
              fontFamily="Manrope"
              fontWeight="500"
              bg="#FB8442"
              px="8px"
              py="4px"
            >
              Every Month
            </Badge>
          </VStack>
        </HStack>
      </VStack>
    </BaseLayout>
  );
};

export default LandingPage;
