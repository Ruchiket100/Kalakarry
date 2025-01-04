import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import { Poppins } from 'next/font/google'
import { cookies } from "next/headers";
import Providers from "@/utils/providers";
import { Provider } from "jotai";
import Setup from "@/components/setup";
import Header from "@/components/header";
import Overlay from "@/components/interactives/overlay";

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
  title: "Kalakarry",
  description: "Explore artist and their work",
};

const poppins = Poppins({style: 'normal', weight: ["400", "700"], subsets: ['latin']})

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const store = await  cookies();

  const data = store.get("kalakarry-cookie")?.value;
  const parsedData = JSON.parse(decodeURIComponent(data || "{}"));

  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/gh/Ruchiket100/fontawesome-pro@master/fontawesome-pro-6.5.1-web/css/all.css"  rel="stylesheet" type="text/css"  />
      </head>
      <body 
        className={`${poppins.className} bg-primary text-primaryFont max-w-[900px] mx-auto`}
      >
        <Provider>
        <Providers cloud={parsedData}>
          <Overlay/>
        <Header/>
        {children}
        
        </Providers>
        </Provider>
      </body>
    </html>
  );
}
