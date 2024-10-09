import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {Footer} from "@/ui/atoms/Footer";
import {clsx} from "clsx";
import {Navbar} from "@/ui/molecules/Navbar";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Products",
};

export default function RootLayout(
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>) {
    return (
        <html lang="pl">
        <body className={clsx(inter.className, "min-h-screen pb-16")}>
        <Navbar/>
        <section className={'mx-auto max-w-md sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl'}>
            {children}
        </section>
        <Footer/>
        </body>
        </html>
    );
}
