import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

const ThemeProvider = ({ children }) => {
  // const [theme , setTheme] = useState(localStorage.getItem("dark"));
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
    console.log(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
