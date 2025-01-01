import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const title = "Poker blog";
const subtitle = "Becoming a better poker player";

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
  title,
  description: subtitle,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-300 dark:bg-gray-950`}
      >
        <main>
          <div className="flex flex-col container mx-auto bg-gray-100 dark:bg-gray-900 p-12">
            <h1
              className="mx-auto text-4xl text-center font-black mb-2 text-gray-700 dark:text-gray-100"
              data-testid="layout-h1"
            >
              {title}
            </h1>
            <h2
              className="mx-auto text-xl text-center font-semibold text-gray-700 dark:text-gray-100 mb-8"
              data-testid="layout-h2"
            >
              {subtitle}
            </h2>
            <div>{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
