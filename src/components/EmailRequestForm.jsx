'use client'

import { useState } from 'react'
import { MailCheck } from 'lucide-react'

export default function EmailRequestForm() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Logic removed – just preventing default form submission for now
  }

  return (
    <section className="py-16 bg-sky-50">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-sky-700 mb-4">
          Want Full Details in Your Inbox?
        </h2>
        <p className="text-sky-600 mb-8">
          Enter your email and we’ll send you all the information you need.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full sm:w-auto flex-1 px-4 py-3 rounded-full border border-sky-200 focus:ring-2 focus:ring-sky-400 outline-none transition"
          />
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition shadow-md flex items-center gap-2"
          >
            <MailCheck className="w-4 h-4" />
            Send Me Details
          </button>
        </form>
      </div>
    </section>
  )
}
