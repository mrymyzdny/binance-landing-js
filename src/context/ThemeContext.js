import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};
export const useThemeUpdate = () => {
  return useContext(ThemeUpdateContext);
};

const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState();
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  localStorage.setItem("isDarkTheme", isDarkTheme);

  function getThemeFromLocalStorage() {
    setCurrentTheme(localStorage.getItem("isDarkTheme"));
  }
  const toggleTheme = () => {
    isDarkTheme ? setIsDarkTheme(false) : setIsDarkTheme(true);
    // setIsDarkTheme(prevTheme => prevTheme === currentTheme ? !currentTheme : currentTheme)
  };

  useEffect(() => {
    getThemeFromLocalStorage();
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider value={isDarkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
