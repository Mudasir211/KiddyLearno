
import Link from 'next/link'
import { BadgeCheck,DollarSign, CalendarCheck, PiggyBank, Sparkles } from 'lucide-react'

export default function PricingPage() {
  return (
    <main className="bg-gradient-to-br from-yellow-50 to-sky-50 py-20 px-6">
      <section className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-extrabold text-orange-500 mb-4">Flexible & Affordable Tutoring Plans</h1>
        <p className="text-lg text-sky-700">
          Choose a plan that suits your child's schedule and goals. All sessions are live, 1-on-1, and guided by expert tutors.
        </p>
      </section>

      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
        {/* Standard Plan */}
        <div className="bg-white rounded-3xl shadow-lg p-8 border-2 border-orange-200 hover:border-orange-400 transition">
          <h2 className="text-2xl font-bold text-orange-600 mb-2 flex justify-center items-center gap-2">
            <CalendarCheck className="w-6 h-6" />
            Standard Plan
          </h2>
          <p className="text-sky-600 mb-4">(12 sessions / month, 4 days a week)</p>
          <p className="text-3xl flex items-center justify-center font-extrabold text-sky-800 mb-2"><DollarSign className='w-8 h-8'/>80–120 <span className="text-base font-medium">/month</span></p>
          <p className="text-sm text-gray-500 mb-6">Price depends on course complexity & skill level</p>
          <ul className="text-left space-y-3 text-sky-700 font-medium mb-6">
            <li className="flex items-center gap-2"><BadgeCheck className="w-5 h-5 text-orange-400" /> 1-on-1 Live Tutoring</li>
            <li className="flex items-center gap-2"><BadgeCheck className="w-5 h-5 text-orange-400" /> Weekly Progress Tracking</li>
            <li className="flex items-center gap-2"><BadgeCheck className="w-5 h-5 text-orange-400" /> Covers Core & Skill Subjects</li>
          </ul>
        </div>

        {/* Extended Plan */}
        <div className="bg-white rounded-3xl shadow-lg p-8 border-2 border-sky-200 hover:border-sky-400 transition scale-105 md:scale-100">
          <h2 className="text-2xl font-bold text-sky-600 mb-2 flex justify-center items-center gap-2">
            <Sparkles className="w-6 h-6" />
            Extended Plan
          </h2>
          <p className="text-sky-600 mb-4">(20 sessions / month, 5 days a week)</p>
          <p className="text-3xl font-extrabold flex items-center justify-center text-sky-800 mb-2"><DollarSign className='w-8 h-8'/> 120–160 <span className="text-base font-medium">/month</span></p>
          <p className="text-sm text-gray-500 mb-6">Price varies by subject level and learning goals</p>
          <ul className="text-left space-y-3 text-sky-700 font-medium mb-6">
            <li className="flex items-center gap-2"><BadgeCheck className="w-5 h-5 text-sky-400" /> Full Curriculum Coverage</li>
            <li className="flex items-center gap-2"><BadgeCheck className="w-5 h-5 text-sky-400" /> Personalized Study Plans</li>
            <li className="flex items-center gap-2"><BadgeCheck className="w-5 h-5 text-sky-400" /> Homework & Test Support</li>
          </ul>
        </div>

        {/* Custom Plan */}
        <div className="bg-white rounded-3xl shadow-lg p-8 border-2 border-green-200 hover:border-green-400 transition">
          <h2 className="text-2xl font-bold text-green-600 mb-2 flex justify-center items-center gap-2">
            <PiggyBank className="w-6 h-6" />
            Custom Plan
          </h2>
          <p className="text-sky-600 mb-4">Tailored tutoring for unique goals</p>
          <p className="text-xl font-bold text-sky-800 mb-2">Flexible Pricing</p>
          <p className="text-sm text-gray-500 mb-6">Choose your schedule, subjects, and budget</p>
          <ul className="text-left space-y-3 text-sky-700 font-medium mb-6">
            <li className="flex items-center gap-2"><BadgeCheck className="w-5 h-5 text-green-400" /> Pick Your Subjects</li>
            <li className="flex items-center gap-2"><BadgeCheck className="w-5 h-5 text-green-400" /> Custom Session Count</li>
            <li className="flex items-center gap-2"><BadgeCheck className="w-5 h-5 text-green-400" /> Ideal for Special Needs</li>
          </ul>

          <Link
            href="/contact"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <div className="text-center mt-16 text-sky-700">
        <p className="text-lg">
          💡 Still not sure which plan is right for your child?{' '}
          <Link href="/contact" className="text-orange-500 font-semibold underline hover:text-orange-600">
            Get a free consultation
          </Link>
        </p>
      </div>
    </main>
  )
}
