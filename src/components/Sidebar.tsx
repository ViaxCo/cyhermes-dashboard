import { Box, Divider, Flex, Link, Text } from "@chakra-ui/layout";
import { Link as RouterLink } from "react-router-dom";
import Logo from "./Logo";
import QuoteBox from "./QuoteBox";
import SidebarLink from "./SidebarLink";
import Span from "./Span";

const Sidebar = () => {
  return (
    <Flex
      direction="column"
      color="whiteAlpha.600"
      w="30vw"
      pt="12"
      pr="12"
      bg="#222"
      h="100vh"
      position="fixed"
    >
      <Box mb="48" pl="24">
        <Logo width="55" height="55" />
      </Box>
      <Box fontSize="xl" fontWeight="extrabold">
        <SidebarLink path="/trial" text="Trial & Pricing" />
        <SidebarLink path="/payment" text="Payment Method" />
      </Box>
      <Box pl="24" my="8">
        <Divider borderWidth="1px" borderColor="myYellow.400" variant="dashed" w="14" />
      </Box>
      <Link as={RouterLink} to="" fontWeight="bold" pl="24" mb="20">
        <Text>Get Started...</Text>
      </Link>
      <Box pl="20" position="relative" fontSize="sm" lineHeight="1.6">
        <QuoteBox width="300" />
        <Text position="absolute" top="6" left="167px" color="white" fontStyle="italic">
          Success is not final; failure is <br /> not fatal; it is the courage to <br /> continue
          that counts. <br />
          <Span fontStyle="normal" fontSize="smaller" fontWeight="bold">
            - Winston Churchill
          </Span>
        </Text>
      </Box>
    </Flex>
  );
};

export default Sidebar;
