import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const Thumbnail = '/thumbnail.png';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = "http://localhost:3001"; 

export async function generateMetadata({ params }, parent){
  const id = (await parent)
  console.log("ID", await params, id);
  const title = "My Blog";

  const description =
    "Welcome to my blog! Dive into a wealth of insightful articles, practical guides, and project breakdowns, empowering you to level up your Rust and Blockchain development skills.";

  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    openGraph: {
      title,
      description,
      url: baseUrl,
      images: [
        {
          url: Thumbnail,
          secureUrl: Thumbnail,
          width: 1200,
          height: 630,
          alt: "Preview image for Dan Mugh's Blog",
        },
      ],
      type: "website",
      siteName: "Dan Mugh's Blog",
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
