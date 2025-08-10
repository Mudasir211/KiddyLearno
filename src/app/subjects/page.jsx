// components/SubjectsPage.jsx
import {
  BookOpen,
  NotebookPen,
  Calculator,
  TestTube,
  Brain,
  PencilLine,
  Sparkles,
  GraduationCap,
  Globe,
  ListChecks,
  Layers3
} from 'lucide-react'
import Image from 'next/image'
import Banner from '../../assets/Subjects-Banner.png'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

export default function SubjectsPage() {
  return (
    <>
      <h1 className="text-3xl font-extrabold bg-[#fef8e6] p-6 pt-10 text-center text-sky-700">
        Subjects & Tutoring Services
      </h1>
      <Image src={Banner} alt="Subjects banner" className="w-full" />
      
      <section className="py-10 md:px-20 px-6 bg-[#f3eed2] space-y-16">

        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sky-600">
            At KiddyLearno, we offer tailored tutoring programs for KS1 to KS3 (Grade 1 to 8) designed to make learning fun,
            effective, and confidence-building. Whether your child needs help in core subjects, wants to sharpen skills,
            or prepare for exams — we’re here to help!
          </p>
        </div>

        {/* Core Subjects */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white shadow-md rounded-3xl p-8 border-t-4 border-orange-400">
            <div className="flex items-center gap-3 mb-4 text-orange-500">
              <BookOpen className="w-6 h-6" />
              <h2 className="text-2xl font-bold">Core Subjects</h2>
            </div>
            <p className="text-sky-700 mb-4">
              We build strong academic foundations with structured, engaging lessons that align with school curricula.
              Our tutors make sure every concept is understood clearly and applied confidently.
            </p>
            <ul className="text-sky-800 space-y-2 pl-1">
              <li className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-orange-400" />
                <span><strong>Maths:</strong> From arithmetic to geometry, we make math fun and interactive.</span>
              </li>
              <li className="flex items-center gap-2">
                <NotebookPen className="w-4 h-4 text-orange-400" />
                <span><strong>English:</strong> Grammar, comprehension, vocabulary, and creative writing support.</span>
              </li>
              <li className="flex items-center gap-2">
                <TestTube className="w-4 h-4 text-orange-400" />
                <span><strong>Science:</strong> Hands-on science help with concepts explained in a child-friendly way.</span>
              </li>
              <li className="flex items-center gap-2">
                <ListChecks className="w-4 h-4 text-orange-400" />
                <span><strong>100+ Topics:</strong> Covering everything from basics to advanced learning goals.</span>
              </li>
              <li className="flex items-center gap-2">
                <Layers3 className="w-4 h-4 text-orange-400" />
                <span><strong>More:</strong> KS2 and KS3 subjects tailored for growing academic needs.</span>
              </li>
            </ul>
          </div>

          {/* Skill Development */}
          <div className="bg-white shadow-md md:h-full rounded-3xl p-8 border-t-4 border-sky-400">
            <div className="flex items-center gap-3 mb-4 text-sky-500">
              <Brain className="w-6 h-6" />
              <h2 className="text-2xl font-bold">Skill Development</h2>
            </div>
            <p className="text-sky-700 mb-4">
              More than just academics, we help students build confidence, independence, and key life skills.
              Every session is designed to unlock a love for learning through fun, challenge-based lessons.
            </p>
            <ul className="text-sky-800 space-y-2 pl-1">
              <li className="flex items-center gap-2">
                <PencilLine className="w-4 h-4 text-sky-400" />
                <span><strong>Reading & Writing:</strong> Fluency, expression, structure, and confidence-building.</span>
              </li>
              <li className="flex items-center gap-2">
                <Brain className="w-4 h-4 text-sky-400" />
                <span><strong>Problem-Solving:</strong> Interactive puzzles, patterns, and logic exercises.</span>
              </li>
              <li className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-sky-400" />
                <span><strong>Mental Math:</strong> Speed, accuracy, and confidence in mental calculations.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Test Prep */}
        <div className="bg-white shadow-md rounded-3xl p-8 border-t-4 border-green-400">
          <div className="flex items-center gap-3 mb-4 text-green-500">
            <GraduationCap className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Test Preparation</h2>
          </div>
          <p className="text-sky-700 mb-4">
            Our test prep programs are structured, effective, and stress-free. We guide students through practice
            papers, exam strategies, and time management, helping them feel prepared and confident on test day.
          </p>
          <ul className="text-sky-800 space-y-2 pl-1">
            <li className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-green-400" />
              <span><strong>NAPLAN:</strong> Targeted practice for reading, writing, and numeracy tests.</span>
            </li>
            <li className="flex items-center gap-2">
              <NotebookPen className="w-4 h-4 text-green-400" />
              <span><strong>KS1 & KS2:</strong> UK-based SATs support tailored for younger learners.</span>
            </li>
            <li className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-green-400" />
              <span><strong>International Readiness:</strong> Preps for global curriculum entrance exams.</span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-sky-700 mb-3">Ready to Get Started?</h3>
          <p className="text-sky-600 mb-6">
            Book a free trial session and see how KiddyLearno makes a difference for your child.
          </p>
          <Link
            href="/book-trial"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition shadow-md"
          >
            Book a Free Trial
          </Link>
        </div>
        <div className="border-t mt-6 pt-6 text-center">
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
      </section>
    </>
  )
}
