import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import ModalProvider from '@/components/ModalProvider';
import './globals.css';
import ToasterProvider from '@/components/ToasterProvider';
import CrispProvider from '@/components/CrispProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Genius',
  description: 'AI Platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <CrispProvider />
      <body className={inter.className}>
        <ClerkProvider>
          <ToasterProvider />
          <ModalProvider />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
