// ./components/Navbar/Navbar.tsx

// React Imports
import { useEffect, useState } from 'react';
import { useSession, signIn, signOut } from "next-auth/react";


function AuthButton() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div className="block text-2xl text-teal-200 duration-500 lg:inline-block hover:text-white hover:ease-out">
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }
  return (
    <div className="block text-2xl text-teal-200 duration-500 lg:inline-block hover:text-white hover:ease-out">
      <button onClick={() => signIn()}>Sign in w/ Google</button>
    </div>
  )
}


const Navbar: React.FC = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between p-8 text-center bg-black-500">
      <div className="flex-grow block w-full lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <AuthButton />
          <p className="block mx-5 text-4xl text-teal-200 lg:inline-block"> • </p>
          <a href="https://github.com/nrhill1/tastytrails-sf" target="_blank" className="block text-2xl text-teal-200 duration-500 lg:inline-block hover:text-white hover:ease-out">
            Source Code
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar