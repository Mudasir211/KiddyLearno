export default function WhyKiddyLearno() {
  return (
    <section className="py-20 bg-gradient-to-b from-yellow-50 to-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-sky-700 mb-6">
          Why Choose <span className="text-orange-500">KiddyLearno?</span>
        </h2>

        <p className="text-lg text-sky-600 max-w-3xl mx-auto mb-10">
          Unlike generic tutoring platforms, <strong>KiddyLearno</strong> is
          lovingly designed *just for kids in Grades 1–8*. We mix playful learning,
          hand-picked tutors, and affordable pricing to make education both fun and effective.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-orange-500 mb-2">🎨 Made Just for Kids</h3>
            <p className="text-sky-700 text-sm">
              All content, activities, and tutoring styles are tailored for young learners.
              No recycled high school content — just age-appropriate guidance with care.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-sky-500 mb-2">💡 Focused & Effective</h3>
            <p className="text-sky-700 text-sm">
              We don’t overwhelm your child — we guide them step-by-step to build confidence,
              boost grades, and enjoy learning again.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-green-500 mb-2">💸 Affordable for Families</h3>
            <p className="text-sky-700 text-sm">
              Quality tutoring shouldn’t break the bank. Our flexible monthly plans are budget-friendly,
              transparent, and built for long-term growth — without any surprises.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-sky-600 text-base font-medium mb-4">
            Ready to give your child the learning experience they deserve?
          </p>
          <a
            href="/contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full shadow-md transition"
          >
            Book a Free Trial
          </a>
        </div>
      </div>
    </section>
  )
}
