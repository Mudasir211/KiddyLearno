// components/ReviewsSection.js
"use client";

import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Gunjan",
    role: "Parent",
    text: "We’ve been taking online tuition here with Miss Sannia for over 3 years now for both Math and English, and the experience has been excellent. She has a very positive attitude, is flexible with scheduling, and always provides regular updates on progress. She also has a clear understanding of the Australian curriculum and ensures her teaching follows it closely. My son really enjoys her classes as she is friendly, approachable, and makes learning engaging. I truly appreciate her dedication and highly recommend this platform to anyone looking for a supportive and effective tutor.",
    image: "/Gunjal.jpeg", // female profile
    rating: 5,
  },
  {
    name: "Aman Sandhar",
    role: "Student",
    text: "I enrolled here for getting help with Science, and my teacher is very knowledgeable, patient, and always explains things clearly. She has helped me gain confidence in exams and achieve good results. Highly recommend.",
    image: "/Aman.jpeg",
    rating: 5,
  },
  {
    name: "Ashwat",
    role: "Student",
    text: "Kiddy Learno has been one of the best decisions I have made with my academic learning. I’m a student currently in year 12 and have been tutored by this organisation for many years. I’ve improved my mathematics, chemistry and biology all because of the aid of Kiddy Learno. I recommend this organisation for anybody attempting to hone their potential and capabilities intellectually.",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
    rating: 5,
  },
];

export default function ReviewsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-sky-50 via-white to-orange-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-sky-700 mb-4">
          ❤️ What Our Students & Parents Say
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Real experiences from families who trust KiddyLearno with their
          child’s learning journey.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col hover:shadow-2xl transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-14 h-14 rounded-full border-2 border-sky-300"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {review.name}
                  </h3>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>

              <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                {review.text}
              </p>

              <div className="flex gap-1 text-yellow-400">
                {[...Array(review.rating)].map((_, idx) => (
                  <FaStar key={idx} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
