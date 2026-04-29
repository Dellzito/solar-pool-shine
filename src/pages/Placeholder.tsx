import { Card, CardContent } from "@/components/ui/card";
import { Construction } from "lucide-react";

export default function Placeholder({ title }: { title: string }) {
  return (
    <Card className="border-dashed border-border/60 bg-card-gradient shadow-tactical">
      <CardContent className="flex flex-col items-center justify-center gap-3 p-12 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-muted-foreground">
          <Construction className="h-6 w-6" />
        </div>
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="max-w-sm text-sm text-muted-foreground">
          Esta seção será migrada na próxima fase. A lógica original do sistema legado
          (Firebase + cálculos de pontos) será preservada integralmente.
        </p>
      </CardContent>
    </Card>
  );
}
