import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface IconProps extends SvgProps {
  isDark: boolean;
}

const Icon: React.FC<IconProps> = ({ isDark, ...props }) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <image width="32" height="32" href={isDark ? "/images/glass/glass-white.png" : "/images/glass/glass-black.png"} />
    </Svg>
  );
};

export default Icon;
