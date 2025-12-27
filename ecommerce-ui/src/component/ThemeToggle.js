import { useEffect } from "react";
import "../ToggleTheme.css";

function ThemeToggle({ theme, toggleTheme }) {
  useEffect(() => {
    document.body.classList.remove("white-preview", "dark-preview");
    document.body.classList.add(
      theme === "dark" ? "dark-preview" : "white-preview"
    );
  }, [theme]);

  return (
    <label className="btn-color-mode-switch">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />

      <span className="btn-color-mode-switch-inner">
        <i className="fa fa-sun-o toggle-icon sun" />
        <i className="fa fa-moon-o toggle-icon moon" />
      </span>
    </label>
  );
}

export default ThemeToggle;
