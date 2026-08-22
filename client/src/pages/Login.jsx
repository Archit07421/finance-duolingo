import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";


export default function Login() {

  const navigate = useNavigate();

  const {
    loginWithGoogle,
  } = useAuth();


  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");


  const handleGoogleLogin = async () => {

    try {

      setLoading(true);

      setError("");


      await loginWithGoogle();


      navigate("/dashboard");

    } catch (error) {

      console.error(
        "Google login error:",
        error
      );

      setError(
        "Unable to sign in with Google. Please try again."
      );

    } finally {

      setLoading(false);

    }

  };


  return (

    <div className="
      min-h-screen
      bg-[#080d18]
      text-white
      flex
      items-center
      justify-center
      px-4
    ">

      <div className="
        w-full
        max-w-md
        rounded-3xl
        border
        border-slate-800
        bg-[#0d1424]
        p-8
        sm:p-10
      ">


        {/* Logo */}

        <div className="text-center">

          <div className="
            mx-auto
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-blue-500/10
            text-2xl
          ">
            📈
          </div>


          <h1 className="
            mt-5
            text-3xl
            font-bold
          ">
            Welcome to InvestQuest
          </h1>


          <p className="
            mt-2
            text-sm
            text-slate-400
          ">
            Learn finance. Build confidence.
          </p>

        </div>


        {/* Google login */}

        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="
            mt-8
            flex
            w-full
            items-center
            justify-center
            gap-3
            rounded-xl
            bg-white
            px-5
            py-3.5
            text-sm
            font-semibold
            text-slate-900
            transition
            hover:bg-slate-100
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >

          <span className="text-lg">
            G
          </span>

          {loading
            ? "Signing in..."
            : "Continue with Google"}

        </button>


        {error && (

          <p className="
            mt-4
            text-center
            text-sm
            text-red-400
          ">
            {error}
          </p>

        )}


        <p className="
          mt-6
          text-center
          text-xs
          leading-5
          text-slate-500
        ">
          Sign in to save your learning
          progress and achievements.
        </p>

      </div>

    </div>

  );
}