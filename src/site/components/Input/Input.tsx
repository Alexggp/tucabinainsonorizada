"use client";

import {
  ChangeEvent,
  CSSProperties,
  KeyboardEvent,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
  useRef,
  useState
} from "react";
import classes from "./Input.module.css";

type NativeInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "onChange" | "children"
>;

type InputProps = NativeInputProps & {
  variant?: "standard" | "outlined" | "filled";
  label?: string;
  type?: "text" | "email" | "password" | "number" | "search" | "multiline" | "select";
  error?: boolean | { message?: string };
  disabled?: boolean;
  floatingLabel?: boolean;
  fullWidth?: boolean;
  multiline?: boolean;
  style?: CSSProperties;
  resizable?: boolean;
  onEnter?: () => void;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  children?: ReactNode;
  selectProps?: SelectHTMLAttributes<HTMLSelectElement>;
  textareaProps?: TextareaHTMLAttributes<HTMLTextAreaElement>;
};

export default function Input({
  variant = "standard",
  label,
  type = "text",
  error = false,
  disabled = false,
  floatingLabel = false,
  fullWidth = false,
  style = {},
  resizable = false,
  onEnter,
  children,
  selectProps,
  textareaProps,
  onChange,
  value,
  placeholder,
  ...rest
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(Boolean(value));
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(null);
  const errorMessage = typeof error === "object" ? error.message || "Error: Invalid value" : "Error: Invalid value";
  const variantClass = classes[variant.charAt(0).toUpperCase() + variant.slice(1)];
  const typeClass = classes[type.charAt(0).toUpperCase() + type.slice(1)];
  const labelClass = classes[`${variant.charAt(0).toUpperCase() + variant.slice(1)}Label`];

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setHasValue(Boolean(event.target.value));
    onChange?.(event as ChangeEvent<HTMLInputElement>);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (event.key === "Enter" && onEnter && type !== "multiline") {
      onEnter();
    }
  };

  const commonClassName = `
    ${classes.InputField}
    ${variantClass}
    ${typeClass}
    ${error ? classes.Error : ""}
    ${resizable ? classes.Resizable : ""}
    ${disabled ? classes.Disabled : ""}
    ${type === "search" ? classes.Search : ""}
  `;

  return (
    <div
      className={`${classes.InputContainer} ${fullWidth ? classes.FullWidth : ""}`}
      style={style}
    >
      {type === "search" ? (
        <span
          className={`${variant === "outlined" ? classes.SearchIconOutlined : ""} ${
            classes.SearchIcon
          }`}
          aria-hidden="true"
        />
      ) : null}
      {label ? (
        <label
          className={`
            ${classes.Label}
            ${error ? classes.Error : ""}
            ${disabled ? classes.Disabled : ""}
            ${
              floatingLabel && !placeholder && type !== "select" && type !== "search" && !isFocused && !hasValue
                ? classes.LabelInside
                : ""
            }
            ${isFocused ? classes.LabelFocused : ""}
            ${labelClass}
          `}
        >
          {label}
        </label>
      ) : null}

      {type === "multiline" ? (
        <textarea
          ref={inputRef as React.RefObject<HTMLTextAreaElement>}
          className={commonClassName}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={(event) => {
            setIsFocused(false);
            setHasValue(Boolean(event.target.value));
          }}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={value as string | number | readonly string[] | undefined}
          placeholder={placeholder}
          {...textareaProps}
        />
      ) : type === "select" ? (
        <select
          ref={inputRef as React.RefObject<HTMLSelectElement>}
          className={commonClassName}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={(event) => {
            setIsFocused(false);
            setHasValue(Boolean(event.target.value));
          }}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={value as string | number | readonly string[] | undefined}
          {...selectProps}
        >
          {children}
        </select>
      ) : (
        <input
          ref={inputRef as React.RefObject<HTMLInputElement>}
          className={commonClassName}
          type={type}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={(event) => {
            setIsFocused(false);
            setHasValue(Boolean(event.target.value));
          }}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={value}
          placeholder={placeholder}
          {...rest}
        />
      )}
      {error ? <p className={classes.ErrorMessage}>{errorMessage}</p> : null}
    </div>
  );
}
