// ./app/layout.tsx
'use client';
// Auth Imports
import { SessionProvider } from 'next-auth/react'
// Style Imports
import '../styles/globals.css'
import { Vibur } from 'next/font/google'

// font
const vb = Vibur({
  subsets: ['latin'],
  weight: '400'
});

interface IProps {
  children: React.ReactNode;
  session: any;
}

export default function RootLayout({ children, session}: IProps) {
  return (
    <html lang='en'>
      <SessionProvider session={session}>
        <body className={vb.className}>{children}</body>
      </SessionProvider>
    </html>
  )
}
