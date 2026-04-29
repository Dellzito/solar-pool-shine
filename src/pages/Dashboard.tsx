import { useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useNinjas, useReports } from "@/hooks/useFirestore";
import { Users, Swords, Trophy, AlertTriangle, Crown, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface KpiCardProps {
  label: string;
  value: string | number;
  hint?: string;
  icon: React.ComponentType<{ className?: string }>;
  tone?: "default" | "accent" | "success" | "warning" | "primary";
}

function KpiCard({ label, value, hint, icon: Icon, tone = "default" }: KpiCardProps) {
  const tones: Record<string, string> = {
    default: "text-foreground",
    accent: "text-accent",
    success: "text-success",
    warning: "text-warning",
    primary: "text-primary",
  };
  const iconBg: Record<string, string> = {
    default: "bg-secondary",
    accent: "bg-accent/15 text-accent",
    success: "bg-success/15 text-success",
    warning: "bg-warning/15 text-warning",
    primary: "bg-primary/15 text-primary",
  };
  return (
    <Card className="group relative overflow-hidden border-border/60 bg-card-gradient shadow-tactical transition-all hover:border-accent/40 hover:shadow-glow-red">
      <CardContent className="p-5">
        <div className="flex items-start justify-between">
          <div className={cn("flex h-10 w-10 items-center justify-center rounded-lg", iconBg[tone])}>
            <Icon className="h-5 w-5" />
          </div>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
        <p className="mt-4 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
          {label}
        </p>
        <div className={cn("mt-1 text-3xl font-black tracking-tight md:text-4xl", tones[tone])}>
          {value}
        </div>
        {hint && <p className="mt-1 text-xs text-muted-foreground">{hint}</p>}
      </CardContent>
    </Card>
  );
}

export default function Dashboard() {
  const { ninjas } = useNinjas();
  const { reports } = useReports();

  const stats = useMemo(() => {
    const active = ninjas.filter((n) => n.isActive).length;
    const totalPoints = ninjas.reduce((s, n) => s + (n.rankPoints || 0), 0);
    const totalMissions = reports.length;
    const top = [...ninjas].sort((a, b) => (b.rankPoints || 0) - (a.rankPoints || 0))[0];
    const pending = reports.filter((r) => r.isEvent).length; // demo: usando event como "pendência" no mock
    return { active, totalPoints, totalMissions, top, pending };
  }, [ninjas, reports]);

  const topFive = useMemo(
    () => [...ninjas].sort((a, b) => (b.rankPoints || 0) - (a.rankPoints || 0)).slice(0, 5),
    [ninjas],
  );
  const maxPoints = topFive[0]?.rankPoints || 1;

  return (
    <div className="space-y-6">
      {/* KPIs */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <KpiCard label="Membros Ativos" value={stats.active} hint={`${ninjas.length} no total`} icon={Users} tone="primary" />
        <KpiCard label="Missões Totais" value={stats.totalMissions.toLocaleString("pt-BR")} icon={Swords} tone="accent" />
        <KpiCard label="Pontos Totais" value={stats.totalPoints.toLocaleString("pt-BR")} icon={Trophy} tone="success" />
        <KpiCard label="Pendências" value={stats.pending} hint="aguardando auditoria" icon={AlertTriangle} tone="warning" />
        <KpiCard label="Top Jogador" value={stats.top?.nick ?? "—"} hint={`${(stats.top?.rankPoints ?? 0).toLocaleString("pt-BR")} pts`} icon={Crown} tone="accent" />
      </section>

      {/* Top 5 + Atividade */}
      <section className="grid gap-4 lg:grid-cols-3">
        <Card className="border-border/60 bg-card-gradient shadow-tactical lg:col-span-2 leaf-watermark">
          <CardContent className="p-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-base font-bold">Top 5 do Quartel</h2>
                <p className="text-xs text-muted-foreground">Elite operacional do mês</p>
              </div>
              <Link to="/rank" className="text-xs font-semibold text-primary hover:underline">
                Ver ranking completo →
              </Link>
            </div>
            <div className="space-y-3">
              {topFive.map((n, i) => (
                <div key={n.id} className="flex items-center gap-3">
                  <div
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-black",
                      i === 0 && "bg-leaf-gradient text-accent-foreground shadow-glow-red",
                      i === 1 && "bg-secondary text-foreground",
                      i === 2 && "bg-secondary text-foreground",
                      i > 2 && "bg-muted text-muted-foreground",
                    )}
                  >
                    {i + 1}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="truncate text-sm font-semibold">{n.nick}</span>
                      <span className="text-sm font-bold tabular-nums text-foreground">
                        {(n.rankPoints || 0).toLocaleString("pt-BR")}
                      </span>
                    </div>
                    <Progress
                      value={((n.rankPoints || 0) / maxPoints) * 100}
                      className="mt-1.5 h-1.5"
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/60 bg-card-gradient shadow-tactical">
          <CardContent className="p-5">
            <h2 className="text-base font-bold">Últimas Missões</h2>
            <p className="text-xs text-muted-foreground">Atividade recente da divisão</p>
            <div className="mt-4 space-y-3">
              {reports.slice(0, 5).map((r) => (
                <div
                  key={r.reportId}
                  className="flex items-center justify-between rounded-lg border border-border/50 bg-background/40 px-3 py-2.5"
                >
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold">{r.targets[0]?.name ?? "Alvo"}</p>
                    <p className="text-[11px] text-muted-foreground">
                      {new Date(r.createdAt).toLocaleDateString("pt-BR")} · {r.reportId}
                    </p>
                  </div>
                  <Badge
                    variant="outline"
                    className={cn(
                      "shrink-0 font-bold tabular-nums",
                      r.isEvent ? "border-warning/40 text-warning" : "border-success/40 text-success",
                    )}
                  >
                    +{r.totalPoints}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
