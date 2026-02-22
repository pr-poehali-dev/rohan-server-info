import { useState } from "react";
import Icon from "@/components/ui/icon";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navItems = [
  { id: "home", label: "Главная" },
  { id: "servers", label: "Серверы" },
  { id: "shop", label: "Магазин" },
  { id: "forum", label: "Форум" },
  { id: "cabinet", label: "Кабинет" },
];

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(13, 10, 5, 0.92)",
        borderBottom: "1px solid rgba(201, 168, 76, 0.2)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-3 group"
          >
            <div
              className="w-9 h-9 rounded flex items-center justify-center text-lg"
              style={{
                background: "linear-gradient(135deg, #C9A84C, #8B6914)",
                boxShadow: "0 0 12px rgba(201,168,76,0.3)",
              }}
            >
              ⚔️
            </div>
            <span
              className="font-cinzel font-bold text-lg tracking-wider"
              style={{ color: "#C9A84C" }}
            >
              РОХАН
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`nav-link font-cinzel text-xs tracking-widest uppercase transition-all duration-200 ${
                  currentPage === item.id ? "active" : ""
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div
              className="flex items-center gap-1.5 px-3 py-1.5 rounded"
              style={{
                background: "rgba(201, 168, 76, 0.1)",
                border: "1px solid rgba(201, 168, 76, 0.2)",
              }}
            >
              <span style={{ color: "#C9A84C", fontSize: "14px" }}>🪙</span>
              <span
                className="font-cinzel text-xs font-semibold"
                style={{ color: "#C9A84C" }}
              >
                0 медянников
              </span>
            </div>
            <button
              onClick={() => onNavigate("cabinet")}
              className="btn-gold text-xs"
            >
              Войти
            </button>
          </div>

          <button
            className="md:hidden p-2"
            style={{ color: "#C9A84C" }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Icon name={mobileOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="md:hidden"
          style={{ borderTop: "1px solid rgba(201, 168, 76, 0.15)" }}
        >
          <div className="px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileOpen(false);
                }}
                className={`nav-link font-cinzel text-xs tracking-widest uppercase text-left py-2 ${
                  currentPage === item.id ? "active" : ""
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
