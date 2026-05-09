import Logo from "@/src/site/components/Logo/Logo";
import classes from "./LoadingSpinner.module.css";

export default function LoadingSpinner() {
  return (
    <div id="LoadingSpinner" className={classes.LoadingSpinner}>
      <div className={classes.Spinner}>
        <div className={classes.Ring} />
        <div className={classes.LogoContainer}>
          <Logo alt />
        </div>
      </div>
    </div>
  );
}
