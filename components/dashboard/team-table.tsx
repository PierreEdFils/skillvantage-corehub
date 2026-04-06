import Badge from "@/components/ui/badge";
import ProgressBar from "@/components/ui/progress-bar";
import Card from "@/components/ui/card";

interface TeamMemberRow {
  name: string;
  department: string;
  progress: number;
  status: string;
  lastActive?: string;
}

export default function TeamTable({
  title = "Team Progress",
  description = "Workforce activity in a lightweight demo table",
  team
}: {
  title?: string;
  description?: string;
  team: TeamMemberRow[];
}) {
  return (
    <Card className="border-brand-border">
      <h3 className="text-xl font-bold text-brand-navy">{title}</h3>
      <p className="mt-2 text-sm text-brand-muted">
        {description}
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr className="border-b border-brand-border text-xs uppercase tracking-[0.18em] text-gray-400">
              <th className="pb-3 font-semibold">Name</th>
              <th className="pb-3 font-semibold">Department</th>
              <th className="pb-3 font-semibold">Progress</th>
              <th className="pb-3 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {team.map((member) => (
              <tr key={member.name} className="border-b border-gray-100 last:border-b-0">
                <td className="py-4 pr-4 font-semibold text-brand-navy">{member.name}</td>
                <td className="py-4 pr-4 text-sm text-brand-muted">{member.department}</td>
                <td className="py-4 pr-4">
                  <div className="w-32 space-y-2">
                    <div className="text-xs font-semibold text-gray-500">{member.progress}%</div>
                    <ProgressBar
                      value={member.progress}
                      color={
                        member.progress >= 80
                          ? "emerald"
                          : member.progress >= 55
                          ? "blue"
                          : "amber"
                      }
                    />
                  </div>
                </td>
                <td className="py-4">
                  <Badge
                    variant={
                      member.status === "On Track"
                        ? "success"
                        : member.status === "Needs Support"
                        ? "warning"
                        : "danger"
                    }
                  >
                    {member.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
