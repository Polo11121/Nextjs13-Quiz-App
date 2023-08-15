"use client";

import D3WordCloud from "react-d3-cloud";
import { useTheme } from "next-themes";

const data = [
  {
    text: "Hey",
    value: 3,
  },
  {
    text: "Hey",
    value: 6,
  },
  {
    text: "Hey",
    value: 8,
  },
  {
    text: "Hey",
    value: 5,
  },
  {
    text: "Hey",
    value: 2,
  },
];

const fontSizeMapper = (word: { value: number }) =>
  Math.log2(word.value) * 5 + 16;

export const CustomWordCloud = () => {
  const theme = useTheme();

  return (
    <D3WordCloud
      height={500}
      font="Times"
      fontSize={fontSizeMapper}
      rotate={0}
      padding={10}
      fill={theme.theme === "dark" ? "white" : "black"}
      data={data}
    />
  );
};
