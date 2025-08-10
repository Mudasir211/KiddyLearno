

import React from 'react'

const subjects = [
  "Maths",
  "Science",
  "English",
  "Test Prep",
  "100+ Topics",
  "More: KS2 & KS3 Subjects"
]

export default function SubjectsGrid() {
  return (
    <section className="py-24 px-8 bg-sky-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-sky-700 mb-8">Tutoring Services Provided</h2>
        <p className="text-sky-600 mb-12 max-w-2xl mx-auto">
          From core academics to advanced skills, KiddyLearno covers it all. Tailored tutoring for KS1 to KS3(Grade 1 to 8).
        </p>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
  {subjects.map((subject, idx) => (
    <div
      key={idx}
      className="w-[calc(50%-0.5rem)] sm:w-[calc(50%-0.75rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1rem)] 
                 bg-white border-2 border-sky-300 rounded-2xl shadow-md hover:shadow-lg transition 
                 p-6 text-base sm:text-lg font-semibold text-sky-700 flex items-center justify-center 
                 text-center min-h-[100px]"
    >
      {subject}
    </div>
  ))}
</div>

      </div>
    </section>
  )
}
