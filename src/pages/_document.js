import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/SpacedLeetLogo_bh.svg" type="image/svg+xml" />
      </Head>
      <body className="antialiased" 
        style={{ 
          backgroundImage: "url(/Starry_BG.webp)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100%"
          }}>
        <Navbar/>
        <Main />
        <NextScript />
        <Footer/>
      </body>
    </Html>
  );
}
