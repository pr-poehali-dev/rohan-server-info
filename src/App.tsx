import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import HomePage from "@/pages/HomePage";
import ServersPage from "@/pages/ServersPage";
import CabinetPage from "@/pages/CabinetPage";
import ShopPage from "@/pages/ShopPage";
import ForumPage from "@/pages/ForumPage";

const queryClient = new QueryClient();

type Page = "home" | "servers" | "cabinet" | "shop" | "forum";

const App = () => {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const navigate = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={navigate} />;
      case "servers":
        return <ServersPage onNavigate={navigate} />;
      case "cabinet":
        return <CabinetPage />;
      case "shop":
        return <ShopPage />;
      case "forum":
        return <ForumPage />;
      default:
        return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div style={{ background: "#0D0A05", minHeight: "100vh" }}>
          <Navbar currentPage={currentPage} onNavigate={navigate} />
          {renderPage()}
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
