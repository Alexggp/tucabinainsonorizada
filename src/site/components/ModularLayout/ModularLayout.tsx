import { CSSProperties, HTMLAttributes, ReactNode } from "react";
import ModularContainer from "./ModularContainer/ModularContainer";
import classes from "./ModularLayout.module.css";

type ModularLayoutProps = HTMLAttributes<HTMLDivElement> & {
  direction?: "horizontal" | "vertical";
  gap?: number;
  style?: CSSProperties;
  children?: ReactNode;
};

export default function ModularLayout({
  direction = "horizontal",
  gap = 0,
  style = {},
  children,
  className = "",
  ...rest
}: ModularLayoutProps) {
  return (
    <div
      className={`${className} ${classes.ModularLayout} ${
        direction === "vertical" ? classes.Vertical : classes.Horizontal
      }`}
      style={{ gap: `${gap}px`, ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}

export { ModularContainer };
