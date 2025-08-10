import Image from "next/image";
import Banner1 from '../../assets/About-Banner.png'
import Banner2 from '../../assets/About-Banner-desktop.png'

import ContactOptions from "@/components/ContactOptions";
import SubjectsGrid from "@/components/SubjectsGrid";
import ProgressAndEvaluation from "@/components/ProgressAndEvaluation";
import Link from "next/link";
export default function AboutPage() {
  return (
    <main className="bg-white flex  flex-col text-sky-800">
       <section className="px-4 flex flex-col gap-8 sm:py-0 py-14 relative bg-[#c5f1ff]"><button className="bg-orange-500 text-white px-5 font-thin hidden justify-center items-center py-1.5 text-[10px] top-48 absolute rounded-2xl">Get Started</button> <Image className="md:hidden" alt="" src={Banner1}/>
      <div className="hidden relative md:block"> <div className="absolute md:py-16 md:px-6 space-y-6 p-30 py-40 left-0"> <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-sky-700">
            Kiddy<span className="text-orange-500">Learno</span>
          </h1>
          
          <h2 className="font-bold text-2xl">Engaging Online Tutoring For <p className="text-3xl">Grades 1 to 8</p></h2><p>helping kids learn and grow with joy</p>
          </div> <Image alt="" src={Banner2}/></div>
       <div className="bg-gradient-to-br rounded-2xl from-sky-50 to-yellow-50 py-10 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-8 text-sky-700">
            About <br /><span className="text-orange-500">KiddyLearno</span>
          </h1>
          <p className="text-lg md:text-xl text-sky-600 max-w-2xl mx-auto">
            Empowering young minds with joyful, personalized, and effective online tutoring for KS1 to KS3(Grade 1 to 8).
          </p>
        </div>
      </div>
</section> 
      {/* Hero Section */}
      
      {/* Mission & Vision */}
      <section className="py-24 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 text-center md:text-left">
        <div>
          <h2 className="text-2xl font-bold text-orange-500 mb-3">🎯 Our Mission</h2>
          <p className="text-sky-700">
            At <span className="text-2xl font-bold"><span className="text-orange-500">K</span>L</span>, our mission is to make learning accessible, affordable, and fun for every child.
            We help students build strong academic foundations while nurturing creativity, confidence, and curiosity.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-sky-600 mb-3">🌟 Our Vision</h2>
          <p className="text-sky-700">
            We envision a future where every child — no matter where they are — has access to high-quality,
            compassionate tutoring that helps them thrive in school and life.
          </p>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="bg-sky-50 py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Why We’re Different</h2>
          <p className="text-sky-600 mb-10 max-w-3xl mx-auto">
            Most tutoring platforms take a one-size-fits-all approach. We don’t. 
            <span className="text-2xl font-bold"><span className="text-orange-500" > K</span>L</span> is crafted specifically for children in KS1 to KS3(Grade 1 to 8).
            Every lesson is tailored, every tutor is child-focused, and every experience is designed to make your child feel supported, understood, and excited to learn.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white rounded-2xl shadow p-6 hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">🎈 Kid-Centric Design</h3>
              <p>Everything from our platform to our lessons is built around young learners — not older students or adults.</p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-sky-500 mb-2">🎓 Curriculum Aligned</h3>
              <p>We follow national standards while customizing content based on the child’s unique pace and personality.</p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-green-500 mb-2">💰 Affordable Plans</h3>
              <p>Flexible pricing that supports real families. We believe quality tutoring shouldn’t be a luxury.</p>
            </div>
          </div>
        </div>
      </section>
<ProgressAndEvaluation/>

      {/* Teaching Philosophy */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-sky-700 mb-6 text-center">Our Teaching Philosophy</h2>
        <p className="text-sky-700 text-lg leading-relaxed text-center max-w-3xl mx-auto">
          We believe in nurturing the *whole child* — not just their grades. That means:
          <br />
          – Encouraging self-expression and curiosity  
          <br />
          – Building confidence through personalized guidance  
          <br />
          – Helping kids discover the joy in learning rather than fearing mistakes
        </p>
      </section>

      {/* Our Tutors */}
      <section className="bg-yellow-50 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-orange-500 mb-4">Meet Our Tutors</h2>
          <p className="text-sky-700 mb-6">
            Our tutors are more than just educators — they’re mentors, motivators, and trusted guides for your child.
          </p>
          <p className="text-sky-600">
            Each tutor goes through a rigorous selection process and is trained in both subject expertise
            and child-friendly teaching methods. Most importantly, they’re passionate about helping children grow.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 text-center px-6 bg-gradient-to-br from-sky-100 to-white">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-sky-700 mb-6">Ready to Get Started?</h2>
          <p className="text-sky-600 mb-8">
            Book a free trial session today and see how KiddyLearno can support your child’s journey.
          </p>
          <Link
            href="/book-trial"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition shadow-md"
          >
            Book a Free Trial
          </Link>
        </div>
      </section>

      {/* Contact Info */}
      <ContactOptions/>
    </main>
  )
}
