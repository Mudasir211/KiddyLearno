'use client'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

function Menu() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='relative'>
       <button
          className="md:hidden text-3xl text-sky-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        { (
        <div onClick={()=>setIsOpen(false)} className={`md:hidden ${isOpen? 'opacity-100 -left-12': "-left-8 opacity-0"}  transition-all delay-50 absolute  py-3 flex flex-col gap-2 bg-white -bottom-56 mt-2 px-4 space-y-2 text-sky-700 font-medium`}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/subjects">Subjects</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
        </div>
      )}
    </div>
  )
}

export default Menu
