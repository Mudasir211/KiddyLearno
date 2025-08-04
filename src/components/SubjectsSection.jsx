
import Link from 'next/link'
import { PiMathOperations, PiBooksBold, PiFlaskBold } from 'react-icons/pi'

const subjects = [
  {
    name: 'Maths',
    icon: <PiMathOperations className="text-orange-500 w-12 h-12" />,
    description: 'From counting to complex problem-solving.',
  },
  {
    name: 'English',
    icon: <PiBooksBold className="text-sky-500 w-12 h-12" />,
    description: 'Boost reading, writing, and communication skills.',
  },
  {
    name: 'Science',
    icon: <PiFlaskBold className="text-green-500 w-12 h-12" />,
    description: 'Hands-on discovery of the world around us.',
  },
]

export default function SubjectsSection() {
  return (
    <section className={`py-12 bg-sky-50 ` }>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-sky-700 mb-3">Core Subjects</h2>
        <p className=" text-sky-600 mb-6">Tailored for Grades 1–8</p>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mb-8">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
            >
              <div className="mb-4 flex justify-center">{subject.icon}</div>
              <h3 className="text-xl font-bold text-sky-800 mb-2">{subject.name}</h3>
              <p className="text-sky-600 text-sm">{subject.description}</p>
            </div>
          ))}
        </div>

        {/* More Subjects Link */}
        <Link
          href="/subjects"
          className="inline-block text-sky-600 text-sm font-semibold hover:underline hover:text-sky-700 transition"
        >
          More Tutoring Services →
        </Link>
      </div>
    </section>
  )
}
