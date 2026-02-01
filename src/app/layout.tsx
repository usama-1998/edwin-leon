import './globals.css';
import { Playfair_Display, Inter, Space_Mono, Nothing_You_Could_Do } from 'next/font/google';

// Font Configuration
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
});

const nothing = Nothing_You_Could_Do({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-nothing',
  display: 'swap',
});

export const metadata = {
  title: 'Edwin Leong | 30 Years Real Estate & Wealth',
  description: 'Singapore real estate advisory based on 30 years of experience. No guru fluff, just scars and receipts.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${spaceMono.variable} ${nothing.variable}`}>
      <body className="font-sans antialiased bg-[#F9F8F4]">
        {children}
      </body>
    </html>
  );
}
