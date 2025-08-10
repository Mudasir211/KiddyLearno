

import Image from 'next/image'
import Link from 'next/link'
import Banner2 from '../assets/Banner-desktop.png'

import Banner1 from '../assets/Banner-mobile.png'
export default function HeroBanner() {
  return (
    <section className=" bg-sky-50">

        <div className="relative ">


        
       
        <div className="absolute lg:space-y-5 text-center md:w-1/2 lg:pt-36 md:pt-10 top-0 sm:space-y-2 sm:pt-32 sm:px-16 pt-16  px-2  z-40  space-y-6">
          <h1 className="text-3xl  sm:text-2xl font-extrabold text-sky-700 leading-tight">
            Unlock Your Child’s <span className="text-orange-500">Potential</span>
          </h1>
          <p className="text-sm lg:text-lg px-4 text-sky-700 font-semibold">
           KiddyLearno is a playful, safe online learning platform for kids in *KS1 to KS3(Grade 1 to 8)*. It focuses on core academic support, homework help, and test preparation in a fun, engaging way designed for young learners.

          </p>
          <Link href="/book-trial">
            <button className="bg-orange-400 hover:bg-orange-500 transition-colors  px-6 py-3 text-white text-lg font-semibold rounded-full shadow-lg">
              Book Free Trial
            </button>
          </Link>
        </div>

        
        
      


<div className='flex justify-center bg-[#8bd9ff]'><Image
           width={500}
            height={500}
            src={Banner1} // Save the image here
            alt="Kids studying cartoon"
            
            className="w-full sticky top-0 z-10 md:hidden max-w-md md:max-w-lg drop-shadow-xl"
            priority
          />
</div>
          
<Image
  src={Banner2}
  alt="Kids studying cartoon"
  className="w-full hidden h-auto md:block drop-shadow-xl"
  priority
/>


          


        </div>
     
    </section>
  )
}
