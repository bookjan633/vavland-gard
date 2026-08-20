import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vavlandgard.se"),

  title: {
    default: "Vävland Gård – Gård till salu i Timrå",
    template: "%s | Vävland Gård",
  },

  description:
    "Vävland Gård är en unik lantbruksfastighet i Timrå med två bostadshus, fem boenden, ekonomibyggnader och 13,5 hektar mark. En plats för familjeliv, generationsboende eller företagande.",

  keywords: [
    "Vävland Gård",
    "gård till salu",
    "gård till salu Timrå",
    "gård Sundsvall",
    "gård Västernorrland",
    "lantbruksfastighet",
    "herrgård",
    "gård med mark",
    "gård med skog",
    "gård med ekonomibyggnader",
    "gård med flera bostäder",
    "generationsboende",
    "maskinhall",
    "Timrå",
  ],

  alternates: {
    canonical: "https://www.vavlandgard.se",
  },

  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: "https://www.vavlandgard.se",
    siteName: "Vävland Gård",

    title: "Vävland Gård – Gård till salu i Timrå",

    description:
      "Två sekel av historia. Fem boenden, ekonomibyggnader och 13,5 hektar mark. En unik gård med stora möjligheter.",

    images: [
      {
        url: "/images/hero/hero2.jpg",
        width: 1200,
        height: 630,
        alt: "Vävland Gård",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vävland Gård – Gård till salu i Timrå",
    description:
      "En unik gård med fem boenden och 13,5 hektar mark.",

    images: ["/images/hero/hero2.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "Real Estate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body
        className={`${cormorant.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}