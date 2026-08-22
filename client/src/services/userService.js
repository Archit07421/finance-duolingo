import {
    doc,
    getDoc,
    setDoc,
    updateDoc,
    increment,
  } from "firebase/firestore";
  
  import { db } from "../firebase";
  
  
  // Get a reference to the current user's document
  function getUserRef(uid) {
    return doc(db, "users", uid);
  }
  
  
  // Get user profile from Firestore
  export async function getUserProfile(uid) {
  
    if (!uid) {
      throw new Error("User UID is required");
    }
  
    const userRef = getUserRef(uid);
  
    const snapshot = await getDoc(userRef);
  
    if (!snapshot.exists()) {
      return null;
    }
  
    return snapshot.data();
  }
  
  
  // Create user profile if it doesn't exist
  export async function createUserProfile(user) {
  
    if (!user) {
      throw new Error("Firebase user is required");
    }
  
    const userRef = getUserRef(user.uid);
  
    const snapshot = await getDoc(userRef);
  
    // User already exists
    if (snapshot.exists()) {
      return snapshot.data();
    }
  
    // First-time user
    const profile = {
  
      uid: user.uid,
  
      name: user.displayName || "Investor",
  
      email: user.email || "",
  
      photoURL: user.photoURL || "",
  
      xp: 0,
  
      streak: 0,
  
      completedLessons: [],
  
      quizScores: {},
  
      achievements: [],
  
      createdAt: new Date(),
  
    };
  
    await setDoc(userRef, profile);
  
    return profile;
  }
  
  
  // Add XP to the user
  export async function addXP(uid, amount) {
  
    if (!uid) {
      throw new Error("User UID is required");
    }
  
    const userRef = getUserRef(uid);
  
    await updateDoc(userRef, {
      xp: increment(amount),
    });
  }