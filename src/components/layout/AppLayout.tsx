import { Outlet, useLocation } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Badge } from "@/components/ui/badge";
import { isFirebaseConfigured } from "@/lib/firebase";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const routeTitles: Record<string, { title: string; subtitle: string }> = {
  "/": { title: "QG · Quartel General", subtitle: "Visão tática consolidada das Forças Especiais" },
  "/rank": { title: "Rank Geral", subtitle: "Classificação dos ninjas por desempenho" },
  "/evento": { title: "Evento Ativo", subtitle: "Pontuações e missões do evento corrente" },
  "/historico": { title: "Histórico de Missões", subtitle: "Relatórios completos com filtros e busca" },
  "/alvos": { title: "Alvos Eliminados", subtitle: "Registro de alvos abatidos pela divisão" },
  "/perfil": { title: "Perfil do Membro", subtitle: "Dossiê tático individual" },
  "/missao": { title: "Registrar Missão", subtitle: "Novo relatório de caçada" },
  "/admin": { title: "Administração", subtitle: "Acesso restrito ao alto comando" },
};

export default function AppLayout() {
  const { pathname } = useLocation();
  const meta = routeTitles[pathname] ?? { title: "QG", subtitle: "" };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-tactical">
        <AppSidebar />

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-4 border-b border-border/60 bg-background/80 px-4 backdrop-blur-md md:px-6">
            <div className="flex min-w-0 items-center gap-3">
              <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
              <div className="hidden h-8 w-px bg-border md:block" />
              <div className="min-w-0">
                <h1 className="truncate text-sm font-bold leading-none md:text-base">
                  {meta.title}
                </h1>
                <p className="mt-1 hidden truncate text-xs text-muted-foreground md:block">
                  {meta.subtitle}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {!isFirebaseConfigured && (
                <Badge variant="outline" className="border-warning/50 text-warning">
                  Modo Demo
                </Badge>
              )}
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-4 w-4" />
                <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-accent" />
              </Button>
              <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-2.5 py-1.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-konoha-gradient text-xs font-bold text-primary-foreground">
                  HK
                </div>
                <div className="hidden flex-col leading-tight md:flex">
                  <span className="text-xs font-semibold">Hokage</span>
                  <span className="text-[10px] text-muted-foreground">Comando</span>
                </div>
              </div>
            </div>
          </header>

          <main className="flex-1 animate-fade-in p-4 md:p-6 lg:p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
