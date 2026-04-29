// Firebase bootstrap. Substitua os valores pelo seu firebaseConfig real
// (Console Firebase → Configurações do projeto → Seus apps → Web).
// Enquanto os campos estiverem vazios, o app usa mocks automaticamente.

import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getFirestore, type Firestore } from "firebase/firestore";
import { getAuth, type Auth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

export const COLLECTIONS = {
  NINJAS: "ninjas",
  REPORTS: "reports",
  EVENT_REPORTS: "event_reports",
  PENDING_REPORTS: "pending_reports",
} as const;

export const isFirebaseConfigured = Boolean(firebaseConfig.apiKey && firebaseConfig.projectId);

let app: FirebaseApp | null = null;
let db: Firestore | null = null;
let auth: Auth | null = null;

if (isFirebaseConfigured) {
  app = getApps()[0] ?? initializeApp(firebaseConfig);
  db = getFirestore(app);
  auth = getAuth(app);
}

export { app, db, auth };
