import {
    createContext,
    useContext,
    useEffect,
    useState,
  } from "react";
  
  import {
    onAuthStateChanged,
    signInWithPopup,
    signOut,
  } from "firebase/auth";
  
  import { auth, googleProvider } from "../firebase";
  
  import {
    createUserProfile,
    getUserProfile,
  } from "../services/userService";
  
  
  const AuthContext = createContext(null);
  
  
  export function AuthProvider({ children }) {
  
    const [user, setUser] = useState(null);
  
    const [profile, setProfile] = useState(null);
  
    const [loading, setLoading] = useState(true);
  
  
    useEffect(() => {
  
      const unsubscribe = onAuthStateChanged(
        auth,
        async (currentUser) => {
  
          try {
  
            setUser(currentUser);
  
  
            if (currentUser) {
  
              // Make sure the Firestore profile exists
              await createUserProfile(
                currentUser
              );
  
  
              // Get the Firestore profile
              const firestoreProfile =
                await getUserProfile(
                  currentUser.uid
                );
  
  
              setProfile(
                firestoreProfile
              );
  
            } else {
  
              setProfile(null);
  
            }
  
          } catch (error) {
  
            console.error(
              "Authentication error:",
              error
            );
  
            setProfile(null);
  
          } finally {
  
            setLoading(false);
  
          }
  
        }
      );
  
  
      return () => unsubscribe();
  
    }, []);

    const loginWithGoogle = async () => {
        const result = await signInWithPopup(auth, googleProvider);
        return result.user;
      };
  
  
    const logout = async () => {
  
      await signOut(auth);
  
      setUser(null);
  
      setProfile(null);
  
    };
  
  
    return (
  
        <AuthContext.Provider
        value={{
          user,
          profile,
          loading,
          loginWithGoogle,
          logout,
        }}
      >
  
        {children}
  
      </AuthContext.Provider>
  
    );
  
  }
  
  
  export function useAuth() {
  
    const context = useContext(
      AuthContext
    );
  
  
    if (!context) {
  
      throw new Error(
        "useAuth must be used inside AuthProvider"
      );
  
    }
  
  
    return context;
  
  }