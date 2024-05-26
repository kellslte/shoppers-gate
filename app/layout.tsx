import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import darkTheme from "@/utils/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shopper's Gate | Home to all your daily needs",
  description:
    "Come to Shopper's gate to get your daily needs, it is your one stop shop.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Container>{children}</Container>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
