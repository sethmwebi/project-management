import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import DashboardWrapper from "./dashboardWrapper";
import Navbar from "../components/Navbar";
import AuthProvider from "@/authProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Project Management App",
  description: "Project Management App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <AuthProvider>
          <DashboardWrapper>{children}</DashboardWrapper>
        </AuthProvider>
      </body>
    </html>
  );
}
