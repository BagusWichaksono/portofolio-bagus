import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "../styles/globals.css"
import PageLoader from "@/components/PageLoader"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://baguswichaksono.dev"),
  title: {
    default: "Bagus Wichaksono Amanulloh | Portfolio",
    template: "%s | Bagus Wichaksono Portfolio",
  },
  description:
    "Personal portfolio of Bagus Wichaksono Amanulloh. Informatics Engineering student at Politeknik Negeri Malang specializing in mobile and web development (Flutter, React, Laravel).",
  keywords: [
    "Bagus Wichaksono Amanulloh",
    "Bagus Wichaksono",
    "Portfolio",
    "Politeknik Negeri Malang",
    "Polinema",
    "Flutter Developer",
    "React Developer",
    "Fullstack Developer",
    "Web Development",
    "HerbScan",
    "Inkluvy",
    "TesYuk",
  ],
  authors: [{ name: "Bagus Wichaksono Amanulloh" }],
  creator: "Bagus Wichaksono Amanulloh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Bagus Wichaksono Amanulloh | Portfolio",
    description:
      "Personal portfolio of Bagus Wichaksono Amanulloh. Informatics Engineering student at Politeknik Negeri Malang specializing in mobile and web development.",
    siteName: "Bagus Wichaksono Portfolio",
    images: [
      {
        url: "/images/bagus-profile.jpg",
        width: 1200,
        height: 630,
        alt: "Bagus Wichaksono Amanulloh Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bagus Wichaksono Amanulloh | Portfolio",
    description:
      "Personal portfolio of Bagus Wichaksono Amanulloh. Informatics Engineering student at Politeknik Negeri Malang.",
    images: ["/images/bagus-profile.jpg"],
  },
  icons: {
    icon: "/images/bagus-profile.jpg",
    shortcut: "/images/bagus-profile.jpg",
    apple: "/images/bagus-profile.jpg",
  },
  alternates: {
    canonical: "/",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else if (saved === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${poppins.className} antialiased bg-background text-text-primary transition-colors duration-300 min-h-screen`}>
        <PageLoader />
        {children}
      </body>
    </html>
  )
}
