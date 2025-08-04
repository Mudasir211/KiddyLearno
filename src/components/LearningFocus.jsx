import {
  GraduationCap,
  NotebookPen,
  BookOpenCheck,
  ScrollText,
  Calculator,
  Puzzle,
} from 'lucide-react'

import { GiBrain } from 'react-icons/gi'
import { TbAbacus, TbWriting } from 'react-icons/tb'
import { MdScience } from 'react-icons/md'
import { FaBookReader, FaGlobeAmericas } from 'react-icons/fa'

export default function LearningFocus() {
  return (
    <section className="py-16 bg-gradient-to-br from-sky-50 to-yellow-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-sky-700 mb-10">
          Tutoring Services Provided
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-left text-sky-700 font-medium">
          {/* Core Subjects */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">
            <div className="flex items-center gap-2 mb-4 text-orange-500">
              <BookOpenCheck className="w-6 h-6" />
              <h3 className="text-xl font-bold">Core Subjects</h3>
            </div>
            <ul className="space-y-2 pl-1">
              <li className="flex items-center gap-2">
                <TbAbacus className="w-5 h-5 text-orange-400" />
                <span>Maths</span>
              </li>
              <li className="flex items-center gap-2">
                <TbWriting className="w-5 h-5 text-orange-400" />
                <span>English</span>
              </li>
              <li className="flex items-center gap-2">
                <MdScience className="w-5 h-5 text-orange-400" />
                <span>Science</span>
              </li>
            </ul>
          </div>

          {/* Skill Development */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">
            <div className="flex items-center gap-2 mb-4 text-sky-500">
              <GiBrain className="w-6 h-6" />
              <h3 className="text-xl font-bold">Skill Development</h3>
            </div>
            <ul className="space-y-2 pl-1">
              <li className="flex items-center gap-2">
                <FaBookReader className="w-5 h-5 text-sky-400" />
                <span>Reading & Writing</span>
              </li>
              <li className="flex items-center gap-2">
                <Puzzle className="w-5 h-5 text-sky-400" />
                <span>Problem-Solving</span>
              </li>
              <li className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-sky-400" />
                <span>Mental Math & Logic</span>
              </li>
            </ul>
          </div>

          {/* Test Prep */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">
            <div className="flex items-center gap-2 mb-4 text-green-600">
              <GraduationCap className="w-6 h-6" />
              <h3 className="text-xl font-bold">Test Prep</h3>
            </div>
            <ul className="space-y-2 pl-1">
              <li className="flex items-center gap-2">
                <ScrollText className="w-5 h-5 text-green-500" />
                <span>NAPLAN</span>
              </li>
              <li className="flex items-center gap-2">
                <NotebookPen className="w-5 h-5 text-green-500" />
                <span>KS1 & KS2</span>
              </li>
              <li className="flex items-center gap-2">
                <FaGlobeAmericas className="w-5 h-5 text-green-500" />
                <span>International Readiness</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
