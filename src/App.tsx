import { Button } from "@chakra-ui/button";
import { Box, Divider, Flex } from "@chakra-ui/layout";
import { BrowserRouter as Router } from "react-router-dom";
import { Header, Sidebar, Pricing, Slider } from "./components";
import Modules from "./components/Modules";

const App = () => {
  return (
    <Router>
      <Flex minH="100vh">
        <Sidebar />
        <Flex ml="30vw" w="70vw" pt="12" pb="10" pl="36" pr="60">
          <Box flex="1">
            <Header />
            <Pricing />
            <Slider />
            <Modules />
            <Divider variant="dashed" borderColor="myBlue.300" borderWidth="1px" />
            <Flex justify="space-between" mt="5">
              <Button varaint="ghost" color="red.500" size="lg" disabled>
                Go Back
              </Button>
              <Button bg="myYellow.400" _hover={{ bg: "#e6b800" }} color="black" size="lg">
                Continue
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Router>
  );
};

export default App;
