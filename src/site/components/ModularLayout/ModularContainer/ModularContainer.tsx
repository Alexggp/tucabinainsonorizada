import { CSSProperties, HTMLAttributes, ReactNode } from "react";
import classes from "./ModularContainer.module.css";

type ModularContainerProps = HTMLAttributes<HTMLDivElement> & {
  size?: number;
  display?: "flexible" | "cover" | "fixed";
  collapsed?: boolean;
  collapsedContent?: ReactNode;
  collapsedcontent?: ReactNode;
  children?: ReactNode;
  styles?: CSSProperties;
  className?: string;
};

export default function ModularContainer({
  size = 1,
  display = "flexible",
  collapsed = false,
  collapsedContent,
  collapsedcontent,
  children,
  styles = {},
  className = "",
  ...rest
}: ModularContainerProps) {
  const normalizedCollapsed = display === "cover" ? false : collapsed;
  const flexOptions = {
    cover: 1,
    flexible: `0 0 ${(size / 12) * 100}%`,
    fixed: `0 0 ${size}px`
  };
  const containerStyle = {
    flex: flexOptions[display],
    ...styles
  };

  return (
    <div
      className={`${classes.ModularContainer} ${className} ${
        normalizedCollapsed ? classes.Collapsed : ""
      }`}
      style={containerStyle}
      {...rest}
    >
      {!normalizedCollapsed ? children : collapsedContent || collapsedcontent}
    </div>
  );
}
