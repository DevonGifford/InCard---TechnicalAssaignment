import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/app/components/navbar';
import AuthProvider from '@/app/Providers/AuthProvider';

import './globals.css'
import ToasterProvider from './Providers/ToasterProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'InCard Technical Assessment',
  description: 'Authentication & Session-management',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider />
        <AuthProvider>
          <Navbar />
            {children}
        </AuthProvider>
      </body>
    </html>
  )
};
