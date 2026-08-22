import Sidebar from "../components/dashboard/Sidebar";

import TopNavbar from "../components/dashboard/TopNavbar";

import { useAuth } from "../context/AuthContext";


export default function DashboardLayout({
  children,
}) {

  const {
    user,
    profile,
    loading,
  } = useAuth();


  if (loading) {

    return (

      <div className="
        flex
        min-h-screen
        items-center
        justify-center
        bg-black
        text-white
      ">

        Loading...

      </div>

    );

  }


  const userData = {

    name:
      profile?.name ||
      user?.displayName ||
      "Investor",

    email:
      profile?.email ||
      user?.email ||
      "",

    photoURL:
      profile?.photoURL ||
      user?.photoURL ||
      null,

    xp: profile?.xp || 0,

    streak: profile?.streak || 0,

  };


  return (

    <div className="
      flex
      min-h-screen
      bg-black
      text-white
    ">

      <Sidebar />

      <div className="
        flex
        flex-1
        flex-col
      ">

        <TopNavbar
          user={userData}
        />

        <main className="p-6">

          {children}

        </main>

      </div>

    </div>

  );

}