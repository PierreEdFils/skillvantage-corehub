import FadeIn from "./fade-in";

interface SectionHeaderProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: string;
  titleHighlight?: string;
  description?: string;
}

export default function SectionHeader({ badge, badgeIcon, title, titleHighlight, description }: SectionHeaderProps) {
  return (
    <FadeIn>
      <div className="text-center mb-16">
        {badge && (
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-blue-100 to-brand-orange-100 text-brand-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            {badgeIcon}
            {badge}
          </div>
        )}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          {title}{" "}
          {titleHighlight && (
            <span className="bg-gradient-to-r from-brand-blue-700 to-brand-orange-500 bg-clip-text text-transparent">
              {titleHighlight}
            </span>
          )}
        </h2>
        {description && (
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">{description}</p>
        )}
      </div>
    </FadeIn>
  );
}
