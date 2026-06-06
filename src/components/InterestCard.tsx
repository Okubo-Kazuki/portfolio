type InterestCardProps = {
  title: string;
  children: React.ReactNode;
};

export default function InterestCard({ title, children }: InterestCardProps) {
  return (
    <div className="rounded-3xl border-2 border-slate-300 bg-white p-8">
      <h3 className="text-lg font-black">{title}</h3>
      <div className="mb-4 mt-3 h-0.5 w-8 bg-sky-500" />
      <div>{children}</div>
    </div>
  );
}
