// app/sign-in/[[...sign-in]]/page.tsx

import { SignIn, SignUp } from "@clerk/nextjs";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="flex items-center py-5 flex-col min-h-screen bg-gradient-to-br from-orange-50 via-white to-sky-50">
      {/* Header */}
      <h1 className="text-2xl my-5">
        Welcome to{" "}
        <span className="text-orange-500 font-bold">Kiddy</span>
        <span className="text-sky-600 font-bold">Learno</span>
      </h1>
      

      {/* Sign In Form */}
      <SignUp
        appearance={{
          elements: {
            card: "shadow-lg rounded-xl border border-gray-200",
            headerTitle: "text-2xl font-semibold text-center",
            formFieldInput:
              "rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500",
          },
        }}
      />

      {/* Sign Up Option */}
      <p className="mt-6 text-gray-600 text-sm">
        Already have an account?{" "}
        <Link
          href="/sign-in"
          className="text-orange-500 font-semibold hover:underline hover:text-orange-600"
        >
          Sign in here
        </Link>
      </p>
    </div>
  );
}
