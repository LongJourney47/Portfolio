import React from "react";
import { useRouter } from "next/navigation";

const ErrorRedirect = () => {
  const router = useRouter();
// hover:text-transparent hover:underline
  return (
    <button
      className="bg-transparent underline border-none text-white mb-[-10px] transition-transform duration-300 ease-in text-18px hover:translate-y-[-5px] hover:no-underline"
      onClick={() => router.back()}
    >
       going back here
    </button>
  );
};

export default ErrorRedirect;
