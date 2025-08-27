import React, { useState, createContext, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// 1. Create a Theme Context
const ThemeContext = createContext();

// 2. Theme Provider Component
export function ThemeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => setDarkMode((prev) => !prev);

    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
            <div className={darkMode ? "dark-theme" : ""}>{children}</div>
        </ThemeContext.Provider>
    );
}

// 3. Custom Hook for using Theme
export function useTheme() {
    return useContext(ThemeContext);
}
