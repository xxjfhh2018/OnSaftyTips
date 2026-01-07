import { ReactNode } from "react";

export default function Quote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="relative my-8 rounded-lg border-l-4 border-gray-300 bg-gray-50 p-6 text-gray-700">
      <span className="absolute left-3 top-3 text-3xl text-gray-300">“</span>
      <p className="pl-6 italic leading-relaxed">{children}</p>
    </blockquote>
  );
}
