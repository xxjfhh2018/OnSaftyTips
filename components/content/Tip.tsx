import { ReactNode } from "react";

export default function Tip({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 flex gap-3 rounded-lg border border-green-200 bg-green-50 p-4 text-green-900">
      <span className="text-xl">💡</span>
      <div className="leading-relaxed">{children}</div>
    </div>
  );
}
