import { ReactNode } from "react";

export default function Info({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 flex gap-3 rounded-lg border border-blue-200 bg-blue-50 p-4 text-blue-900">
      <span className="text-xl">🔍</span>
      <div className="leading-relaxed">{children}</div>
    </div>
  );
}
