import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";

export default function Providers(
  { children }: Readonly<{ children: React.ReactNode; }>
) {
  return (
    <NextUIProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </NextUIProvider>
  );
};
