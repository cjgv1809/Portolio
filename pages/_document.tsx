import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content="#242424" />
          <meta charSet="UTF-8" />
          <meta
            name="description"
            content="I'm a frontend developer specializing in React, Next.js, TypeScript, and React Native."
          />
          <meta
            name="keywords"
            content="
          Carlos Gomes,
          Carlos Gomes Portfolio,
          Carlos Gomes Frontend Developer,
          Carlos Gomes React Developer,
          Carlos Gomes React Native Developer,
          Carlos Gomes UI/UX Developer"
          />
          <meta name="author" content="Carlos Gomes" />
          <meta name="pwa-app" content="pwa-app" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="pwa-app" />
          <meta name="description" content="pwa-app" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-TileColor" content="#242424" />
          <meta name="msapplication-tap-highlight" content="no" />
          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.yourportfolio.com" />
          <meta
            property="og:title"
            content="Your Name - Frontend Developer Portfolio"
          />
          <meta
            property="og:description"
            content="I'm a frontend developer specializing in React, Next.js, TypeScript, and React Native."
          />
          <meta
            property="og:image"
            content="https://www.yourportfolio.com/og-image.jpg"
          />
          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://www.yourportfolio.com"
          />
          <meta
            property="twitter:title"
            content="Your Name - Frontend Developer Portfolio"
          />
          <meta
            property="twitter:description"
            content="I'm a frontend developer specializing in React, Next.js, TypeScript, and React Native."
          />
          <meta
            property="twitter:image"
            content="https://www.yourportfolio.com/twitter-image.jpg"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
