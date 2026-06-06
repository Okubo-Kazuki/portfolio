import React, { useEffect, useRef, useState } from 'react';

type BadgeProps = {
  label: string;
  className?: string;
  tooltip?: React.ReactNode;
};

export default function Badge({ label, className = '', tooltip }: BadgeProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    }

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }

    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  const content = (
    <span
      className={`box-border inline-flex items-center justify-center align-middle leading-none rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 ${className}`}
    >
      {label}
    </span>
  );

  if (!tooltip) return content;

  return (
    <div ref={ref} className="relative inline-block">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => {
          setOpen(v => !v);
        }}
        className={`rounded-2xl px-0 py-0 text-sm font-semibold align-middle cursor-pointer transition-colors duration-150 ease-in-out hover:opacity-90 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400`}
      >
        {content}
      </button>

      {tooltip && open && (
        <div className="absolute z-10 w-64 left-full top-1/2 -translate-y-1/2 ml-3 lg:bottom-full lg:left-1/2 lg:top-auto lg:-translate-x-1/2 lg:translate-y-0 lg:ml-0 lg:mb-3">
          <div className="relative rounded-lg border bg-white p-3 text-sm text-slate-900 shadow-lg">
            <button
              type="button"
              aria-label="Close"
              onClick={e => {
                e.stopPropagation();
                setOpen(false);
              }}
              className="absolute top-2 right-2 text-slate-500 hover:text-slate-700"
            >
              ×
            </button>
            <div className="mt-0">{tooltip}</div>
          </div>
        </div>
      )}
    </div>
  );
}
