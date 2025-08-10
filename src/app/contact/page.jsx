
import EmailRequestForm from '@/components/EmailRequestForm'

import { Mail, Phone, MapPin, Clock, SendHorizonal } from 'lucide-react'


import { FaWhatsapp } from 'react-icons/fa'

export default function ContactPage() {
     
    
 


  return (
    <section className="bg-gradient-to-b  from-sky-50 via-white to-orange-50  ">
      
      <div className="max-w-6xl mx-auto flex flex-col items-center rounded-3xl overflow-hidden shadow-xl bg-white px-5 p-10 md:p-16">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-3xl font-extrabold text-sky-700 mb-3">Let’s Talk!</h1>
          <p className="text-lg text-sky-600 max-w-2xl mx-auto">
            Got questions or want to enroll your child? We’re just a message away. Fill out the form or reach out via email, phone, or WhatsApp!
          </p>
        </div>

        {/* Grid layout */}
        <div className="flex flex-col gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <ContactInfo icon={<Mail className="text-orange-500 w-6 h-6" />} label="Email" value="kiddylearno@gmail.com" />
            <ContactInfo icon={<Phone className="text-orange-500 w-6 h-6" />} label="Phone / WhatsApp" value="+923705100729" />
            <ContactInfo icon={<MapPin className="text-orange-500 w-6 h-6" />} label="Location" value="Online – Global Access 🌍" />
            <ContactInfo icon={<Clock className="text-orange-500 w-6 h-6" />} label="Working Hours" value="Mon – Sat: 9AM – 7PM" />

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/+923705100729"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition shadow-lg mt-6"
            >
              <FaWhatsapp className="w-5 h-5" />Chat on WhatsApp
            </a>
          </div>

        
       
        </div>
      </div>
      <EmailRequestForm/>
    </section>
  )
}

function ContactInfo({ icon, label, value }) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1">{icon}</div>
      <div>
        <h4 className="text-sky-700 font-semibold">{label}</h4>
        <p className="text-sky-600">{value}</p>
      </div>
    </div>
  )
}

function Input({ label, type }) {
  return (
    <div>
      <label className="block text-sky-700 font-medium mb-1">{label}</label>
      <input
        type={type}
        className="w-full px-4 py-3 rounded-lg border border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
      />
    </div>
  )
}

function TextArea({ label }) {
  return (
    <div>
      <label className="block text-sky-700 font-medium mb-1">{label}</label>
      <textarea
        rows="5"
        className="w-full px-4 py-3 rounded-lg border border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
      ></textarea>
    </div>
  )
}
