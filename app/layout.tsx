import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const patuaOne = localFont({
    src: "./fonts/PatuaOne.ttf",
    variable: "--font-patua-one",
    weight: "400",
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
            <body className={`${patuaOne.variable}`}>{children}</body>
        </html>
    );
}
