import { DeepPartial, Theme } from "@chakra-ui/react";

/** @extend additional colors here */
const extendedColors = {
    brand: {
        100: "",
        200: "",
        300: "",
        400: "",
        500: "",
        600: "",
        700: "",
        800: "",
        900: "",
      },  
}

/** @override chakra colors here */
const overrideChakraColors = {};

const colors = {
    ...overrideChakraColors,
    ...extendedColors,
};

export default colors;