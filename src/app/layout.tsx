import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const siteOrigin = (() => {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  if (!configured) return undefined;
  try {
    const url = new URL(configured);
    if (url.protocol !== 'https:' || url.username || url.password ||
        url.search || url.hash || url.pathname !== '/') return undefined;
    return url.origin;
  } catch {
    return undefined;
  }
})();


export const metadata: Metadata = {
  metadataBase: siteOrigin ? new URL(siteOrigin) : undefined,
  title: 'Ahmed Sanad — Creative Technologist, System Architect, and Marketing Strategist',
  description:
    'The personal portfolio of Ahmed Sanad, showcasing expertise in system architecture, brand strategy, automation, and UI/UX design. Let\'s build the future together.',
  openGraph: {
    title: 'Ahmed Sanad — Creative Technologist, System Architect, and Marketing Strategist',
    description:
      'The personal portfolio of Ahmed Sanad, showcasing expertise in system architecture, brand strategy, automation, and UI/UX design. Let\'s build the future together.',
    url: siteOrigin,
    siteName: 'Sanad Portfolio',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-body bg-background text-foreground antialiased overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
