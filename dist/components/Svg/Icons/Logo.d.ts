import React from "react";
import { SvgProps } from "../types";
interface IconProps extends SvgProps {
    isDark?: boolean;
}
declare const Icon: React.FC<IconProps>;
export default Icon;
