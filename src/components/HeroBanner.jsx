

import Image from 'next/image'
import Link from 'next/link'
import Banner2 from '../assets/Banner-desktop.png'

import Banner1 from '../assets/Banner-mobile.png'
export default function HeroBanner() {
  return (
    <section className=" bg-sky-50">

        <div className="relative ">
          <Image
           width={500}
            height={500}
            src={Banner1} // Save the image here
            alt="Kids studying cartoon"
            
            className="w-full sm:hidden max-w-md md:max-w-lg drop-shadow-xl"
            priority
          />

<Image
  src={Banner2}
  alt="Kids studying cartoon"
  className="w-full hidden h-auto sm:block drop-shadow-xl"
  priority
/>


           <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
       
        <div className="text-center top-14 px-2 left-0 absolute  md:text-left space-y-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-sky-700 leading-tight">
            Unlock Your Child’s <span className="text-orange-500">Potential</span>
          </h1>
          <p className="text-sm px-4 text-sky-700 font-semibold">
           KiddyLearno is a playful, safe online learning platform for kids in *Grades 1–8*. It focuses on core academic support, homework help, and test preparation in a fun, engaging way designed for young learners.

          </p>
          <Link href="/book-trial">
            <button className="bg-orange-400 hover:bg-orange-500 transition-colors px-6 py-3 text-white text-lg font-semibold rounded-full shadow-lg">
              Book Free Trial
            </button>
          </Link>
        </div>

        
        
      </div>


        </div>
     
    </section>
  )
}
