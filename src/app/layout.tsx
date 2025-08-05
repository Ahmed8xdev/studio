import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Ahmed Sanad — Creative Technologist, System Architect, and Marketing Strategist',
  description:
    'The personal portfolio of Ahmed Sanad, showcasing expertise in system architecture, brand strategy, automation, and UI/UX design. Let\'s build the future together.',
  openGraph: {
    title: 'Ahmed Sanad — Creative Technologist, System Architect, and Marketing Strategist',
    description:
      'The personal portfolio of Ahmed Sanad, showcasing expertise in system architecture, brand strategy, automation, and UI/UX design. Let\'s build the future together.',
    url: 'https://sanad-portfolio.com',
    siteName: 'Sanad Portfolio',
    images: [
      {
        url: 'https://placehold.co/1200x630.png',
        width: 1200,
        height: 630,
        alt: 'Ahmed Sanad Portfolio',
      },
    ],
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
