// Tipos compartilhados do domínio
export interface Ninja {
  id: string;
  nick?: string;
  element?: string;            // maestrias (ex.: "Fogo / Raio")
  avatarUrl?: string;
  discordId?: string;
  isActive: boolean;
  rankPoints: number;
  missionsCompleted: number;
  eventPoints?: number;
  eventMissionsCompleted?: number;
  // estatísticas de combate (derivadas)
  kills?: number;
  assists?: number;
  heals?: number;
}

export interface MissionTarget {
  name: string;
  bt?: number;
}

export interface Report {
  reportId: string;
  createdAt: number;
  killerIds: string[];
  assistIds: string[];
  healerIds: string[];
  targets: MissionTarget[];
  totalPoints: number;
  isEvent?: boolean;
  notes?: string;
}
