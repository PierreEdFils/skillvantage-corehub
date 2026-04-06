import Badge from "@/components/ui/badge";
import Card from "@/components/ui/card";

interface AchievementItem {
  title: string;
  detail: string;
  tag: string;
}

export default function AchievementList({
  title = "Achievements",
  description = "Recent wins that make the demo feel alive",
  achievements
}: {
  title?: string;
  description?: string;
  achievements: AchievementItem[];
}) {
  return (
    <Card className="border-brand-border">
      <h3 className="text-xl font-bold text-brand-navy">{title}</h3>
      <p className="mt-2 text-sm text-brand-muted">
        {description}
      </p>

      <div className="mt-6 space-y-4">
        {achievements.map((achievement) => (
          <div key={achievement.title} className="rounded-2xl border border-brand-border p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-semibold text-brand-navy">{achievement.title}</p>
                <p className="mt-1 text-sm text-brand-muted">{achievement.detail}</p>
              </div>
              <Badge variant="brand">{achievement.tag}</Badge>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
