import type {Metadata} from "next";
import "./globals.css";
import React from "react";
import localFont from "next/font/local";

const Gilroy = localFont({
    src: [
        {
            path: "./fonts/Gilroy-Regular.ttf",
            weight: "400",
            style: "normal"
        },
        {
            path: "./fonts/Gilroy-Light.ttf",
            weight: "200",
            style: "normal"
        },

        {
            path: "./fonts/Gilroy-Medium.ttf",
            weight: "500",
            style: "normal"
        },

        {
            path: "./fonts/Gilroy-Heavy.ttf",
            weight: "800",
            style: "normal"
        },
        {
            path: "./fonts/Gilroy-Bold.ttf",
            weight: "900",
            style: "normal"
        },
    ]

})

export const metadata: Metadata = {
    title: "Sonsennim-LMS",
    description: "A focused learning management system" +
        " built for structured progress, spaced repetition, and real mastery.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${Gilroy.className} h-full antialiased`}
        >
        <body className="min-h-full flex flex-col">{children}</body>
        </html>
    );
}
