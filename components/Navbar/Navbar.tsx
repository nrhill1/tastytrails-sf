// ./components/Navbar/Navbar.tsx
"use client";

// IMPORTS
import { useEffect, useState } from 'react';

const Navbar: React.FC = () => {

    return(
        <nav className="flex items-center text-center justify-between flex-wrap bg-black-500 p-8">
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                <a href="#responsive-header" className="block mt-4 text-2xl lg:inline-block lg:mt-0 text-teal-200 hover:text-white hover:ease-out mr-6">
                    Restaurants
                </a>
                <a href="#responsive-header" className="block mt-4 text-2xl lg:inline-block lg:mt-0 text-teal-200 hover:text-white hover:ease-out mr-6">
                    Links
                </a>
                <a href="https://github.com/nrhill1/tastytrails-sf" className="block mt-4 text-2xl lg:inline-block lg:mt-0 text-teal-200 hover:text-white hover:ease-out">
                    Github
                </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar