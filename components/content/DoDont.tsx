interface DoDontProps {
  doText: string;
  dontText: string;
}

export default function DoDont({ doText, dontText }: DoDontProps) {
  return (
    <div className="my-8 grid gap-4 sm:grid-cols-2">
      <div className="rounded-lg border border-green-200 bg-green-50 p-4">
        <p className="mb-2 font-semibold text-green-900">✅ Do</p>
        <p className="text-green-800">{doText}</p>
      </div>

      <div className="rounded-lg border border-red-200 bg-red-50 p-4">
        <p className="mb-2 font-semibold text-red-900">❌ Don’t</p>
        <p className="text-red-800">{dontText}</p>
      </div>
    </div>
  );
}
