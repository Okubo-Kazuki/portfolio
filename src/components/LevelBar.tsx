import React from 'react';

type LevelBarProps = {
  level: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
};

type LevelBarPropsWithLabels = LevelBarProps & {
  leftLabel?: string;
  rightLabel?: string;
};

export default function LevelBar({
  level,
  max = 5,
  size = 'md',
  leftLabel = 'Basic',
  rightLabel = 'Advanced',
}: LevelBarPropsWithLabels) {
  const dots = Array.from({ length: max });
  const sizes = {
    sm: 'w-2 h-2 rounded-sm',
    md: 'w-3 h-3 rounded-sm',
    lg: 'w-4 h-4 rounded',
  };

  return (
    <div className="flex items-center gap-3" aria-hidden>
      {leftLabel && <span className="text-xs text-slate-600">{leftLabel}</span>}

      <div className="flex items-center gap-2 p-1 rounded">
        {dots.map((_, i) => {
          const active = i < level;
          return (
            <span
              key={i}
              className={`inline-block ${sizes[size]} border border-gray-300`}
              style={{ backgroundColor: active ? '#00ff00' : '#eeeeee' }}
            />
          );
        })}
      </div>

      {rightLabel && <span className="text-xs text-slate-600">{rightLabel}</span>}

      <span className="sr-only">
        Level: {level}/{max}
      </span>
    </div>
  );
}
