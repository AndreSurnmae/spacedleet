import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/SpacedLeetLogo_bh.svg" type="image/svg+xml" />
      </Head>
      <body className="antialiased">
        <Navbar/>
        <Main />
        <NextScript />
        <Footer/>
      </body>
    </Html>
  );
}
