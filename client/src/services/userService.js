import {
    doc,
    getDoc,
    setDoc,
    updateDoc,
    increment,
    serverTimestamp,
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
  
      createdAt: serverTimestamp(),
      lastActiveDate: null,
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
  
  // Update user's daily activity and streak
  export async function updateStreak(uid) {
    if (!uid) {
      throw new Error("User UID is required");
    }
  
    const userRef = getUserRef(uid);
    const snapshot = await getDoc(userRef);
  
    if (!snapshot.exists()) {
      throw new Error("User profile not found");
    }
  
    const data = snapshot.data();
  
    const today = new Date().toISOString().split("T")[0];
  
    // If user already completed an activity today,
    // don't increase the streak again.
    if (data.lastActiveDate === today) {
      return data.streak || 0;
    }
  
    const newStreak = (data.streak || 0) + 1;
  
    await updateDoc(userRef, {
      streak: newStreak,
      lastActiveDate: today,
    });
  
    return newStreak;
  }