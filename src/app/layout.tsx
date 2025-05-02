import type {Metadata} from 'next';
import {Press_Start_2P} from 'next/font/google';
import './globals.css';

const hackerFont = Press_Start_2P({
  subsets: ['latin'], // will only have the latin charset and keep everything small size
  style: ['normal'], // will only load the normal style to save on size
  display: 'swap', // will show some basic font until this one is ready and loaded
  weight: "400",
  variable: 'font-family'
});

export const metadata: Metadata = {
  title: 'Spas Quiz site',
  description: 'Generated template from firebase studio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hackerFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
