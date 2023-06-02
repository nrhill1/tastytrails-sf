// ./app/layout.tsx
'use client';
// Auth Imports
import { SessionProvider } from 'next-auth/react'
// Style Imports
import '../styles/globals.css'
import { Vibur } from 'next/font/google'


const vb = Vibur({
  subsets: ['latin'],
  weight: '400'
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <SessionProvider>
        <body className={vb.className}>{children}</body>
      </SessionProvider>
    </html>
  )
}
