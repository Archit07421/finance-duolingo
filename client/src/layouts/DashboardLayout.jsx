import Sidebar from "../components/dashboard/Sidebar";
import TopNavbar from "../components/dashboard/TopNavbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-black text-white flex">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <TopNavbar
          user={{
            name: "Archit",
            xp: 1250,
            streak: 7,
          }}
        />

        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}