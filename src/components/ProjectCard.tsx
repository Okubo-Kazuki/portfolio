import { useEffect, useState } from 'react';
import ActionButton from './ActionButton';

type ProjectCardProps = {
  title: string;
  subtitle?: string;
  preview?: string;
  details?: string;
  live?: string;
  repo?: string;
  tech?: string[];
  why?: string;
  challenges?: string;
  learnings?: string;
  role?: string;
  duration?: string;
  style?: string;
};

export default function ProjectCard({ title, subtitle, preview, details, live, repo, tech, why, challenges, learnings, role, duration, style = '' }: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  const actionBase = 'rounded-2xl border-2 border-slate-900 px-8 py-3 font-bold transition';
  const actionSecondary = `${actionBase} bg-white text-slate-900 hover:bg-slate-100`;

  const isDark = style.includes('text-white');

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <article
        onClick={() => setOpen(true)}
        className={`relative rounded-3xl border-2 border-slate-900 p-4 transition ${style} ${open ? '' : 'overflow-hidden h-96 md:h-96'} cursor-pointer`}
      >
        <div className="flex flex-col h-full">
          <div>
            <h3 className="text-lg font-black">{title}</h3>
            {subtitle && <p className="text-sm text-slate-500 mt-1">{subtitle}</p>}
          </div>

          <div className="mt-3 flex-1">
            {preview && (
              <div className="w-full aspect-[3/2] overflow-hidden rounded-xl mb-4">
                <img src={preview} alt={`${title} preview`} className="w-full h-full object-top object-cover" loading="lazy" />
              </div>
            )}
          </div>

          <div className="mt-2 flex justify-center">
            <div className={actionSecondary}>詳細を見る</div>
          </div>
        </div>
      </article>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />

          <div className="relative z-10 w-full max-w-6xl mx-4">
            <div
              onClick={e => e.stopPropagation()}
              className={`rounded-2xl ${isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'} max-h-[90vh] overflow-hidden`}
            >
              <div className="p-10 max-h-[90vh] overflow-auto">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-3xl font-black">{title}</h2>
                    {subtitle && <p className="text-base opacity-80 mt-2">{subtitle}</p>}
                  </div>
                  <button onClick={() => setOpen(false)} className="text-base text-sky-500 hover:underline">閉じる</button>
                </div>

                <div className="mt-6">
                  {preview && (
                    <div className="w-full flex justify-center mb-6">
                      <div className="w-3/4 aspect-[3/2] overflow-hidden rounded-md">
                        <img src={preview} alt={`${title} preview`} className="w-full h-full object-top object-cover" loading="lazy" />
                      </div>
                    </div>
                  )}

                  {details && <p className={isDark ? 'text-base leading-8 text-slate-300' : 'text-base leading-8 text-slate-700'}>{details}</p>}

                  {(tech || why || challenges || learnings || role || duration) && (
                    <div className="mt-6 text-base space-y-4">
                      {role && duration && <div className="text-sm opacity-80">{role} ・ {duration}</div>}

                      {tech && tech.length > 0 && (
                        <div>
                          <div className="text-sm opacity-80">Tech:</div>
                          <div className="flex flex-wrap gap-3 mt-2">
                            {tech.map(t => (
                              <span key={t} className="text-sm px-3 py-2 bg-slate-100 rounded-md">{t}</span>
                            ))}
                          </div>
                        </div>
                      )}

                      {why && (
                        <div>
                          <div className="font-semibold text-base">技術選定の理由</div>
                          <div className="text-base opacity-90">{why}</div>
                        </div>
                      )}

                      {challenges && (
                        <div>
                          <div className="font-semibold text-base">苦労した点</div>
                          <div className="text-base opacity-90">{challenges}</div>
                        </div>
                      )}

                      {learnings && (
                        <div>
                          <div className="font-semibold text-base">学んだこと</div>
                          <div className="text-base opacity-90">{learnings}</div>
                        </div>
                      )}
                    </div>
                  )}

                  {(live || repo) && (
                    <div className="mt-6">
                      <div className="flex flex-wrap gap-3">
                        {live && (
                          <ActionButton href={live} variant="primary" target="_blank">
                            Preview
                          </ActionButton>
                        )}

                        {repo && (
                          <ActionButton href={repo} variant="secondary" target="_blank">
                            Source
                          </ActionButton>
                        )}
                      </div>

                      {(live || repo) && (
                        <div className="mt-3 text-sm opacity-80 truncate">
                          Link: <a href={live ?? repo} target="_blank" rel="noopener noreferrer" className="underline">{live ?? repo}</a>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
