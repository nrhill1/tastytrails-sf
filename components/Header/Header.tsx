// ./components/Header/Header.tsx
"use client";


import '../../styles/globals.css'

function Header() {
  return (
    <>
      <a href='/'>
        <h1 className="transition text-5xl font-bold underline hover:animate-psychedelic">
          TastyTrails SF
        </h1>
      </a>
    </>
  )
}

export default Header