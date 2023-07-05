import TopNavigation from "@/components/TopNavigation";
import "./globals.css";
// import { Inter } from 'next/font/google'
import { Poppins } from "next/font/google";
import classNames from "classnames";
import Footer from "@/components/Footer";

const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});

export const metadata = {
    title: "John Mandy Samonte",
    description: "React Developer | Front-End Developer",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={classNames("bg-slate-50", poppins.className)}>
                <TopNavigation />
                {children}
                <Footer />
            </body>
        </html>
    );
}
