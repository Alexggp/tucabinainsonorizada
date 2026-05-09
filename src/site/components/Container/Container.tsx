import { CSSProperties, HTMLAttributes, ReactNode } from "react";
import classes from "./Container.module.css";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
  padding?: string | number;
  size?: "sm" | "md" | "lg" | "xl" | "fs";
  centered?: boolean;
  backgroundColor?: string;
  style?: CSSProperties;
  className?: string;
};

export default function Container({
  children,
  padding = "16px",
  size,
  centered = false,
  backgroundColor = "transparent",
  style = {},
  className = "",
  ...rest
}: ContainerProps) {
  const sizeClasses = {
    sm: classes.MaxWidthSm,
    md: classes.MaxWidthMd,
    lg: classes.MaxWidthLg,
    xl: classes.MaxWidthXl,
    fs: classes.FullSize
  };
  const sizeClass = size ? sizeClasses[size] : "";

  return (
    <div
      className={`${className} ${classes.Container} ${sizeClass} ${
        centered ? classes.Centered : ""
      }`}
      style={{ padding, backgroundColor, ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}
