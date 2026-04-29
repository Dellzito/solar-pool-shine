import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNinjas } from "@/hooks/useFirestore";
import { Search, Trophy, Swords, Activity } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

export default function Ranking() {
  const { ninjas } = useNinjas();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const sorted = useMemo(() => {
    return [...ninjas]
      .sort((a, b) => (b.rankPoints || 0) - (a.rankPoints || 0))
      .filter((n) => (n.nick ?? n.id).toLowerCase().includes(query.toLowerCase()));
  }, [ninjas, query]);

  const max = sorted[0]?.rankPoints || 1;

  return (
    <div className="space-y-5">
      {/* Toolbar */}
      <Card className="border-border/60 bg-card-gradient shadow-tactical">
        <CardContent className="flex flex-col gap-3 p-4 md:flex-row md:items-center md:justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar ninja..."
              className="pl-9"
            />
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Badge variant="outline" className="border-primary/40 text-primary">
              {sorted.length} membros
            </Badge>
            <Badge variant="outline" className="border-success/40 text-success">
              {sorted.filter((n) => n.isActive).length} ativos
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sorted.map((n, i) => {
          const pct = ((n.rankPoints || 0) / max) * 100;
          const rank = i + 1;
          const initials = (n.nick ?? n.id).slice(0, 2).toUpperCase();
          return (
            <button
              key={n.id}
              onClick={() => navigate(`/perfil?id=${n.id}`)}
              className="group text-left animate-scale-in"
            >
              <Card
                className={cn(
                  "relative overflow-hidden border-border/60 bg-card-gradient shadow-tactical transition-all",
                  "hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-glow-red",
                )}
              >
                {/* Faixa de posição */}
                <div
                  className={cn(
                    "absolute right-0 top-0 flex h-8 w-12 items-center justify-center rounded-bl-lg text-xs font-black",
                    rank === 1 && "bg-leaf-gradient text-accent-foreground",
                    rank === 2 && "bg-konoha-gradient text-primary-foreground",
                    rank === 3 && "bg-secondary text-foreground",
                    rank > 3 && "bg-muted text-muted-foreground",
                  )}
                >
                  #{rank}
                </div>

                <CardContent className="p-5">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-14 w-14 border-2 border-border ring-2 ring-background">
                      <AvatarImage src={n.avatarUrl} alt={n.nick} />
                      <AvatarFallback className="bg-konoha-gradient text-sm font-bold text-primary-foreground">
                        {initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <h3 className="truncate text-base font-bold">{n.nick ?? n.id}</h3>
                      <p className="truncate text-xs text-muted-foreground">{n.element ?? "—"}</p>
                      <Badge
                        variant="outline"
                        className={cn(
                          "mt-1 h-5 px-1.5 text-[10px] font-semibold",
                          n.isActive
                            ? "border-success/40 text-success"
                            : "border-muted-foreground/40 text-muted-foreground",
                        )}
                      >
                        <span
                          className={cn(
                            "mr-1 h-1.5 w-1.5 rounded-full",
                            n.isActive ? "bg-success" : "bg-muted-foreground",
                          )}
                        />
                        {n.isActive ? "Ativo" : "Inativo"}
                      </Badge>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Trophy className="h-3 w-3" /> Pontos
                      </span>
                      <span className="font-bold tabular-nums text-foreground">
                        {(n.rankPoints || 0).toLocaleString("pt-BR")}
                      </span>
                    </div>
                    <Progress value={pct} className="mt-1.5 h-1.5" />
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                    <div className="rounded-md bg-background/40 py-2">
                      <div className="flex items-center justify-center gap-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                        <Swords className="h-3 w-3" /> Miss.
                      </div>
                      <div className="text-sm font-bold tabular-nums">{n.missionsCompleted ?? 0}</div>
                    </div>
                    <div className="rounded-md bg-background/40 py-2">
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Kills</div>
                      <div className="text-sm font-bold tabular-nums text-accent">{n.kills ?? 0}</div>
                    </div>
                    <div className="rounded-md bg-background/40 py-2">
                      <div className="flex items-center justify-center gap-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                        <Activity className="h-3 w-3" /> Heals
                      </div>
                      <div className="text-sm font-bold tabular-nums text-success">{n.heals ?? 0}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </button>
          );
        })}
      </div>
    </div>
  );
}
