import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const poppins = localFont({
  src: [
    { path: "./fonts/Poppins-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Poppins-SemiBold.woff2", weight: "600", style: "normal" },
  ],
});

// Body: Merriweather
const merriweather = localFont({
  src: [
    { path: "./fonts/Merriweather-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Merriweather-Bold.woff2", weight: "700", style: "normal" },
  ],
});


export const metadata: Metadata = {
  title: "Ankit Verse",
  description: "Blog Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${merriweather.className} ${poppins.className}`}>{children}</body>
    </html>
  );
}
