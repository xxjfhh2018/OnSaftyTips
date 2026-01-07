import { ReactNode } from "react";

export default function Warning({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 flex gap-3 rounded-lg border border-yellow-300 bg-yellow-50 p-4 text-yellow-900">
      <span className="text-xl">⚠️</span>
      <div className="leading-relaxed">{children}</div>
    </div>
  );
}
