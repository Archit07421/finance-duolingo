import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, TrendingUp, X } from "lucide-react";

import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";

export default function LandingNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);

      await signInWithPopup(auth, googleProvider);

      navigate("/dashboard");
    } catch (error) {
      console.error("Google sign-in error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <nav className="absolute left-1/2 top-5 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2">
      
      {/* Main glass navbar */}
      <div
        className="
          rounded-2xl
          border border-white/10
          bg-black/25
          px-4
          py-3
          shadow-2xl
          backdrop-blur-xl
          backdrop-saturate-150
          sm:px-5
        "
      >

        <div className="flex items-center justify-between">

          {/* =====================================================
              LOGO
          ===================================================== */}

          <Link
            to="/"
            className="flex items-center gap-2.5"
          >
            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-xl
                bg-blue-600
                shadow-lg
                shadow-blue-600/20
              "
            >
              <TrendingUp className="h-5 w-5 text-white" />
            </div>

            <span className="text-lg font-bold tracking-tight text-white">
              Invest
              <span className="text-blue-400">
                Quest
              </span>
            </span>
          </Link>


          {/* =====================================================
              DESKTOP NAVIGATION
          ===================================================== */}

          <div className="hidden items-center gap-8 md:flex">

            <a
              href="#features"
              className="
                text-sm
                font-medium
                text-slate-300
                transition-colors
                hover:text-white
              "
            >
              Features
            </a>

            <a
              href="#how-it-works"
              className="
                text-sm
                font-medium
                text-slate-300
                transition-colors
                hover:text-white
              "
            >
              How it works
            </a>

            <a
              href="#why-investquest"
              className="
                text-sm
                font-medium
                text-slate-300
                transition-colors
                hover:text-white
              "
            >
              Why InvestQuest
            </a>

          </div>


          {/* =====================================================
              GOOGLE SIGN IN
          ===================================================== */}

          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="
              hidden
              items-center
              gap-2
              rounded-xl
              bg-white
              px-4
              py-2.5
              text-sm
              font-semibold
              text-slate-900
              shadow-lg
              transition-all
              hover:bg-slate-100
              hover:shadow-xl
              disabled:cursor-not-allowed
              disabled:opacity-60
              sm:flex
            "
          >

            {/* Google G */}

            <span className="text-base font-bold">
              G
            </span>

            {loading
              ? "Signing in..."
              : "Continue with Google"}

          </button>


          {/* =====================================================
              MOBILE MENU BUTTON
          ===================================================== */}

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="
              rounded-lg
              p-2
              text-slate-300
              transition
              hover:bg-white/10
              hover:text-white
              sm:hidden
            "
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>

        </div>


        {/* =====================================================
            MOBILE MENU
        ===================================================== */}

        {mobileOpen && (
          <div
            className="
              mt-4
              border-t
              border-white/10
              pt-4
              sm:hidden
            "
          >

            <div className="flex flex-col gap-2">

              <a
                href="#features"
                onClick={() => setMobileOpen(false)}
                className="
                  rounded-lg
                  px-3
                  py-2.5
                  text-sm
                  text-slate-300
                  hover:bg-white/5
                  hover:text-white
                "
              >
                Features
              </a>

              <a
                href="#how-it-works"
                onClick={() => setMobileOpen(false)}
                className="
                  rounded-lg
                  px-3
                  py-2.5
                  text-sm
                  text-slate-300
                  hover:bg-white/5
                  hover:text-white
                "
              >
                How it works
              </a>

              <a
                href="#why-investquest"
                onClick={() => setMobileOpen(false)}
                className="
                  rounded-lg
                  px-3
                  py-2.5
                  text-sm
                  text-slate-300
                  hover:bg-white/5
                  hover:text-white
                "
              >
                Why InvestQuest
              </a>


              {/* Mobile Google button */}

              <button
                type="button"
                onClick={handleGoogleSignIn}
                disabled={loading}
                className="
                  mt-2
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-white
                  px-4
                  py-3
                  text-sm
                  font-semibold
                  text-slate-900
                  disabled:opacity-60
                "
              >
                <span className="font-bold">
                  G
                </span>

                {loading
                  ? "Signing in..."
                  : "Continue with Google"}
              </button>

            </div>

          </div>
        )}

      </div>

    </nav>
  );
}