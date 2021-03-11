import { Box, Flex, Text } from "@chakra-ui/layout";
import { GoPrimitiveDot as Dot } from "react-icons/go";
import Span from "../Span";

const BoxLeft = () => {
  return (
    <Box
      p="10"
      pt="20"
      boxShadow="-21px 44px 31px 18px rgba(226,232,255,0.55)"
      w="49%"
      rounded="md"
    >
      <Flex h="100%" direction="column" justify="space-between">
        <Box>
          <Box lineHeight="1.3">
            <Text color="myYellow.400" fontSize="smaller" fontWeight="semibold">
              Starts from
            </Text>
            <Text color="blackAlpha.500" fontSize="xs" fontWeight="extrabold">
              NGN
            </Text>
            <Text fontWeight="extrabold">5,999,999.99</Text>
          </Box>
          <Text fontSize="smaller" color="blackAlpha.600">
            per annum
          </Text>
        </Box>
        <Box>
          <Text fontSize="lg" fontWeight="bold">
            Premium
          </Text>
          <Box color="blackAlpha.600" fontSize="small" fontWeight="bold">
            <Span>100 Users</Span>{" "}
            <Box as={Dot} display="inline-block" mx="1" fontSize="xs" color="myYellow.400" />
            <Span>All Modules</Span>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default BoxLeft;
