import Icon from "@/components/ui/icon";

interface ServersPageProps {
  onNavigate: (page: string) => void;
}

const servers = [
  {
    id: 1,
    name: "Хельмова Падь",
    game: "Age of Conan",
    description: "Сервер для опытных воинов. Открытый PvP, сложные рейды, суровый лор Рохана.",
    online: 142,
    max: 200,
    status: "online",
    type: "PvP",
    exp: "x3",
    tags: ["PvP", "Hardcore", "Рейды"],
    patch: "3.8.2",
  },
  {
    id: 2,
    name: "Золотой Зал",
    game: "Lineage II",
    description: "Классический сервер для любителей PvE. Комфортный прогресс, дружелюбное сообщество.",
    online: 87,
    max: 150,
    status: "online",
    type: "PvE",
    exp: "x5",
    tags: ["PvE", "Классика", "Гильдии"],
    patch: "Interlude",
  },
  {
    id: 3,
    name: "Эдорас",
    game: "World of Warcraft",
    description: "Ролевой сервер с глубоким отыгрышем. Уникальные ивенты каждые выходные.",
    online: 0,
    max: 100,
    status: "offline",
    type: "RP",
    exp: "x1",
    tags: ["RP", "Ивенты", "Сюжет"],
    patch: "3.3.5",
  },
  {
    id: 4,
    name: "Медусельд",
    game: "Lineage II",
    description: "Новый сервер! Специально для новичков. Легкий старт, обучающие квесты.",
    online: 0,
    max: 250,
    status: "soon",
    type: "PvE",
    exp: "x10",
    tags: ["Новичкам", "Easy", "Старт"],
    patch: "High Five",
  },
];

export default function ServersPage({ onNavigate }: ServersPageProps) {
  return (
    <div className="min-h-screen pt-24 pb-20" style={{ background: "#0D0A05" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="section-divider mb-8" />
          <h1
            className="font-cinzel text-4xl md:text-5xl font-black mb-4"
            style={{ color: "#E8D8B0" }}
          >
            Игровые серверы
          </h1>
          <p style={{ color: "rgba(232,216,176,0.55)" }}>
            Выбери свой мир и вступи в ряды воинов Рохана
          </p>
        </div>

        <div className="grid gap-6">
          {servers.map((s) => (
            <div
              key={s.id}
              className="card-dark rounded-xl p-6 md:p-8 transition-all duration-300"
              style={
                s.status === "online"
                  ? { boxShadow: "0 0 0 1px rgba(201,168,76,0.15)" }
                  : {}
              }
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div
                  className="w-16 h-16 rounded-lg flex items-center justify-center text-3xl flex-shrink-0"
                  style={{
                    background: "rgba(201,168,76,0.08)",
                    border: "1px solid rgba(201,168,76,0.2)",
                  }}
                >
                  {s.type === "PvP" ? "⚔️" : s.type === "PvE" ? "🛡️" : s.type === "RP" ? "📜" : "⭐"}
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h2
                          className="font-cinzel text-xl font-bold"
                          style={{ color: "#E8D8B0" }}
                        >
                          {s.name}
                        </h2>
                        <span
                          className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                            s.status === "online"
                              ? "status-online"
                              : s.status === "soon"
                              ? ""
                              : "status-offline"
                          }`}
                          style={{
                            background:
                              s.status === "online"
                                ? "rgba(74,222,128,0.1)"
                                : s.status === "soon"
                                ? "rgba(201,168,76,0.1)"
                                : "rgba(248,113,113,0.1)",
                            border: `1px solid ${
                              s.status === "online"
                                ? "rgba(74,222,128,0.3)"
                                : s.status === "soon"
                                ? "rgba(201,168,76,0.3)"
                                : "rgba(248,113,113,0.3)"
                            }`,
                            color:
                              s.status === "soon" ? "#C9A84C" : undefined,
                          }}
                        >
                          {s.status === "online"
                            ? "● Online"
                            : s.status === "soon"
                            ? "✦ Скоро"
                            : "● Offline"}
                        </span>
                      </div>
                      <p
                        className="text-sm"
                        style={{ color: "rgba(201,168,76,0.7)" }}
                      >
                        {s.game} · Патч {s.patch}
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <p
                          className="font-cinzel text-xl font-bold"
                          style={{ color: "#C9A84C" }}
                        >
                          {s.exp}
                        </p>
                        <p
                          className="text-xs"
                          style={{ color: "rgba(232,216,176,0.4)" }}
                        >
                          Опыт
                        </p>
                      </div>
                      <div className="text-center">
                        <p
                          className="font-cinzel text-xl font-bold"
                          style={{ color: s.status === "online" ? "#4ade80" : "rgba(232,216,176,0.3)" }}
                        >
                          {s.status === "online" ? s.online : "—"}
                        </p>
                        <p
                          className="text-xs"
                          style={{ color: "rgba(232,216,176,0.4)" }}
                        >
                          Онлайн
                        </p>
                      </div>
                      <div className="text-center">
                        <p
                          className="font-cinzel text-xl font-bold"
                          style={{ color: "rgba(232,216,176,0.5)" }}
                        >
                          {s.max}
                        </p>
                        <p
                          className="text-xs"
                          style={{ color: "rgba(232,216,176,0.4)" }}
                        >
                          Мест
                        </p>
                      </div>
                    </div>
                  </div>

                  <p
                    className="text-sm mb-4 leading-relaxed"
                    style={{ color: "rgba(232,216,176,0.65)" }}
                  >
                    {s.description}
                  </p>

                  {s.status === "online" && (
                    <div className="mb-4">
                      <div className="flex justify-between text-xs mb-1.5">
                        <span style={{ color: "rgba(232,216,176,0.4)" }}>
                          Загрузка сервера
                        </span>
                        <span style={{ color: "#C9A84C" }}>
                          {Math.round((s.online / s.max) * 100)}%
                        </span>
                      </div>
                      <div
                        className="w-full h-1.5 rounded-full"
                        style={{ background: "rgba(201,168,76,0.1)" }}
                      >
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${(s.online / s.max) * 100}%`,
                            background: "linear-gradient(90deg, #8B6914, #C9A84C)",
                          }}
                        />
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex gap-2 flex-wrap">
                      {s.tags.map((tag) => (
                        <span key={tag} className="medallion-badge">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {s.status === "online" ? (
                      <button
                        onClick={() => onNavigate("cabinet")}
                        className="btn-gold text-xs"
                      >
                        Играть
                      </button>
                    ) : s.status === "soon" ? (
                      <button className="btn-outline-gold text-xs opacity-75 cursor-not-allowed">
                        Скоро открытие
                      </button>
                    ) : (
                      <span
                        className="text-xs"
                        style={{ color: "rgba(232,216,176,0.3)" }}
                      >
                        Недоступен
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
