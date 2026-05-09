import { ButtonHTMLAttributes, cloneElement, isValidElement, ReactElement, ReactNode } from "react";
import classes from "./Button.module.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  icon?: ReactElement<{ disabled?: boolean }>;
  color?: "primary" | "secondary" | "danger" | "success" | "error";
  variant?: "filled" | "outlined" | "text";
  fullWidth?: boolean;
};

export default function Button({
  children,
  icon,
  color = "primary",
  variant = "filled",
  fullWidth = false,
  className = "",
  ...rest
}: ButtonProps) {
  const iconButton = !children && icon;
  const buttonClasses = [
    className,
    classes.Btn,
    classes[`Btn-${color}`],
    classes[`Btn-${variant}`],
    fullWidth ? classes.FullWidth : "",
    iconButton ? classes.IconButton : ""
  ].join(" ");

  return (
    <button className={buttonClasses} {...rest}>
      {icon && isValidElement(icon) ? cloneElement(icon, { disabled: rest.disabled }) : null}
      {children}
    </button>
  );
}
