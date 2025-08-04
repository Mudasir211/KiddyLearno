'use client'

import { motion } from 'framer-motion'
import { Sparkles, BookOpen, CheckCircle } from 'lucide-react'

export default function HowItWorks() {
  return (
    <section className="py-9 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-sky-700 mb-9">How It Works</h2>

        {/* Timeline Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="relative flex flex-col md:flex-row items-center justify-between gap-9 md:gap-0"
        >
          {/* Line across steps */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-orange-200 z-0 max-w-4xl mx-auto"></div>

          {/* Step 1 */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-white border-4 border-orange-400 flex items-center justify-center shadow-md">
              <BookOpen className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-sky-800">Sign Up</h3>
            <p className="text-sky-600 max-w-xs text-sm mt-1">Quick and easy registration for parents and students.</p>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-white border-4 border-sky-400 flex items-center justify-center shadow-md">
              <Sparkles className="w-8 h-8 text-sky-500" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-sky-800">Book Trial</h3>
            <p className="text-sky-600 max-w-xs text-sm mt-1">Choose your preferred time and subject.</p>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-white border-4 border-green-400 flex items-center justify-center shadow-md">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-sky-800">Start Learning</h3>
            <p className="text-sky-600 max-w-xs px-1.5 text-sm mt-1">Join live classes and start your learning adventure.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
