"use client";

import { Inter } from "next/font/google";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "@/theme";
import Header from "@/components/header";
import Circle from "@/components/backgroundCircle";
import { usePathname } from "next/navigation";
import { AuthProvider } from "@/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith("/auth");

  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        {!isAuthPage && (
          <>
            <Circle size="735px" top="238px" left="-404px" />
            <Circle size="545px" top="85px" right="-200px" />
          </>
        )}
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {!isAuthPage && <Header />}
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
