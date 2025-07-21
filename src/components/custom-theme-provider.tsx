"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Theme = "default" | "space";

type CustomThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const CustomThemeContext = createContext<CustomThemeContextType | undefined>(
  undefined
);

export function CustomThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setThemeState] = useState<Theme>("default");

  useEffect(() => {
    const storedTheme = localStorage.getItem("custom-theme") as Theme | null;
    if (storedTheme) {
      setThemeState(storedTheme);
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("custom-theme", newTheme);

    // Apply class to body
    const body = document.body;
    body.classList.remove("theme-space"); // Remove other themes first
    if (newTheme === "space") {
      body.classList.add("theme-space");
    }
  };

  // Effect to apply class on initial load
  useEffect(() => {
    const body = document.body;
    body.classList.remove("theme-space");
    if (theme === "space") {
      body.classList.add("theme-space");
    }
  }, [theme]);


  return (
    <CustomThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </CustomThemeContext.Provider>
  );
}

export function useCustomTheme() {
  const context = useContext(CustomThemeContext);
  if (context === undefined) {
    throw new Error("useCustomTheme must be used within a CustomThemeProvider");
  }
  return context;
}