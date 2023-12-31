import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Header } from "@/components";
import SidebarProvider from "@/components/providers/sidebar-provider";
import SearchModal from "@/components/modals/SearchModal";
import AuthModal from "@/components/modals/AuthModal";
import AuthProvider from "@/components/providers/AuthProvider";
import ToasterProvider from "@/components/providers/ToasterProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Watch Me",
  description: "Watch Me is a movie app. Building for educational purpose",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-white dark:bg-[#352F44]`}>
        <AuthProvider>
          <ThemeProvider
            attribute='class'
            enableSystem={false}
            storageKey='next-movie-theme'
          >
            <Header />
            <SidebarProvider>{children}</SidebarProvider>
            <SearchModal />
            <AuthModal />
            <ToasterProvider />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
