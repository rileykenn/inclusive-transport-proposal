import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "Inclusive Ability Support | Transport, Tours & Airport Transfers",
    description:
        "Professional transport services including wine tours, airport transfers, Blue Mountains day trips, and NDIS transport. Fully insured, group transport specialists based in Australia.",
    keywords: [
        "inclusive transport",
        "airport transfers",
        "wine tours",
        "brewery tours",
        "Blue Mountains day trips",
        "NDIS transport",
        "group transport",
        "Crooked River Winery",
        "inclusive ability support",
    ],
    openGraph: {
        title: "Inclusive Ability Support | Transport, Tours & Airport Transfers",
        description:
            "Professional transport services including wine tours, airport transfers, Blue Mountains day trips, and NDIS transport.",
        url: "https://inclusivetransport.com.au",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={inter.variable}>
            <body className="antialiased">{children}</body>
        </html>
    );
}
