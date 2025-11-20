import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AnimatedBackground } from "@/app/components/animated-background";
import { MouseFollower } from "@/app/components/mouse-follower";
import { ScrollProgress } from "@/app/components/scroll-progress";
import { ThemeProvider } from "@/app/components/theme-provider";
import { Header } from "@/app/components/header";
import { WhatsAppButton } from "@/app/components/whatsapp-button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emprego Na Gringa - Sua Carreira Internacional Começa Aqui",
  description: "Desbloqueie sua carreira internacional. Junte-se à nossa comunidade exclusiva e tenha acesso a oportunidades de trabalho no exterior.",
  icons: {
    icon: '/logo-full.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <MouseFollower />
          <AnimatedBackground />
          <Header />
          {children}
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
