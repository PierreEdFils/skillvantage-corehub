import ProgressBar from "@/components/ui/progress-bar";
import Card from "@/components/ui/card";

interface LearningPathItem {
  title: string;
  progress: number;
  meta: string;
}

export default function LearningPathList({
  title = "Learning Paths",
  description = "Demo progress across your active growth tracks",
  paths
}: {
  title?: string;
  description?: string;
  paths: LearningPathItem[];
}) {
  return (
    <Card className="border-brand-border">
      <h3 className="text-xl font-bold text-brand-navy">{title}</h3>
      <p className="mt-2 text-sm text-brand-muted">
        {description}
      </p>

      <div className="mt-6 space-y-5">
        {paths.map((path) => (
          <div key={path.title} className="rounded-2xl border border-brand-border p-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-brand-navy">{path.title}</p>
                <p className="text-sm text-brand-muted">{path.meta}</p>
              </div>
              <span className="text-sm font-semibold text-brand-blue">{path.progress}%</span>
            </div>
            <div className="mt-4">
              <ProgressBar value={path.progress} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
