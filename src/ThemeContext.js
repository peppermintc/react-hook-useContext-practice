import React, { useState, useContext } from 'react';

export const ThemeContext = React.createContext();
export const UpdateThemeContext = React.createContext();

// export const useThemeContext = () => {
//   return useContext(ThemeContext);
// }

// export const useUpdateThemeContext = () => {
//   return useContext(UpdateThemeContext);
// }

export const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <UpdateThemeContext.Provider value={toggleTheme}>
        {children}
      </UpdateThemeContext.Provider>
    </ThemeContext.Provider>
  )
}