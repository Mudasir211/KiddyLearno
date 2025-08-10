import React from 'react'

import Logo from '../assets/Logo.png'
import Link from 'next/link'
import Image from 'next/image'

function Footer() {
  return (
    <footer className=' bg-[#363535e5] text-white'>
    <div className='flex flex-col p-6 gap-12 mb-5 text-sm sm:gap-32 sm:flex-row outfit'>

        <div className='flex flex-col gap-6 '><Image src={Logo} className='w-20 h-14' alt="" />
      <p className='opacity-85'>KiddyLearno is a playful, safe online learning platform for kids in *KS1 to KS3(Grade 1 to 8)*. It focuses on core academic support, homework help, and test preparation in a fun, engaging way designed for young learners.</p></div>
      
      <div className='flex flex-col gap-2 outfit [&>*]:opacity-90'> <h1 className='text-xl font-semibold'>COMPANY</h1> <Link href={'/'} className=''>Home</Link> <Link href={'/about'} className=''>About us</Link><Link href={'/subjects'} className=''>Tutoring Services</Link><Link href={'/contact'} className=''>Contact</Link></div>
      <div className='flex flex-col outfit gap-2 [&>*]:opacity-90'> <h1 className='text-xl font-semibold'>GET IN TOUCH</h1><p className='outfit'>+92 3705100729 </p>
      <span>kiddylearno@gmail.com</span>
      </div>
      
     
    </div> <div className='py-3 text-xs text-center border-t border-white opacity-85 outfit'>Copyright 2025 © KiddyLearno - All Rights Reserved</div></footer>
  )
}

export default Footer 
