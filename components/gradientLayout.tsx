import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

// Make this componenet responsive

const GradientLayout = ({
  color,
  children,
  image,
  subtitle,
  title,
  description,
  roundImage,
}) => {
  return (
    <Box
      as="main"
      height="100%"
      overflowY="auto"
      bgGradient={`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%, rgba(0,0,0,0.95) 75%)`}
    >
      <Flex bg={`${color}.600`} padding="40px" align="end">
        <Box padding="20px">
          <Image
            display={{ sm: "none", md: "block" }}
            boxSize="160px"
            boxShadow="2xl"
            src={image}
            borderRadius={roundImage ? "100%" : "3px"}
          />
        </Box>
        <Box padding="20px" lineHeight="40px" color="white">
          <Text fontSize="x-small" fontWeight="bold" casing="uppercase">
            {subtitle}
          </Text>
          <Text maxW={"2000px"} fontSize="5xl">
            {title}
          </Text>
          <Text fontSize="x-small">{description}</Text>
        </Box>
      </Flex>
      <Box paddingY="50px">{children}</Box>
    </Box>
  );
};

export default GradientLayout;
