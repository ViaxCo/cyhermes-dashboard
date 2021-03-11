import { Box, Text } from "@chakra-ui/layout";
import {
  Slider as ChakraSlider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/slider";
import { useState } from "react";
import { BsCircleFill as CircleIcon } from "react-icons/bs";
import Span from "./Span";

const Slider = () => {
  const [value, setValue] = useState(100);
  return (
    <Box color="blackAlpha.800" mt="4">
      <Box mb="8">
        <Text fontSize="lg">Add More Users</Text>
        <Text fontSize="smaller">
          <Span fontWeight="semibold">NGN99,999</Span> per user
        </Text>
      </Box>
      <ChakraSlider
        aria-label="slider"
        min={0}
        max={1000}
        defaultValue={100}
        onChangeEnd={val => setValue(val)}
        position="relative"
      >
        <Text position="absolute" top="-2" fontSize="smaller" fontWeight="semibold">
          0
        </Text>
        <SliderTrack bg="myBlue.50">
          <SliderFilledTrack bg="myBlue.300" />
        </SliderTrack>
        <SliderThumb boxSize={7} bg="myBlue.300" position="relative">
          <Text
            fontWeight="extrabold"
            fontSize="sm"
            color="myBlue.300"
            position="absolute"
            top="-6"
          >
            {value}
          </Text>
          <Box color="white" size="9" as={CircleIcon} />
        </SliderThumb>
        <Text position="absolute" top="-2" right="0" fontSize="smaller" fontWeight="semibold">
          &gt;1000
        </Text>
      </ChakraSlider>
    </Box>
  );
};

export default Slider;
