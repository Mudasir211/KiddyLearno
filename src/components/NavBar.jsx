

import Image from 'next/image'
import Link from 'next/link'

import logo from '../assets/Logo.png'
import Menu from './Menu'
import { SignedIn, SignedOut, SignInButton, UserButton,  } from '@clerk/nextjs'

export default function Navbar() {
 
  return (
    <nav className="bg-sky-100 px-4 py-4 shadow-md sticky w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
       <Link href={'/'}> <Image  height={40} src={logo} alt='logo'/> </Link>
        <div className="hidden md:flex gap-6 text-sky-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/subjects">Subjects</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className='flex gap-4'><SignedOut> <Link href={'/sign-in'}  className='rounded-3xl bg-[#00e4d8] font-semibold p-1.5 px-4'>SignUp</Link></SignedOut> <SignedIn><UserButton /></SignedIn>

        
       <Menu/></div>
          
      </div>

      {/* Mobile menu */}
      
    </nav>
  )
}
