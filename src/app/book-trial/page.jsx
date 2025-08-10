'use client';

import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaWhatsapp } from 'react-icons/fa';
import { useUser } from '@clerk/nextjs';
import {
    ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CheckCircle,
  LogIn,
  PiggyBank,
  Sparkles,
  Star
} from 'lucide-react';
import Link from 'next/link';

export default function BookTrialPage() {
  const [loading, setLoading] = useState(false);
  const { user, isLoaded } = useUser();

  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    grade: '',
    otherGrade: '',
    subject: '',
    preferredDateTime: '',
    email: '',
    phone: '',
    whatsapp: '',
    address: '',
    notes: '',
    plan: '', // new
  });
  const [showOtherGradeInput, setShowOtherGradeInput] = useState(false);
  const [alreadyBooked, setAlreadyBooked] = useState(false);

  useEffect(() => {
    if (user && user.emailAddresses.length > 0) {
      const email = user.emailAddresses[0].emailAddress;
      setFormData((prev) => ({ ...prev, email }));

      fetch(`/api/check-trial?email=${encodeURIComponent(email)}`, { method: "GET" })
        .then(async (res) => {
          if (!res.ok) {
            const text = await res.text();
            throw new Error(`Server returned ${res.status}: ${text}`);
          }
          return res.json();
        })
        .then((data) => {
          if (data.success && data.alreadyBooked) {
            setAlreadyBooked(true);
          }
        })
        .catch((err) => {
          console.error("Error checking trial:", err);
        });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'grade') setShowOtherGradeInput(value === 'Other');
  };

  const handlePlanSelect = (planName) => {
    setFormData((prev) => ({ ...prev, plan: planName }));
    toast.success(`Selected: ${planName}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.plan) {
      toast.error("Please select a plan before booking.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/book-trial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      let result;
      try {
        result = await res.json();
      } catch {
        throw new Error("Invalid response from server");
      }

      if (!res.ok || !result.success) {
        toast.error(result.error || "Something went wrong");
      } else {
        toast.success("Trial booked successfully!");
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isLoaded) {
    return <div className="p-6 text-center">Loading...</div>;
  }

  if (!user) {
    return (
      <section className="w-full  text-center">
      <div className="bg-gradient-to-b  from-orange-400 to-[#2c8ccc]  py-20 shadow-xl p-8 md:p-40 relative overflow-hidden">
        {/* Fun floating shapes */}
        <div className="absolute -top-6 -left-6 w-24 h-24 bg-white/20 rounded-full blur-lg"></div>
        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/20 rounded-full blur-lg"></div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-md flex justify-center items-center gap-2">
          <Star className="w-7 h-7 text-yellow-200 animate-spin-slow" />
          Ready to Start Your Learning Adventure?
          <Star className="w-7 h-7 text-yellow-200 animate-spin-slow" />
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-lg md:text-xl text-white/90 font-medium">
          You need to <span className="font-bold underline">sign in</span> before booking your{" "}
          <span className="text-yellow-200 font-extrabold">Free Trial</span> session.
        </p>

        {/* Sign In Button */}
        <div className="mt-8">
          <Link
            href="/sign-in"
            className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold text-lg px-6 py-3 rounded-full shadow-lg hover:bg-yellow-200 hover:text-orange-700 transition-all"
          >
            <LogIn className="w-5 h-5" />
            Sign In Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
        <div className="border-t mt-20 pt-5 text-center">
          <p className="text-sm text-gray-600 mb-6">Prefer to contact us directly?</p>
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
      </div>
       
    </section>
    );
  }

  if (alreadyBooked) {
    return (
       <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-100 px-4">
      {/* Card */}
      <div className="bg-white p-8 rounded-3xl shadow-2xl text-center max-w-md w-full border border-green-100 animate-fadeIn">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <CheckCircle className="w-16 h-16 text-green-500 animate-bounce" />
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-green-600">
          🎉 Trial Booking in Process!
        </h1>

        {/* Message */}
        <p className="mt-4 text-gray-700 text-lg leading-relaxed">
          We’ve received your <span className="font-semibold">Free Trial Booking</span> 
          and our team will contact you shortly to confirm your schedule.
        </p>
        <p className="mt-2 text-sm text-gray-500">
          Sit back, relax, and we’ll handle the rest. 😊
        </p>
      </div>

      {/* Contact Option */}
      <div className="mt-10 text-center animate-slideUp">
        <p className="text-sm text-gray-600 mb-3">Need to reach us sooner?</p>
        <a
          href="https://wa.me/+923705100729"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 text-white bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-200 hover:scale-105"
        >
          <FaWhatsapp className="text-xl" />
          Message Us on WhatsApp
        </a>
      </div>
    </section>
    );
  }

  return (
    <div className="min-h-screen bg-[#f0f9ff] flex items-center justify-center  ">
      <Toaster />
      <div className="max-w-4xl w-full space-y-10 bg-white shadow-xl rounded-2xl p-10">
        <h2 className="text-3xl font-extrabold text-[#3b82f6] text-center">🎉 Book a Free Trial</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              ['Parent’s Full Name', 'parentName'],
              ['Child’s Full Name', 'childName'],
              ['Subject', 'subject'],
              ['Preferred Date & Time (UTC)', 'preferredDateTime', 'datetime-local'],
              ['Country', 'address'],
            ].map(([label, name, type = 'text']) => (
              <div key={name}>
                <label className="block text-sm font-medium text-gray-700">{label}</label>
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm focus:ring-[#3b82f6] focus:border-[#3b82f6] sm:text-sm px-4 py-2"
                  required
                />
              </div>
            ))}

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                pattern="[0-9]*"
                inputMode="numeric"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/\D/g, '');
                }}
                className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm focus:ring-[#3b82f6] focus:border-[#3b82f6] sm:text-sm px-4 py-2"
                required
              />
            </div>

            {/* WhatsApp Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700">WhatsApp Number</label>
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                pattern="[0-9]*"
                inputMode="numeric"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/\D/g, '');
                }}
                className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm focus:ring-[#3b82f6] focus:border-[#3b82f6] sm:text-sm px-4 py-2"
                required
              />
            </div>

            {/* Grade Selector */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Grade Level</label>
              <select
                required
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm focus:ring-[#3b82f6] focus:border-[#3b82f6] sm:text-sm px-4 py-2"
              >
                <option value="">Select Grade</option>
                <option>Grade 1</option>
                <option>Grade 2</option>
                <option>Grade 3</option>
                <option>Grade 4</option>
                <option>Grade 5</option>
                <option>Grade 6</option>
                <option>Grade 7</option>
                <option>Grade 8</option>
                <option>NAPLAN</option>
                <option>International Readiness</option>
                <option>Other</option>
              </select>
            </div>

            {showOtherGradeInput && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Enter Custom Grade/Topic</label>
                <input
                  type="text"
                  name="otherGrade"
                  value={formData.otherGrade}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm focus:ring-[#3b82f6] focus:border-[#3b82f6] sm:text-sm px-4 py-2"
                />
              </div>
            )}

            {/* Notes */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Anything else we should know?</label>
              <textarea
                name="notes"
                rows={3}
                value={formData.notes}
                onChange={handleChange}
                placeholder="Let us know your goals, concerns, or child’s needs..."
                className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm focus:ring-[#3b82f6] focus:border-[#3b82f6] sm:text-sm px-4 py-2"
              ></textarea>
            </div>
          </div>

          {/* Plan Selection */}
         <section className="max-w-6xl mx-auto ">
  {(() => {
    const planStyles = {
      orange: {
        borderActive: "border-3 border-orange-500",
        borderInactive: "border-orange-200",
        text: "text-orange-600",
      },
      sky: {
        borderActive: "border-3 border-sky-500",
        borderInactive: "border-sky-200",
        text: "text-sky-600",
      },
      green: {
        borderActive: "border-3 border-green-500",
        borderInactive: "border-green-200",
        text: "text-green-600",
      },
    };

    const plans = [
      {
        name: "Standard",
        price: "$80–$120",
        color: "orange",
        icon: <CalendarCheck className="w-5 h-5" />,
      },
      {
        name: "Extended",
        price: "$120–$160",
        color: "sky",
        icon: <Sparkles className="w-5 h-5" />,
      },
      {
        name: "Custom",
        price: "Flexible",
        color: "green",
        icon: <PiggyBank className="w-5 h-5" />,
      },
    ];

    return (
      <>
        {/* Desktop / Tablet view */}
        <div className=" md:grid flex flex-col md:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              onClick={() => handlePlanSelect(plan.name)}
              className={`bg-white rounded-2xl shadow-md p-6 border cursor-pointer transition-all ${
                formData.plan === plan.name
                  ? planStyles[plan.color].borderActive
                  : planStyles[plan.color].borderInactive
              }`}
            >
              <h2
                className={`text-xl font-bold ${planStyles[plan.color].text} mb-2 flex items-center gap-1`}
              >
                {plan.icon} {plan.name}
              </h2>
              <p className="text-sm text-sky-600 mb-2">
                {plan.name === "Standard" && "(12 sessions / month)"}
                {plan.name === "Extended" && "(20 sessions / month)"}
                {plan.name === "Custom" && "Tailored for your needs"}
              </p>
              <p className="text-2xl font-extrabold text-sky-800 mb-3">
                {plan.price}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile view */}
        <div className=" hidden space-y-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              onClick={() => handlePlanSelect(plan.name)}
              className={`bg-white rounded-xl p-3 shadow border-l-4 cursor-pointer flex justify-between items-center ${
                formData.plan === plan.name
                  ? planStyles[plan.color].borderActive.replace("border-4 ", "")
                  : planStyles[plan.color].borderInactive
              }`}
            >
              <span className={`font-semibold ${planStyles[plan.color].text}`}>
                {plan.name}
              </span>
              <span className="font-bold text-sky-800">{plan.price}</span>
            </div>
          ))}
        </div>
      </>
    );
  })()}
</section>


          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-3 px-6 border border-transparent rounded-xl shadow-sm text-lg font-medium text-white bg-[#3b82f6] hover:bg-[#2563eb] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3b82f6] transition-all duration-200"
          >
            🚀 {loading ? 'Booking...' : 'Book My Free Trial'}
          </button>
        </form>

        <div className="border-t pt-6 text-center">
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
      </div>
    </div>
  );
}
