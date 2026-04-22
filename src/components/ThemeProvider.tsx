import { useEffect } from "react";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({
  children,
}: ThemeProviderProps) {
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add("light");
  }, []);

  return <>{children}</>;
}
