import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "@/components/navbar/navbar";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/SpacedLeetLogo_wh.svg" type="image/svg+xml" />
      </Head>
      <body className="antialiased">
        <Navbar/>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
