'use client'

import { useUser } from '@clerk/nextjs'
import { useState } from 'react'
import { redirect } from 'next/navigation'
import { FaWhatsapp } from 'react-icons/fa'

export default function BookTrialPage() {
  const { user } = useUser()

  if (!user) {
    redirect('/sign-in')
  }

  const [grade, setGrade] = useState('')
  const [showOtherGradeInput, setShowOtherGradeInput] = useState(false)

  return (
    <div className="min-h-screen bg-[#f0f9ff] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-10 bg-white shadow-xl rounded-2xl p-10">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#3b82f6] font-nunito">🎉 Book a Free Trial</h2>
          <p className="mt-2 text-sm text-gray-600">Let’s get your child started on a fun learning journey!</p>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Parent’s Name */}
            <div>
              <label htmlFor="parentName" className="block text-sm font-medium text-gray-700">
                Parent’s Full Name
              </label>
              <input
                type="text"
                name="parentName"
                id="parentName"
                placeholder="e.g., Sarah Johnson"
                className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm focus:ring-[#3b82f6] focus:border-[#3b82f6] sm:text-sm px-4 py-2"
              />
            </div>

            {/* Child’s Name */}
            <div>
              <label htmlFor="childName" className="block text-sm font-medium text-gray-700">
                Child’s Full Name
              </label>
              <input
                type="text"
                name="childName"
                id="childName"
                placeholder="e.g., Alex Johnson"
                className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm focus:ring-[#3b82f6] focus:border-[#3b82f6] sm:text-sm px-4 py-2"
              />
            </div>

            {/* Grade */}
            <div>
              <label htmlFor="grade" className="block text-sm font-medium text-gray-700">
                Grade Level
              </label>
              <select
                id="grade"
                name="grade"
                value={grade}
                onChange={(e) => {
                  setGrade(e.target.value)
                  setShowOtherGradeInput(e.target.value === 'Other')
                }}
                className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm focus:ring-[#3b82f6] focus:border-[#3b82f6] sm:text-sm px-4 py-2"
              >
                <option value="">Select Grade</option>
                <option>Grade 1</option>
                <option>Grade 2</option>
                <option>Grade 3</option>
                <option>Grade 4</option>
                <option>Grade 5</option>
                <option>Grade 6</option>
                <option>Grade 7</option>
                <option>Grade 8</option>
                <option>NAPLAN</option>
                <option>International Readiness</option>
                <option>Other</option>
              </select>
            </div>

            {/* Other Grade */}
            {showOtherGradeInput && (
              <div>
                <label htmlFor="otherGrade" className="block text-sm font-medium text-gray-700">
                  Enter Custom Grade/Topic
                </label>
                <input
                  type="text"
                  name="otherGrade"
                  id="otherGrade"
                  placeholder="e.g., IB Year 1 – Algebra Help"
                  className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm focus:ring-[#3b82f6] focus:border-[#3b82f6] sm:text-sm px-4 py-2"
                />
              </div>
            )}

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="e.g., Math, Science, English"
                className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm focus:ring-[#3b82f6] focus:border-[#3b82f6] sm:text-sm px-4 py-2"
              />
            </div>

            {/* Preferred Date & Time */}
            <div>
              <label htmlFor="preferredDateTime" className="block text-sm font-medium text-gray-700">
                Preferred Date & Time (UTC)
              </label>
              <input
                type="datetime-local"
                name="preferredDateTime"
                id="preferredDateTime"
                className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm focus:ring-[#3b82f6] focus:border-[#3b82f6] sm:text-sm px-4 py-2"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Parent's Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="e.g., parent@example.com"
                className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm focus:ring-[#3b82f6] focus:border-[#3b82f6] sm:text-sm px-4 py-2"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="+1 234 567 890"
                className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm focus:ring-[#3b82f6] focus:border-[#3b82f6] sm:text-sm px-4 py-2"
              />
            </div>

            {/* WhatsApp */}
            <div>
              <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700">WhatsApp Number</label>
              <input
                type="tel"
                name="whatsapp"
                id="whatsapp"
                placeholder="e.g., +1 987 654 3210"
                className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm focus:ring-[#3b82f6] focus:border-[#3b82f6] sm:text-sm px-4 py-2"
              />
            </div>

            {/* Address */}
            <div className="sm:col-span-2">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="123 Learning Lane, Kidstown"
                className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm focus:ring-[#3b82f6] focus:border-[#3b82f6] sm:text-sm px-4 py-2"
              />
            </div>

            {/* Notes */}
            <div className="sm:col-span-2">
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                Anything else we should know?
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={3}
                placeholder="Let us know your goals, concerns, or child’s needs..."
                className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm focus:ring-[#3b82f6] focus:border-[#3b82f6] sm:text-sm px-4 py-2"
              ></textarea>
            </div>
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-6 border border-transparent rounded-xl shadow-sm text-lg font-medium text-white bg-[#3b82f6] hover:bg-[#2563eb] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3b82f6] transition-all duration-200"
            >
              🚀 Book My Free Trial
            </button>
          </div>
        </form>

        {/* Contact Directly Section */}
        <div className="border-t pt-6 text-center">
          <p className="text-sm text-gray-600 mb-2">Prefer to contact us directly?</p>
          <a
            href="https://wa.me/+923705100729"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 text-white bg-green-500 rounded-xl hover:bg-green-600 transition-all duration-200"
          >
            <FaWhatsapp className="mr-2 text-lg" />
            Message Us on WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
