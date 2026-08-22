import { Navigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";


export default function ProtectedRoute({
  children,
}) {

  const {
    user,
    loading,
  } = useAuth();


  // Firebase is checking authentication

  if (loading) {

    return (

      <div className="
        min-h-screen
        bg-[#080d18]
        text-white
        flex
        items-center
        justify-center
      ">

        <p className="text-slate-400">
          Loading...
        </p>

      </div>

    );

  }


  // User isn't logged in

  if (!user) {

    return (
      <Navigate
        to="/login"
        replace
      />
    );

  }


  // User is authenticated

  return children;

}