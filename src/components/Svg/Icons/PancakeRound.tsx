import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface IconProps extends SvgProps {
  isDark: boolean;
}

const Icon: React.FC<IconProps> = ({ isDark, ...props }) => {
  return (
    <Svg viewBox="0 0 90 90" {...props}>
      <image width={90} height={90} href={isDark ? "/images/glass/glass-white.png" : "/images/glass/glass-black.png"} />
    </Svg>
  );
};

export default Icon;
