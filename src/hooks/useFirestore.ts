import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db, isFirebaseConfigured, COLLECTIONS } from "@/lib/firebase";
import { mockNinjas, mockReports } from "@/lib/mockData";
import type { Ninja, Report } from "@/types/domain";

export function useNinjas() {
  const [ninjas, setNinjas] = useState<Ninja[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isFirebaseConfigured || !db) {
      setNinjas(mockNinjas);
      setLoading(false);
      return;
    }
    const unsub = onSnapshot(collection(db, COLLECTIONS.NINJAS), (snap) => {
      setNinjas(snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Ninja, "id">) })));
      setLoading(false);
    });
    return () => unsub();
  }, []);

  return { ninjas, loading, isMock: !isFirebaseConfigured };
}

export function useReports() {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isFirebaseConfigured || !db) {
      setReports(mockReports);
      setLoading(false);
      return;
    }
    const unsub = onSnapshot(collection(db, COLLECTIONS.REPORTS), (snap) => {
      setReports(snap.docs.map((d) => d.data() as Report));
      setLoading(false);
    });
    return () => unsub();
  }, []);

  return { reports, loading, isMock: !isFirebaseConfigured };
}
