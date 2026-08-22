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
  
  import {
    auth,
    googleProvider,
  } from "../firebase";
  
  
  const AuthContext = createContext(null);
  
  
  export function AuthProvider({ children }) {
  
    const [user, setUser] = useState(null);
  
    const [loading, setLoading] = useState(true);
  
  
    // Listen for Firebase authentication changes
  
    useEffect(() => {
  
      const unsubscribe = onAuthStateChanged(
        auth,
        (currentUser) => {
  
          setUser(currentUser);
  
          setLoading(false);
  
        }
      );
  
  
      return () => unsubscribe();
  
    }, []);
  
  
    // Google login
  
    const loginWithGoogle = async () => {
  
      const result = await signInWithPopup(
        auth,
        googleProvider
      );
  
      return result.user;
  
    };
  
  
    // Logout
  
    const logout = async () => {
  
      await signOut(auth);
  
    };
  
  
    return (
      <AuthContext.Provider
        value={{
          user,
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
  
    return useContext(AuthContext);
  
  }