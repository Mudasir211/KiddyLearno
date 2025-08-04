import { Mail, Phone } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

export default function ContactOptions() {
  return (
    <section className="py-16 px-1 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-sky-700 mb-6">
        To Reach Us
        </h2>
        <p className="text-sky-600 mb-10">
          We're happy to answer your questions or help you get started.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {/* Email */}
          <a
            href="mailto:hello@example.com"
            className="flex items-center gap-3 text-sky-700 hover:text-sky-900 transition font-medium"
          >
            <Mail className="w-5 h-5 text-sky-500" />
            hello@example.com
          </a>

          {/* Phone */}
          <a
            href="tel:+123456789"
            className="flex items-center gap-3 text-sky-700 hover:text-sky-900 transition font-medium"
          >
            <Phone className="w-5 h-5 text-sky-500" />
            +1 234 567 89
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/123456789" // Replace with your actual WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full shadow-md transition"
          >
            <FaWhatsapp className="w-5 h-5" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
