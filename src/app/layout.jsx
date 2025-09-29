
import "./globals.css";


import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";






export const metadata = {
  title: "KiddyLearno | Online Tutoring for Kids (Grades 1–8)",
  description:
    "KiddyLearno is an engaging and safe online tutoring platform for kids in Grades 1–8 (KS1 to KS3). We provide expert support in Math, English, Science, and more through fun, interactive lessons. Affordable pricing, experienced tutors, and personalized learning plans designed to boost confidence and academic success.",
  keywords: [
    "online tutoring for kids",
    "KiddyLearno",
    "KS1 tutoring",
    "KS2 tutoring",
    "KS3 tutoring",
    "online learning for kids",
    "math tutor online",
    "english tutor online",
    "science tutor online",
    "affordable tutoring",
    "homework help",
    "test preparation",
  ],
  authors: [{ name: "KiddyLearno" }],
  openGraph: {
    title: "KiddyLearno | Online Tutoring for Kids (Grades 1–8)",
    description:
      "Affordable, fun, and effective online tutoring for Grades 1–8. Boost your child’s learning with KiddyLearno – expert tutors, engaging lessons, and a safe environment.",
    url: "https://kiddylearno.online",
    siteName: "KiddyLearno",
    images: [
      {
        url: "https://kiddylearno.online/Logo.png", // Create a branded OG image
        width: 1200,
        height: 630,
        alt: "KiddyLearno – Fun & Affordable Online Tutoring",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KiddyLearno | Fun & Affordable Online Tutoring",
    description:
      "Interactive online tutoring for kids (Grades 1–8). Math, English, Science & more with expert teachers. Affordable plans & engaging lessons.",
    images: ["https://kiddylearno.online/Logo.png"],
  },
  icons: {
    icon: "/favicon.ico?v=2",
    shortcut: "/favicon.ico",
    
  },
  metadataBase: new URL("https://kiddylearno.online"),
};


export default function RootLayout({ children }) {
  return (
    <html className="" lang="en">
      <body 
        className={ ''}>
<ClerkProvider signInUrl="/sign-in"
 
  afterSignOutUrl="/">
      <main className="overflow-hidden">
        
<Navbar/>
        {children}<Footer/>
         </main></ClerkProvider>

      </body>
     
    </html>
  );
}
