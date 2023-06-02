// ./components/Navbar/Navbar.tsx

// React Imports
import { useEffect, useState } from 'react';
// Component Imports
import AuthButton from '../AuthButton'

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center text-center justify-between flex-wrap bg-black-500 p-8">
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <AuthButton />
          <p className="block text-4xl mx-5 lg:inline-block text-teal-200"> • </p>
          <a href="https://github.com/nrhill1/tastytrails-sf" target="_blank" className="block text-2xl lg:inline-block text-teal-200 hover:text-white hover:ease-out duration-500">
            Code
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar