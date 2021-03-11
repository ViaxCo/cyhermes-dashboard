import { Flex } from "@chakra-ui/layout";
import { BoxLeft, BoxRight } from "./PricingBoxes";

const Pricing = () => {
  return (
    <Flex p="2" justify="space-between">
      <BoxLeft />
      <BoxRight />
    </Flex>
  );
};

export default Pricing;
