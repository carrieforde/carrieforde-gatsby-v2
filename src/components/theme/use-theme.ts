"use client";

import * as React from "react";

import { ThemeContext } from "@/components/theme/theme-provider";

export const useTheme = () => {
  const context = React.useContext(ThemeContext);

  if (!context) {
    throw new Error("`useTheme` can only be used within a ThemeProvider!");
  }

  return context;
};
