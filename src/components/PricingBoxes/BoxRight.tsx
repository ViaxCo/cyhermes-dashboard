import { Box, ListIcon, ListItem, Text, UnorderedList } from "@chakra-ui/layout";
import { BiMinus as MinusIcon } from "react-icons/bi";
import { IoIosCheckmarkCircle as CheckIcon } from "react-icons/io";
import Span from "../Span";

const BoxRight = () => {
  return (
    <Box
      bg="myBlue.50"
      w="49%"
      rounded="md"
      border="1px solid"
      borderColor="myBlue.300"
      p="8"
      py="10"
      color="blackAlpha.600"
      fontSize="small"
      position="relative"
    >
      <Box
        position="absolute"
        top="-4"
        right="-4"
        bg="white"
        w="42px"
        h="42px"
        borderRadius="full"
      />
      <Box as={CheckIcon} size="52" color="green.200" position="absolute" top="-5" right="-5" />
      <Text fontWeight="extrabold" fontSize="xl" color="myBlue.300">
        Basic
      </Text>
      <Text mb="5">
        <Span fontWeight="bold">30 days trails </Span>
        on our premium app features and features
      </Text>
      <Text textTransform="uppercase" fontSize="smaller" fontWeight="extrabold">
        Includes
      </Text>
      <UnorderedList listStyleType="none" ml="0">
        <ListItem>
          <ListIcon as={MinusIcon} mr="1" />
          25 Users
        </ListItem>
        <ListItem>
          <ListIcon as={MinusIcon} mr="1" />
          All modules & features
        </ListItem>
        <ListItem>
          <ListIcon as={MinusIcon} mr="1" />
          Unlimited commitees
        </ListItem>
        <ListItem>
          <ListIcon as={MinusIcon} mr="1" />
          Unlimited roles creation
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default BoxRight;
