import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/react';

const recoleta = localFont({
  src: '../public/fonts/Recoleta-Bold.ttf',
  variable: '--font-recoleta',
});

export const metadata: Metadata = {
  title: 'Nayan Swarnkar',
  description: 'Portfolio',
  icons: {
    icon: '/favicon.jpg',
    shortcut: '/favicon.jpg',
    apple: '/favicon.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.jpg" />
        <link rel="shortcut icon" href="/favicon.jpg" />
        <link rel="apple-touch-icon" href="/favicon.jpg" />
      </head>
      <body className={`${recoleta.variable}`}>
        {children} <Analytics />
      </body>
    </html>
  );
}
