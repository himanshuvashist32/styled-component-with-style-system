export const themeModeEnum = Object.freeze({
  dark: "dark",
  light: "light",
});

const colors = {
  modes: {
    [themeModeEnum.light]: {
      primary: {
        10: "#fff",
        50: "#e5e7eb",
        100: "#95959b",
        200: "#7e7e84",
        300: "#525255",
        400: "#323234",
        500: "#121212",
      },
      background: {
        10: "#d0d0d0",
        50: "#e0e0e0",
        100: "#ededed",
        200: "#f2f2f2",
        300: "#fafafa",
        400: "#fff",
        500: "#fff",
      },
      error: {
        10: "",
        50: "",
        100: "",
        200: "",
        300: "",
        400: "",
        500: "#eb4e3d",
      },
      success: {
        10: "",
        50: "",
        100: "",
        200: "",
        300: "",
        400: "",
        500: "#65c466",
      },
      info: {
        10: "",
        50: "",
        100: "",
        200: "",
        300: "",
        400: "",
        500: "#3478f6",
      },
      warning: {
        10: "",
        50: "",
        100: "",
        200: "",
        300: "",
        400: "",
        500: "#f19a37",
      },
      grey: {
        10: "#fafafa",
        50: "#f5f5f5",
        100: "#e5e5e5",
        200: "#d4d4d4",
        300: "#a3a3a3",
        400: "#8a8a8a",
        500: "#777",
      },
      single: {
        tone: {
          white: "#fff",
          black: "#000",
        },
      },
      opacity: {
        10: "rgba(255, 255, 255, 0.1)",
        20: "rgba(255, 255, 255, 0.2)",
        30: "rgba(255, 255, 255, 0.3)",
        40: "rgba(255, 255, 255, 0.4)",
        50: "rgba(255, 255, 255, 0.5)",
        60: "rgba(255, 255, 255, 0.6)",
        70: "rgba(255, 255, 255, 0.7)",
        80: "rgba(255, 255, 255, 0.8)",
        90: "rgba(255, 255, 255, 0.9)",
      },
    },
    [themeModeEnum.dark]: {
      primary: {
        10: "#0d0d0d",
        50: "#515151",
        100: "#858587",
        200: "#c2c2c6",
        300: "#dcdcdf",
        400: "#fafafa",
        500: "#fff",
      },
      background: {
        10: "#b5b5bb",
        50: "#8e8e93",
        100: "#636366",
        200: "#48484a",
        300: "#3a3a3c",
        400: "#1e1e1e",
        500: "#121212",
      },
      error: {
        10: "",
        50: "",
        100: "",
        200: "",
        300: "",
        400: "",
        500: "#eb5545",
      },
      success: {
        10: "",
        50: "",
        100: "",
        200: "",
        300: "",
        400: "",
        500: "#68ce67",
      },
      info: {
        10: "",
        50: "",
        100: "",
        200: "",
        300: "",
        400: "",
        500: "#3b82f7",
      },
      warning: {
        10: "",
        50: "",
        100: "",
        200: "",
        300: "",
        400: "",
        500: "#f2a33c",
      },
      grey: {
        10: "#737373",
        50: "#525252",
        100: "#404040",
        200: "#262626",
        300: "#171717",
        400: "#121212",
        500: "#0d0d0d",
      },
      single: {
        tone: {
          white: "#fff",
          black: "#121212",
        },
      },
      opacity: {
        10: "rgba(18, 18, 18, 0.1)",
        20: "rgba(18, 18, 18, 0.2)",
        30: "rgba(18, 18, 18, 0.3)",
        40: "rgba(18, 18, 18, 0.4)",
        50: "rgba(18, 18, 18, 0.5)",
        60: "rgba(18, 18, 18, 0.6)",
        70: "rgba(18, 18, 18, 0.7)",
        80: "rgba(18, 18, 18, 0.8)",
        90: "rgba(18, 18, 18, 0.9)",
      },
    },
  },
};

export const space = {
  xs: 2,
  sm: 4,
  md: 6,
  lg: 8,
  xl: 12,
};

export default {
  initialColorModeName: "light",
  colors,
  space,
};