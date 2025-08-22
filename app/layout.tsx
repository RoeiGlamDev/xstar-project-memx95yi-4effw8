import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI',
  description: 'AI - website | Premium technology platform with ',
  keywords: 'AI, website, technology, ',
  authors: [{ name: 'AI' }],
  openGraph: {
    title: 'AI',
    description: 'AI - website | Premium technology platform',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body className="antialiased bg-white text-black">{children}</body>
    </html>
  );
}