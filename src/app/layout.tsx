import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/utils/redux/reduxProvider";
import Nav from "../components/nav/nav"
import LeftSection from "../components/home/leftSection/leftSection"
import CategoryBar from "../components/home/categoryBar/categoryBar"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
      >
        <ReduxProvider>
          <Nav />
          <div className="">
            <CategoryBar />
            <div className=" lg:flex lg:gap-5">
              <div className=" w-2/6 max-lg:hidden">
                <LeftSection />
              </div>
              {children}
            </div>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
