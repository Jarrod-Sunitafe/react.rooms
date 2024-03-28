import { Inter } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer"
import CssBaseline from '@mui/joy/CssBaseline';
import { CssVarsProvider} from '@mui/joy/styles';
import theme from "./theme";

const inter = Inter({ subsets: ["latin"] });

const myFont = localFont({ 
src: './Geo-Lg.woff',
weight: '400',
style: 'normal',})

export const metadata = {
  title: "Room V2",
  description: "Sunitafe rooms website ",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={myFont.className}>
      <CssVarsProvider theme={theme} >
      <CssBaseline />
      <body >
        <main lang="en" className={myFont.className}>
        <div className="container">
          <Navbar/>
          {children}
          <Footer/>
        </div>
        </main>
      </body>
      </CssVarsProvider>
    </html>
  );
}
