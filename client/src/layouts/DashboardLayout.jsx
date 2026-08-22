import Sidebar from "../components/dashboard/Sidebar";
import TopNavbar from "../components/dashboard/TopNavbar";

import { useAuth } from "../context/AuthContext";


export default function DashboardLayout({ children }) {

  const { user } = useAuth();


  const userData = {
    name: user?.displayName || "Investor",
    email: user?.email || "",
    photoURL: user?.photoURL || null,

    // Keep these hardcoded for now
    // We'll move them to Firestore later
    xp: 1250,
    streak: 7,
  };


  return (

    <div className="min-h-screen bg-black text-white flex">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <TopNavbar user={userData} />

        <main className="p-6">

          {children}

        </main>

      </div>

    </div>

  );

}