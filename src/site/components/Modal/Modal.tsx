"use client";

import { ReactNode } from "react";
import Box from "@/src/site/components/Box/Box";
import classes from "./Modal.module.css";

type ModalProps = {
  show: boolean;
  children: ReactNode;
  setShow?: (show: boolean) => void;
  onClose?: () => void;
  width?: string | number;
  height?: string | number;
  background?: string;
  square?: boolean;
};

export default function Modal({
  show,
  children,
  setShow,
  onClose,
  width = "500px",
  height = "300px",
  background,
  square
}: ModalProps) {
  if (!show) {
    return null;
  }

  const handleOverlayClick = () => {
    setShow?.(false);
    onClose?.();
  };

  return (
    <div className={classes.modalOverlay} onClick={handleOverlayClick}>
      <Box
        square
        className={`${classes.boxClass} ${!square ? classes.notSquare : ""}`}
        width={width}
        height={height}
        background={background}
        style={{ overflowY: "auto", overflowX: "hidden" }}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </Box>
    </div>
  );
}
