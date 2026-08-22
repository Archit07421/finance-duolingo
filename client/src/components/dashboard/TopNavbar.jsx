import { useState } from "react";

import {
  Flame,
  Menu,
  Sparkles,
  User,
  LogOut,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";


export default function TopNavbar({ user, onMenuClick }) {

  const [showProfile, setShowProfile] = useState(false);

  const navigate = useNavigate();

  const { logout } = useAuth();


  // First letter fallback

  const initials =
    user?.name?.charAt(0)?.toUpperCase() || "U";


  const handleLogout = async () => {

    try {

      await logout();

      navigate("/login", {
        replace: true,
      });

    } catch (error) {

      console.error(
        "Logout failed:",
        error
      );

    }

  };


  const handleProfile = () => {

    setShowProfile(false);

    navigate("/profile");

  };


  return (

    <header
      className="
        relative
        flex
        h-14
        shrink-0
        items-center
        justify-between
        border-b
        border-slate-800
        bg-[#050810]
        px-4
        lg:px-6
      "
    >

      {/* Mobile menu button */}

      <button
        type="button"
        onClick={onMenuClick}
        className="
          rounded-md
          p-2
          text-slate-400
          hover:bg-slate-800
          hover:text-white
          lg:hidden
        "
        aria-label="Open menu"
      >

        <Menu className="h-5 w-5" />

      </button>


      {/* Desktop spacer */}

      <div className="hidden lg:block" />


      {/* Right side */}

      <div className="flex items-center gap-3 sm:gap-4">


        {/* XP */}

        <div className="
          flex
          items-center
          gap-1.5
          text-sm
          text-slate-300
        ">

          <Sparkles className="h-4 w-4 text-blue-400" />

          <span className="font-medium">
            {user?.xp?.toLocaleString() || 0}
          </span>

          <span className="
            hidden
            text-slate-500
            sm:inline
          ">
            XP
          </span>

        </div>


        {/* Streak */}

        <div className="
          flex
          items-center
          gap-1.5
          text-sm
          text-slate-300
        ">

          <Flame className="h-4 w-4 text-orange-400" />

          <span className="font-medium">
            {user?.streak || 0}
          </span>

          <span className="
            hidden
            text-slate-500
            sm:inline
          ">
            streak
          </span>

        </div>


        {/* Profile button */}

        <div className="relative">

          <button
            type="button"
            onClick={() =>
              setShowProfile((prev) => !prev)
            }
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              overflow-hidden
              rounded-full
              bg-slate-700
              text-xs
              font-semibold
              text-white
              ring-1
              ring-slate-700
              transition
              hover:ring-blue-400
            "
            title={user?.name || "Profile"}
            aria-label="Open profile menu"
          >

            {user?.photoURL ? (

              <img
                src={user.photoURL}
                alt={user.name || "Profile"}
                className="
                  h-full
                  w-full
                  object-cover
                "
              />

            ) : (

              initials

            )}

          </button>


          {/* Profile dropdown */}

          {showProfile && (

            <div className="
              absolute
              right-0
              top-11
              z-50
              w-64
              overflow-hidden
              rounded-xl
              border
              border-slate-800
              bg-[#0b1220]
              shadow-2xl
            ">


              {/* User information */}

              <div className="
                border-b
                border-slate-800
                p-4
              ">

                <div className="
                  flex
                  items-center
                  gap-3
                ">

                  {/* Profile image */}

                  <div className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-full
                    bg-slate-700
                    text-sm
                    font-semibold
                  ">

                    {user?.photoURL ? (

                      <img
                        src={user.photoURL}
                        alt={user.name || "Profile"}
                        className="
                          h-full
                          w-full
                          object-cover
                        "
                      />

                    ) : (

                      initials

                    )}

                  </div>


                  {/* Name + email */}

                  <div className="min-w-0">

                    <p className="
                      truncate
                      text-sm
                      font-semibold
                      text-white
                    ">
                      {user?.name || "Investor"}
                    </p>

                    <p className="
                      truncate
                      text-xs
                      text-slate-400
                    ">
                      {user?.email || ""}
                    </p>

                  </div>

                </div>

              </div>


              {/* Profile button */}

              <button
                type="button"
                onClick={handleProfile}
                className="
                  flex
                  w-full
                  items-center
                  gap-3
                  px-4
                  py-3
                  text-sm
                  text-slate-300
                  transition
                  hover:bg-slate-800
                  hover:text-white
                "
              >

                <User className="h-4 w-4" />

                <span>
                  Profile
                </span>

              </button>


              {/* Logout button */}

              <button
                type="button"
                onClick={handleLogout}
                className="
                  flex
                  w-full
                  items-center
                  gap-3
                  border-t
                  border-slate-800
                  px-4
                  py-3
                  text-sm
                  text-red-400
                  transition
                  hover:bg-red-500/10
                "
              >

                <LogOut className="h-4 w-4" />

                <span>
                  Log out
                </span>

              </button>

            </div>

          )}

        </div>

      </div>

    </header>

  );

}