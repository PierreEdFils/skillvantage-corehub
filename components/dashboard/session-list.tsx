import Badge from "@/components/ui/badge";
import Card from "@/components/ui/card";

interface SessionItem {
  client: string;
  time: string;
  type: string;
  status: string;
  badge: "success" | "warning" | "info";
}

export default function SessionList({
  title = "Today's Sessions",
  description = "A simple demo schedule for clickable coaching flows",
  sessions
}: {
  title?: string;
  description?: string;
  sessions: SessionItem[];
}) {
  return (
    <Card className="border-brand-border">
      <h3 className="text-xl font-bold text-brand-navy">{title}</h3>
      <p className="mt-2 text-sm text-brand-muted">
        {description}
      </p>

      <div className="mt-6 space-y-4">
        {sessions.map((session) => (
          <div
            key={`${session.client}-${session.time}`}
            className="flex flex-col gap-3 rounded-2xl border border-brand-border p-4 md:flex-row md:items-center md:justify-between"
          >
            <div>
              <p className="font-semibold text-brand-navy">{session.client}</p>
              <p className="text-sm text-brand-muted">{session.type}</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-sm font-medium text-gray-600">{session.time}</div>
              <Badge variant={session.badge}>{session.status}</Badge>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
