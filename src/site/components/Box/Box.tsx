import { CSSProperties, HTMLAttributes, ReactNode } from "react";
import classes from "./Box.module.css";

type BoxProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
  transparent?: boolean;
  square?: boolean;
  padding?: boolean | string | number;
  shadow?: boolean;
  border?: string;
  background?: string;
  fullSize?: boolean;
  width?: string | number;
  height?: string | number;
  centered?: boolean;
  className?: string;
  style?: CSSProperties;
};

function applyUnits(value: string | number) {
  if (typeof value === "number" || /^\d+$/.test(String(value))) {
    return `${value}px`;
  }

  return String(value);
}

export default function Box({
  transparent = false,
  square = false,
  padding = false,
  shadow = false,
  border = "none",
  background = "",
  fullSize = false,
  width = "100%",
  height = "auto",
  centered = false,
  children,
  className = "",
  style = {},
  ...rest
}: BoxProps) {
  const isImageBackground = background.startsWith("http") || background.startsWith("data:image");
  const boxStyles: CSSProperties = {
    width: applyUnits(width),
    height: applyUnits(height),
    border,
    borderRadius: square ? "0" : "4px",
    boxShadow: shadow ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",
    background: transparent
      ? "transparent"
      : isImageBackground
        ? `url(${background}) center/cover`
        : background || "#fff",
    padding: padding === true ? "16px" : padding || undefined,
    ...style
  };

  return (
    <div
      className={`${className} ${classes.Box} ${centered ? classes.Centered : ""} ${
        fullSize ? classes.FullSize : ""
      }`}
      style={boxStyles}
      {...rest}
    >
      {children}
    </div>
  );
}
