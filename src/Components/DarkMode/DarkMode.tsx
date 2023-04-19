import { ChangeEventHandler } from "react";
import styles from './styles.module.scss'

const setDark = () => {
  localStorage.setItem("theme", "dark");
  document.documentElement.setAttribute("data-theme", "dark");
};

const setLight = () => {
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
};

const storedTheme = localStorage.getItem("theme");

const prefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const defaultDark =
  storedTheme === "dark" || (storedTheme === null && prefersDark);

if (defaultDark) {
  setDark();
}

const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
  if (e.target.checked) {
    setDark();
  } else {
    setLight();
  }
};

const DarkMode = () => {
  return (
    <div className={styles["toggle-theme-wrapper"]}>
      <span className={styles["toggle-theme-icon"]}>☀️</span>
      <label className={styles["toggle-theme"]} htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          onChange={toggleTheme}
          defaultChecked={defaultDark}
          className={styles["toggle-theme-icon"]}
        />
        <div className={`${styles.slider} ${styles.round}`}></div>
      </label>
      <span className={styles["toggle-theme-icon"]}>🌒</span>
    </div>
  );
};

export default DarkMode;
