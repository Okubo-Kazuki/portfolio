type ActionButtonProps = React.ComponentProps<'a'> & {
  variant?: 'primary' | 'secondary';
  target?: '_blank' | '';
};

export default function ActionButton({
  href,
  children,
  variant = 'secondary',
  target = '',
  ...rest
}: ActionButtonProps) {
  const base = 'rounded-2xl border-2 border-slate-900 px-8 py-3 font-bold transition';
  const cls =
    variant === 'primary'
      ? `${base} bg-sky-500 text-white hover:bg-sky-600`
      : `${base} bg-white text-slate-900 hover:bg-slate-100`;

  return (
    <a href={href} className={cls} {...rest} target={target} rel="noopener noreferrer">
      {children}
    </a>
  );
}
