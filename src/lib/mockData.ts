import type { Ninja, Report } from "@/types/domain";

// Mocks temáticos para desenvolvimento até o Firebase real ser conectado.
export const mockNinjas: Ninja[] = [
  { id: "kakashi", nick: "Kakashi", element: "Raio / Fogo", isActive: true, rankPoints: 4820, missionsCompleted: 312, kills: 248, assists: 41, heals: 23, discordId: "kakashi#0001" },
  { id: "itachi", nick: "Itachi", element: "Fogo / Genjutsu", isActive: true, rankPoints: 4710, missionsCompleted: 298, kills: 251, assists: 32, heals: 15 },
  { id: "shisui", nick: "Shisui", element: "Fogo / Vento", isActive: true, rankPoints: 4205, missionsCompleted: 270, kills: 210, assists: 45, heals: 15 },
  { id: "yamato", nick: "Yamato", element: "Madeira", isActive: true, rankPoints: 3890, missionsCompleted: 245, kills: 180, assists: 40, heals: 25 },
  { id: "anko", nick: "Anko", element: "Veneno / Selo", isActive: true, rankPoints: 3550, missionsCompleted: 228, kills: 175, assists: 30, heals: 23 },
  { id: "tenzo", nick: "Tenzo", element: "Madeira / Água", isActive: true, rankPoints: 3320, missionsCompleted: 210, kills: 160, assists: 35, heals: 15 },
  { id: "iruka", nick: "Iruka", element: "Suporte", isActive: true, rankPoints: 2980, missionsCompleted: 195, kills: 90, assists: 60, heals: 45 },
  { id: "genma", nick: "Genma", element: "Vento", isActive: true, rankPoints: 2740, missionsCompleted: 180, kills: 130, assists: 30, heals: 20 },
  { id: "raido", nick: "Raido", element: "Raio", isActive: false, rankPoints: 2410, missionsCompleted: 165, kills: 115, assists: 30, heals: 20 },
  { id: "hayate", nick: "Hayate", element: "Vento / Lâmina", isActive: true, rankPoints: 2150, missionsCompleted: 148, kills: 110, assists: 25, heals: 13 },
];

export const mockReports: Report[] = Array.from({ length: 24 }).map((_, i) => ({
  reportId: `RPT-${String(1000 + i)}`,
  createdAt: Date.now() - i * 86_400_000,
  killerIds: [mockNinjas[i % mockNinjas.length].id],
  assistIds: [mockNinjas[(i + 1) % mockNinjas.length].id],
  healerIds: [mockNinjas[(i + 2) % mockNinjas.length].id],
  targets: [{ name: ["Kabuto", "Orochimaru", "Deidara", "Hidan", "Kakuzu"][i % 5], bt: 250 + (i % 4) * 50 }],
  totalPoints: 120 + (i % 7) * 25,
  isEvent: i % 5 === 0,
}));
