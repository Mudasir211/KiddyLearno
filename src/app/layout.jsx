import { Poppins} from "next/font/google";
import "./globals.css";


import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";



export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})


export const metadata = {
  title: "Kiddy-Learno",
  description: "KiddyLearno is a playful, safe online learning platform for kids in *KS1 to KS3(Grade 1 to 8)*. It focuses on core academic support, homework help, and test preparation in a fun, engaging way designed for young learners.",
   icons: {
    icon: '/favicon.png', // Or .png or .svg
  },
};

export default function RootLayout({ children }) {
  return (
    <html className="" lang="en">
      <body 
        className={ ''}>
<ClerkProvider>
      <main className="overflow-hidden">
<Navbar/>
        {children}<Footer/>
         </main></ClerkProvider>

      </body>
     
    </html>
  );
}
