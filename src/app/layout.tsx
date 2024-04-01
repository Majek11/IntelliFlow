import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const globalfont = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IntelliFlow",
  description: "Automate your work with IntelliFlow...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={globalfont.className}>
        <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
        >{children}</ThemeProvider>
      </body>
    </html>
  );
}
