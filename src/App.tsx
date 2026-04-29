import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import Dashboard from "@/pages/Dashboard";
import Ranking from "@/pages/Ranking";
import Placeholder from "@/pages/Placeholder";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/rank" element={<Ranking />} />
            <Route path="/evento" element={<Placeholder title="Painel de Evento" />} />
            <Route path="/historico" element={<Placeholder title="Histórico de Missões" />} />
            <Route path="/alvos" element={<Placeholder title="Alvos Eliminados" />} />
            <Route path="/perfil" element={<Placeholder title="Perfil do Membro" />} />
            <Route path="/missao" element={<Placeholder title="Registrar Missão" />} />
            <Route path="/admin" element={<Placeholder title="Administração" />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
