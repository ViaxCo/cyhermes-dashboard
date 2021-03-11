import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import Span from "./Span";

const Header = () => {
  return (
    <Flex justify="space-between" mb="16">
      <Box>
        <Text
          fontSize="sm"
          fontWeight="semibold"
          color="blackAlpha.600"
          textTransform="uppercase"
          mb="2"
        >
          Hey, Terry
        </Text>
        <Heading fontSize="3xl" mb="4">
          Start your{" "}
          <Span color="myYellow.400" fontStyle="italic">
            30 days
          </Span>{" "}
          Trial
        </Heading>
        <Text color="blackAlpha.600" fontSize="small">
          Select your preferred package below
        </Text>
      </Box>
      <Box lineHeight="1.2" alignSelf="flex-end">
        <Text color="myBlue.300" opacity="60%" fontSize="sm" fontWeight="extrabold">
          NGN
        </Text>
        <Text fontSize="3xl" color="myBlue.300" fontWeight="extrabold">
          1,999,999
        </Text>
        <Text color="blackAlpha.600" fontWeight="semibold" fontSize="lg">
          Total
          <Span fontSize="xs" textTransform="uppercase">
            {" "}
            (Excludes VAT)
          </Span>
        </Text>
      </Box>
    </Flex>
  );
};

export default Header;
