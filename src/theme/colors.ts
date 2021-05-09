import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#016cb9",
  primaryBright: "#aa8929",
  primaryDark: "#aa8929",
  secondary: "white",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  polygon: "#2891f9",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#303444",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#cae4f0",
  textDisabled: "#BDC2C4",
  textSubtle: "#8f80ba",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "white",
  background: "#303444",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#cae4f0",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
