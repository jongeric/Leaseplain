import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import OrganizationSchema from "@/components/OrganizationSchema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

// Set the theme class before first paint to avoid a flash of the wrong theme.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches);if(d)document.documentElement.classList.add('dark');}catch(e){}})();`;

export const viewport: Viewport = {
  themeColor: "#1e40af",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://leaseplain.com"),
  title: "LeasePlain – Understand Your Lease in Plain English",
  description:
    "Upload your residential lease and get a clear, plain-English breakdown of what you're signing. Not legal advice.",
  keywords: ["lease analysis", "rental agreement", "tenant rights", "lease review"],
  alternates: {
    types: { "application/rss+xml": "https://leaseplain.com/feed.xml" },
  },
  openGraph: {
    siteName: "LeasePlain",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "LeasePlain – Understand Your Lease in Plain English" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@leaseplain",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Script id="gtm-script" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WMMH9S7S');
        `}</Script>
      </head>
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WMMH9S7S"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <OrganizationSchema />
        {children}
      </body>
    </html>
  );
}
