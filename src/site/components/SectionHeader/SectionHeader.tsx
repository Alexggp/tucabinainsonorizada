import { ReactNode } from "react";
import classes from "./SectionHeader.module.css";

type SectionHeaderProps = {
  title: string;
  id?: string;
  children?: ReactNode;
  compact?: boolean;
};

export default function SectionHeader({
  title,
  id,
  children,
  compact = false
}: SectionHeaderProps) {
  return (
    <div className={`${classes.SectionHeader} ${compact ? classes.Compact : ""}`}>
      <h2 id={id}>{title}</h2>
      {children}
    </div>
  );
}
