import fs from "fs";
import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

const serviceAccount = JSON.parse(
  fs.readFileSync("/etc/secrets/serviceAccountKey.json", "utf8")
);

const app = initializeApp({
  credential: cert(serviceAccount),
});

export const auth = getAuth(app);