import { NavLink, useLocation } from "react-router-dom";
import {
  Home,
  Trophy,
  Sparkles,
  ScrollText,
  Target,
  UserCircle2,
  ClipboardEdit,
  Shield,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

const mainItems = [
  { title: "QG", url: "/", icon: Home },
  { title: "Rank Geral", url: "/rank", icon: Trophy },
  { title: "Evento", url: "/evento", icon: Sparkles },
  { title: "Histórico", url: "/historico", icon: ScrollText },
  { title: "Alvos Eliminados", url: "/alvos", icon: Target },
  { title: "Perfil do Membro", url: "/perfil", icon: UserCircle2 },
];

const opsItems = [
  { title: "Registrar Missão", url: "/missao", icon: ClipboardEdit },
  { title: "Administração", url: "/admin", icon: Shield },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const { pathname } = useLocation();
  const isActive = (url: string) => (url === "/" ? pathname === "/" : pathname.startsWith(url));

  const renderItem = (item: { title: string; url: string; icon: typeof Home }) => {
    const active = isActive(item.url);
    return (
      <SidebarMenuItem key={item.title}>
        <SidebarMenuButton
          asChild
          isActive={active}
          tooltip={item.title}
          className={cn(
            "group relative h-10 transition-colors",
            active &&
              "bg-sidebar-accent text-sidebar-accent-foreground before:absolute before:left-0 before:top-1.5 before:h-7 before:w-1 before:rounded-r-full before:bg-accent",
          )}
        >
          <NavLink to={item.url} end={item.url === "/"}>
            <item.icon className="h-4 w-4 shrink-0" />
            <span>{item.title}</span>
          </NavLink>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  };

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarHeader className="border-b border-sidebar-border">
        <div className={cn("flex items-center gap-3 px-2 py-3", collapsed && "justify-center px-0")}>
          <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-leaf-gradient shadow-glow-red">
            <span className="text-base font-black text-accent-foreground">忍</span>
          </div>
          {!collapsed && (
            <div className="flex flex-col leading-tight">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                QG
              </span>
              <span className="text-sm font-bold text-sidebar-accent-foreground">
                Forças Especiais
              </span>
              <span className="text-[10px] uppercase tracking-wider text-accent">da Leaf</span>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          {!collapsed && (
            <SidebarGroupLabel className="text-[10px] uppercase tracking-widest">
              Operações
            </SidebarGroupLabel>
          )}
          <SidebarGroupContent>
            <SidebarMenu>{mainItems.map(renderItem)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          {!collapsed && (
            <SidebarGroupLabel className="text-[10px] uppercase tracking-widest">
              Comando
            </SidebarGroupLabel>
          )}
          <SidebarGroupContent>
            <SidebarMenu>{opsItems.map(renderItem)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border">
        <div className={cn("px-2 py-2 text-[10px] text-muted-foreground", collapsed && "text-center")}>
          {collapsed ? "v2" : "Vila Oculta da Folha · v2.0"}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
