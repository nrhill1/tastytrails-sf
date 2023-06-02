// ./components/AuthButton/AuthButton.tsx
'use client';

import { useSession, signIn, signOut } from "next-auth/react";

import '../../styles/globals.css'

const AuthButton: React.FC = () => {
  const { data: session } = useSession()
  if (session) {
    return (
      <div className="block text-2xl lg:inline-block text-teal-200 hover:text-white hover:ease-out duration-500">
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }
  return (
    <div className="block text-2xl lg:inline-block text-teal-200 hover:text-white hover:ease-out duration-500">
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  )
}

export default AuthButton;