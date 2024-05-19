import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext)
}
export const useThemeUpdate = () => {
  return useContext(ThemeUpdateContext)
}

const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
    console.log(isDarkTheme)
  };

  return (
    <ThemeContext.Provider value={isDarkTheme}>
        <ThemeUpdateContext.Provider value={toggleTheme}>
            {children}
        </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
