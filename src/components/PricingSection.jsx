import { ShieldCheck, Mail } from 'lucide-react'
import Link from 'next/link'

export default function PricingSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-yellow-100 via-white to-orange-50 relative overflow-hidden">
      <div className="absolute -top-20 -left-10 w-72 h-72 bg-orange-100 rounded-full opacity-30 blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-sky-100 rounded-full opacity-30 blur-2xl z-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-sky-700 mb-4">
          Affordable Monthly Packages
        </h2>
        <p className=" text-sky-600 mb-10">
          Tailored to support your child’s learning journey — from KS1 to KS3(Grade 1 to 8).
        </p>

        {/* Info card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 mb-10 transition hover:shadow-2xl max-w-xl mx-auto">
          <div className="flex flex-col gap-4 items-center text-sky-700">
            <div className="flex items-center gap-2 text-base font-medium">
              <Mail className="w-5 h-5 text-sky-500" />
              <span>
                <Link href="/contact" className="underline hover:text-sky-800 transition">
                  Contact us
                </Link>{' '}
                for personalized pricing details
              </span>
            </div>

            <div className="flex items-center gap-2 text-sm text-sky-500 italic">
              <ShieldCheck className="w-4 h-4" />
              <span>Secure payments & monthly invoices provided</span>
            </div>
          </div>
        </div>
<Link
          href="/pricing"
          className="inline-block bg-blue-500 mb-3 hover:bg-orange-600 text-white text-base font-semibold px-7 py-3 rounded-full shadow-md transition-all hover:scale-105"
        >
          Checkout Our Pricing Plans 
        </Link>
       <br /> <Link
          href="/contact"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-base font-semibold px-7 py-3 rounded-full shadow-md transition-all hover:scale-105"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  )
}
