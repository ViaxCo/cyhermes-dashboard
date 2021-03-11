import { Box, Flex } from "@chakra-ui/layout";
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
          </Box>
        </Flex>
      </Flex>
    </Router>
  );
};

export default App;
