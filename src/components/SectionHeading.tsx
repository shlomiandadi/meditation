type SectionHeadingProps = {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
};

export function SectionHeading({
  children,
  subtitle,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 text-center md:mb-14 ${className}`}>
      <h2 className="text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl">
        {children}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
