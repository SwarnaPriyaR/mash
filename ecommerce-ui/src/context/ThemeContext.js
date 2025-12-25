import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  // Persist theme in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkTheme");
    if (savedTheme) setDarkTheme(JSON.parse(savedTheme));
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-theme", darkTheme ? "dark" : "light");
    localStorage.setItem("darkTheme", JSON.stringify(darkTheme));
  }, [darkTheme]);

  const toggleTheme = () => setDarkTheme((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
