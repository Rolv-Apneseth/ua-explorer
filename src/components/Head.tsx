import React from "react"
import { Helmet } from "react-helmet"
// import preview from "../../static/images/preview.png"
// import favicon from "../../static/favicon.svg"

const siteName: string = "City Explorer"

const Head = () => {
    return (
        <Helmet>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />

            <title>{siteName}</title>
            <meta property="og:title" content={siteName} />
            <meta name="description" content={siteName} />
            <meta property="og:description" content={siteName} />
            <meta property="og:url" content="https://rolvapneseth.com/" />
            {/* <meta property="og:image" content={preview} /> */}
            <meta property="og:locale" content="en_GB" />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="theme-color" content="#0a182e" />

            <meta name="keywords" content="Cities, Explorer, Gatsby, Sort" />
            <meta name="author" content="Rolv Apneseth" />

            {/* <link rel="shortcut icon" href={favicon} type="image/svg+xml" /> */}

            {/* Preload fonts */}
            <link
                rel="preload"
                as="font"
                href="/fonts/Roboto-Regular-webfont.woff"
                type="font/woff2"
                crossOrigin="crossorigin"
            />
            <link
                rel="preload"
                as="font"
                href="/fonts/Roboto-Italic-webfont.woff"
                type="font/woff2"
                crossOrigin="crossorigin"
            />
            <link
                rel="preload"
                as="font"
                href="/fonts/Roboto-Bold-webfont.woff"
                type="font/woff2"
                crossOrigin="crossorigin"
            />
            <link
                rel="preload"
                as="font"
                href="/fonts/Roboto-Black-webfont.woff"
                type="font/woff2"
                crossOrigin="crossorigin"
            />
        </Helmet>
    )
}

export default Head
