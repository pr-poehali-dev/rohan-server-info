import { useState } from "react";
import Icon from "@/components/ui/icon";

const mockCharacters = [
  {
    id: 1,
    name: "Эовин",
    class: "Всадница",
    level: 47,
    server: "Хельмова Падь",
    game: "Age of Conan",
    exp: 72,
    lastOnline: "2 часа назад",
    guild: "Белый всадник",
  },
  {
    id: 2,
    name: "Теоден",
    class: "Король-воин",
    level: 61,
    server: "Золотой Зал",
    game: "Lineage II",
    exp: 45,
    lastOnline: "вчера",
    guild: "Всадники Марки",
  },
];

type Tab = "characters" | "balance" | "login";

export default function CabinetPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("login");
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [regForm, setRegForm] = useState({ username: "", email: "", password: "" });
  const [isRegister, setIsRegister] = useState(false);
  const [balance] = useState(1250);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setActiveTab("characters");
  };

  if (!isLoggedIn) {
    return (
      <div
        className="min-h-screen pt-24 pb-20 flex items-center justify-center"
        style={{ background: "#0D0A05" }}
      >
        <div className="w-full max-w-md px-4">
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">⚔️</div>
            <h1
              className="font-cinzel text-3xl font-bold mb-2"
              style={{ color: "#E8D8B0" }}
            >
              {isRegister ? "Вступить в ряды" : "Войти в портал"}
            </h1>
            <p
              className="text-sm"
              style={{ color: "rgba(232,216,176,0.5)" }}
            >
              {isRegister
                ? "Создай аккаунт и начни путь воина"
                : "Добро пожаловать назад, воин"}
            </p>
          </div>

          <div className="card-dark rounded-xl p-8">
            <form onSubmit={handleLogin} className="flex flex-col gap-5">
              {isRegister && (
                <div>
                  <label
                    className="block text-xs font-cinzel mb-2 tracking-wider uppercase"
                    style={{ color: "rgba(201,168,76,0.8)" }}
                  >
                    Имя воина
                  </label>
                  <input
                    type="text"
                    placeholder="Ваш никнейм"
                    value={regForm.username}
                    onChange={(e) =>
                      setRegForm({ ...regForm, username: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded text-sm outline-none transition-all duration-200"
                    style={{
                      background: "rgba(201,168,76,0.05)",
                      border: "1px solid rgba(201,168,76,0.2)",
                      color: "#E8D8B0",
                    }}
                  />
                </div>
              )}
              <div>
                <label
                  className="block text-xs font-cinzel mb-2 tracking-wider uppercase"
                  style={{ color: "rgba(201,168,76,0.8)" }}
                >
                  Почта
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={loginForm.email}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded text-sm outline-none"
                  style={{
                    background: "rgba(201,168,76,0.05)",
                    border: "1px solid rgba(201,168,76,0.2)",
                    color: "#E8D8B0",
                  }}
                />
              </div>
              <div>
                <label
                  className="block text-xs font-cinzel mb-2 tracking-wider uppercase"
                  style={{ color: "rgba(201,168,76,0.8)" }}
                >
                  Пароль
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={loginForm.password}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, password: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded text-sm outline-none"
                  style={{
                    background: "rgba(201,168,76,0.05)",
                    border: "1px solid rgba(201,168,76,0.2)",
                    color: "#E8D8B0",
                  }}
                />
              </div>
              <button type="submit" className="btn-gold w-full mt-2 text-sm">
                {isRegister ? "Вступить в ряды" : "Войти"}
              </button>
            </form>

            <div className="section-divider my-6" />
            <p
              className="text-center text-sm"
              style={{ color: "rgba(232,216,176,0.5)" }}
            >
              {isRegister ? "Уже есть аккаунт?" : "Ещё нет аккаунта?"}{" "}
              <button
                onClick={() => setIsRegister(!isRegister)}
                className="transition-colors"
                style={{ color: "#C9A84C" }}
              >
                {isRegister ? "Войти" : "Зарегистрироваться"}
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20" style={{ background: "#0D0A05" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-64 flex-shrink-0">
            <div className="card-dark rounded-xl p-6 mb-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto"
                style={{
                  background: "linear-gradient(135deg, #C9A84C22, #8B691422)",
                  border: "2px solid rgba(201,168,76,0.4)",
                }}
              >
                🧙
              </div>
              <div className="text-center">
                <p
                  className="font-cinzel font-bold text-base"
                  style={{ color: "#E8D8B0" }}
                >
                  Гендальф
                </p>
                <p
                  className="text-xs mt-1"
                  style={{ color: "rgba(232,216,176,0.5)" }}
                >
                  Воин Рохана
                </p>
                <div
                  className="flex items-center justify-center gap-1.5 mt-3 px-3 py-1.5 rounded"
                  style={{
                    background: "rgba(201,168,76,0.1)",
                    border: "1px solid rgba(201,168,76,0.2)",
                  }}
                >
                  <span style={{ color: "#C9A84C" }}>🪙</span>
                  <span
                    className="font-cinzel text-sm font-bold"
                    style={{ color: "#C9A84C" }}
                  >
                    {balance.toLocaleString()}
                  </span>
                  <span
                    className="text-xs"
                    style={{ color: "rgba(201,168,76,0.6)" }}
                  >
                    мед.
                  </span>
                </div>
              </div>
            </div>

            <div className="card-dark rounded-xl overflow-hidden">
              {(
                [
                  { id: "characters", label: "Персонажи", icon: "User" },
                  { id: "balance", label: "Баланс", icon: "Coins" },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="w-full flex items-center gap-3 px-4 py-3.5 text-sm transition-all duration-200"
                  style={{
                    background:
                      activeTab === tab.id
                        ? "rgba(201,168,76,0.1)"
                        : "transparent",
                    color:
                      activeTab === tab.id
                        ? "#C9A84C"
                        : "rgba(232,216,176,0.6)",
                    borderLeft:
                      activeTab === tab.id
                        ? "2px solid #C9A84C"
                        : "2px solid transparent",
                  }}
                >
                  <Icon name={tab.icon} size={16} fallback="Circle" />
                  <span className="font-cinzel text-xs tracking-wide">
                    {tab.label}
                  </span>
                </button>
              ))}
              <button
                onClick={() => setIsLoggedIn(false)}
                className="w-full flex items-center gap-3 px-4 py-3.5 text-sm transition-all duration-200"
                style={{
                  color: "rgba(248,113,113,0.7)",
                  borderLeft: "2px solid transparent",
                }}
              >
                <Icon name="LogOut" size={16} />
                <span className="font-cinzel text-xs tracking-wide">
                  Выйти
                </span>
              </button>
            </div>
          </div>

          <div className="flex-1">
            {activeTab === "characters" && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2
                    className="font-cinzel text-2xl font-bold"
                    style={{ color: "#E8D8B0" }}
                  >
                    Мои персонажи
                  </h2>
                  <button className="btn-outline-gold text-xs">
                    + Создать
                  </button>
                </div>

                <div className="grid gap-4">
                  {mockCharacters.map((char) => (
                    <div key={char.id} className="card-dark rounded-xl p-6">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div
                          className="w-14 h-14 rounded-lg flex items-center justify-center text-2xl flex-shrink-0"
                          style={{
                            background: "rgba(201,168,76,0.08)",
                            border: "1px solid rgba(201,168,76,0.2)",
                          }}
                        >
                          🧝
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                            <div>
                              <h3
                                className="font-cinzel font-bold text-base"
                                style={{ color: "#E8D8B0" }}
                              >
                                {char.name}
                              </h3>
                              <p
                                className="text-xs mt-0.5"
                                style={{ color: "rgba(201,168,76,0.7)" }}
                              >
                                {char.class} · {char.server} · {char.game}
                              </p>
                            </div>
                            <div className="text-right">
                              <p
                                className="font-cinzel text-2xl font-black"
                                style={{ color: "#C9A84C" }}
                              >
                                {char.level}
                              </p>
                              <p
                                className="text-xs"
                                style={{ color: "rgba(232,216,176,0.4)" }}
                              >
                                Уровень
                              </p>
                            </div>
                          </div>

                          <div className="mb-3">
                            <div className="flex justify-between text-xs mb-1">
                              <span style={{ color: "rgba(232,216,176,0.5)" }}>
                                Опыт до следующего уровня
                              </span>
                              <span style={{ color: "#C9A84C" }}>
                                {char.exp}%
                              </span>
                            </div>
                            <div
                              className="w-full h-1.5 rounded-full"
                              style={{ background: "rgba(201,168,76,0.1)" }}
                            >
                              <div
                                className="h-full rounded-full"
                                style={{
                                  width: `${char.exp}%`,
                                  background:
                                    "linear-gradient(90deg, #8B6914, #C9A84C)",
                                }}
                              />
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-4 text-xs">
                            <span style={{ color: "rgba(232,216,176,0.5)" }}>
                              🏰 {char.guild}
                            </span>
                            <span style={{ color: "rgba(232,216,176,0.4)" }}>
                              Был онлайн: {char.lastOnline}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "balance" && (
              <div>
                <h2
                  className="font-cinzel text-2xl font-bold mb-6"
                  style={{ color: "#E8D8B0" }}
                >
                  Баланс медянников
                </h2>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="card-dark rounded-xl p-6 text-center">
                    <div className="text-4xl mb-3">🪙</div>
                    <p
                      className="font-cinzel text-4xl font-black mb-1"
                      style={{ color: "#C9A84C" }}
                    >
                      {balance.toLocaleString()}
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: "rgba(232,216,176,0.5)" }}
                    >
                      Медянников на счёте
                    </p>
                  </div>
                  <div className="card-dark rounded-xl p-6">
                    <h3
                      className="font-cinzel text-sm font-bold mb-4"
                      style={{ color: "#C9A84C" }}
                    >
                      Пополнить баланс
                    </h3>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {[100, 500, 1000, 5000].map((amount) => (
                        <button
                          key={amount}
                          className="py-2 rounded text-sm transition-all duration-200"
                          style={{
                            background: "rgba(201,168,76,0.08)",
                            border: "1px solid rgba(201,168,76,0.2)",
                            color: "#C9A84C",
                          }}
                        >
                          <span className="font-cinzel font-bold">
                            {amount}
                          </span>
                          <span
                            className="text-xs block"
                            style={{ color: "rgba(201,168,76,0.6)" }}
                          >
                            мед.
                          </span>
                        </button>
                      ))}
                    </div>
                    <button className="btn-gold w-full text-sm">
                      Пополнить
                    </button>
                  </div>
                </div>

                <div className="card-dark rounded-xl p-6">
                  <h3
                    className="font-cinzel text-sm font-bold mb-4"
                    style={{ color: "#C9A84C" }}
                  >
                    История транзакций
                  </h3>
                  {[
                    {
                      action: "Покупка: Меч Рохана",
                      amount: -350,
                      date: "22 фев 2026",
                    },
                    {
                      action: "Пополнение",
                      amount: +1000,
                      date: "20 фев 2026",
                    },
                    {
                      action: "Покупка: Зелье сил",
                      amount: -120,
                      date: "18 фев 2026",
                    },
                  ].map((tx, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center py-3"
                      style={{
                        borderBottom:
                          i < 2
                            ? "1px solid rgba(201,168,76,0.1)"
                            : "none",
                      }}
                    >
                      <span
                        className="text-sm"
                        style={{ color: "rgba(232,216,176,0.7)" }}
                      >
                        {tx.action}
                      </span>
                      <div className="text-right">
                        <span
                          className="font-cinzel font-bold text-sm"
                          style={{
                            color: tx.amount > 0 ? "#4ade80" : "#f87171",
                          }}
                        >
                          {tx.amount > 0 ? "+" : ""}
                          {tx.amount} 🪙
                        </span>
                        <p
                          className="text-xs"
                          style={{ color: "rgba(232,216,176,0.3)" }}
                        >
                          {tx.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
