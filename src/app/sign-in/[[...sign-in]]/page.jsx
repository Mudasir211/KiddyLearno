// app/sign-in/[[...sign-in]]/page.tsx

import { SignIn } from "@clerk/nextjs";


export default function SignInPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <SignIn
        appearance={{
        
          elements: {
            card: "shadow-lg rounded-xl border border-gray-200",
            headerTitle: "text-2xl font-semibold text-center",
            formFieldInput: "rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500",
          },
        }}
      />
    </div>
  );
}
