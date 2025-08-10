import { Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

export default function ContactOptions() {
  return (
    <section className="py-20 px-1 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-sky-700 mb-6">
        To Reach Us
        </h2>
        <p className="text-sky-600 mb-6">
          We're happy to answer your questions or help you get started.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {/* Email */}
          <a
            href="mailto:hello@example.com"
            className="flex items-center gap-3 text-sky-700 hover:text-sky-900 transition font-medium"
          >
            <Mail className="w-5 h-5 text-sky-500" />
            kiddylearno@gmail.com
          </a>

          {/* Phone */}
          <a
            href="tel:+92 3705100729"
            className="flex items-center gap-3 text-sky-700 hover:text-sky-900 transition font-medium"
          >
            <Phone className="w-5 h-5 text-sky-500" />
            +92 3705100729
          </a> 

          {/* WhatsApp */}
          
        </div>
        <a
            href="https://wa.me/+923705100729" // Replace with your actual WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex  items-center gap-2 px-5 py-3 mt-5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full shadow-md transition"
          >
            <FaWhatsapp className="w-5 h-5" />
            Chat on WhatsApp
          </a>
         <div className="mt-3">
          
          <Link
            href="/book-trial"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full shadow-md transition"
          >
            Book a Free Trial
          </Link>
        </div>
      
      </div>
    </section>
  )
}
