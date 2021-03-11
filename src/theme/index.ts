import { extendTheme } from "@chakra-ui/react";

// Global style overrides
import styles from "./styles";

// Foundational style overrides
import colors from "./foundations/colors";

const overrides = {
  styles,
  colors,
  fonts: {
    heading: "'Lato', sans-serif",
    body: "'Lato', sans-serif",
  },
};

export default extendTheme(overrides);
