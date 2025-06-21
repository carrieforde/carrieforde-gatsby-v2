import * as React from "react";

import { theme as defaultTheme } from "@/components/theme/theme";
import { Theme } from "@/components/theme/types";

type ThemeContextProps = Theme;

export const ThemeContext =
  React.createContext<ThemeContextProps>(defaultTheme);

type ThemeProviderProps = React.PropsWithChildren<{
  theme?: Theme;
}>;

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme = defaultTheme,
}) => <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
