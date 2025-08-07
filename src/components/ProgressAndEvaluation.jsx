import React from 'react';

const ProgressAndEvaluation = () => {
  return (
    <section className="py-16 px-6 bg-[#fff6e0]">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-sky-700">Progress & Evaluation</h2>
        <p className="text-sky-600 mt-2">
          Stay informed and involved with clear, consistent tracking of your child’s learning journey.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Monthly Report Cards */}
        <div className="bg-white rounded-3xl shadow-md border-t-4 border-orange-400 p-8 flex flex-col items-center text-center">
          <div className="bg-orange-100 p-4 rounded-full mb-4">
            <svg className="w-10 h-10 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 2H7a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2zm-1 14H8v-2h8v2zm0-4H8v-2h8v2zm0-4H8V6h8v2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-sky-700 mb-2">Monthly Report Cards</h3>
          <p className="text-sky-600">
            Receive detailed academic updates every month, helping parents track progress and stay engaged.
          </p>
        </div>

        {/* Weekly Assessments */}
        <div className="bg-white rounded-3xl shadow-md border-t-4 border-sky-400 p-8 flex flex-col items-center text-center">
          <div className="bg-sky-100 p-4 rounded-full mb-4">
            <svg className="w-10 h-10 text-sky-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 4h16v2H4zm0 4h16v12H4zm2 2v2h2v-2H6zm0 4v2h2v-2H6zm4-4v2h8v-2h-8zm0 4v2h8v-2h-8z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-sky-700 mb-2">Weekly Assessments</h3>
          <p className="text-sky-600">
            Short, engaging quizzes each week ensure consistent evaluation and reinforce key learning.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProgressAndEvaluation;
