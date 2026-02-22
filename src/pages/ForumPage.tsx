import { useState } from "react";
import Icon from "@/components/ui/icon";

const categories = [
  { id: "all", label: "Все темы", icon: "📜" },
  { id: "news", label: "Новости", icon: "📣" },
  { id: "guides", label: "Гайды", icon: "📚" },
  { id: "pvp", label: "PvP", icon: "⚔️" },
  { id: "guilds", label: "Гильдии", icon: "🏰" },
  { id: "trade", label: "Торговля", icon: "🪙" },
  { id: "offtopic", label: "Оффтоп", icon: "💬" },
];

const topics = [
  {
    id: 1,
    category: "news",
    title: "Открытие нового сервера «Медусельд» — 1 марта!",
    author: "Теоден",
    date: "22 фев 2026",
    replies: 47,
    views: 1204,
    pinned: true,
    hot: true,
  },
  {
    id: 2,
    category: "guides",
    title: "Гайд: Прокачка Всадника с 1 по 60 уровень за 3 дня",
    author: "Эовин",
    date: "21 фев 2026",
    replies: 32,
    views: 887,
    pinned: false,
    hot: true,
  },
  {
    id: 3,
    category: "pvp",
    title: "Турнир «Битва при Пеленнорских полях» — регистрация",
    author: "Арагорн_88",
    date: "20 фев 2026",
    replies: 18,
    views: 562,
    pinned: false,
    hot: false,
  },
  {
    id: 4,
    category: "guilds",
    title: "Гильдия «Всадники Марки» набирает новобранцев",
    author: "Гэндальф",
    date: "20 фев 2026",
    replies: 25,
    views: 431,
    pinned: false,
    hot: false,
  },
  {
    id: 5,
    category: "trade",
    title: "[Продам] Кольчуга Теодена + 3 | Торг уместен",
    author: "Леголас",
    date: "19 фев 2026",
    replies: 8,
    views: 203,
    pinned: false,
    hot: false,
  },
  {
    id: 6,
    category: "guides",
    title: "Лучшие билды для Лучника на Хельмовой Пади",
    author: "Эовин",
    date: "18 фев 2026",
    replies: 41,
    views: 1102,
    pinned: false,
    hot: true,
  },
  {
    id: 7,
    category: "offtopic",
    title: "Кто смотрел новый сезон «Кольца власти»?",
    author: "Фродо_Торбинс",
    date: "18 фев 2026",
    replies: 63,
    views: 890,
    pinned: false,
    hot: false,
  },
];

const categoryColors: Record<string, string> = {
  news: "#C9A84C",
  guides: "#60a5fa",
  pvp: "#f87171",
  guilds: "#c084fc",
  trade: "#4ade80",
  offtopic: "rgba(232,216,176,0.5)",
};

const categoryLabels: Record<string, string> = {
  news: "Новости",
  guides: "Гайды",
  pvp: "PvP",
  guilds: "Гильдии",
  trade: "Торговля",
  offtopic: "Оффтоп",
};

export default function ForumPage() {
  const [selectedCat, setSelectedCat] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = topics.filter((t) => {
    const catMatch = selectedCat === "all" || t.category === selectedCat;
    const searchMatch =
      !search ||
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.author.toLowerCase().includes(search.toLowerCase());
    return catMatch && searchMatch;
  });

  return (
    <div className="min-h-screen pt-24 pb-20" style={{ background: "#0D0A05" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="section-divider mb-6" />
            <h1
              className="font-cinzel text-4xl md:text-5xl font-black mb-3"
              style={{ color: "#E8D8B0" }}
            >
              Форум
            </h1>
            <p style={{ color: "rgba(232,216,176,0.55)" }}>
              Тактики, гайды, торговля и общение воинов Рохана
            </p>
          </div>
          <button className="btn-gold text-sm self-start md:self-auto">
            + Новая тема
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-56 flex-shrink-0">
            <div className="card-dark rounded-xl overflow-hidden mb-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCat(cat.id)}
                  className="w-full flex items-center gap-3 px-4 py-3 text-sm transition-all duration-200"
                  style={{
                    background:
                      selectedCat === cat.id
                        ? "rgba(201,168,76,0.1)"
                        : "transparent",
                    color:
                      selectedCat === cat.id
                        ? "#C9A84C"
                        : "rgba(232,216,176,0.65)",
                    borderLeft:
                      selectedCat === cat.id
                        ? "2px solid #C9A84C"
                        : "2px solid transparent",
                  }}
                >
                  <span>{cat.icon}</span>
                  <span className="font-cinzel text-xs tracking-wide">
                    {cat.label}
                  </span>
                </button>
              ))}
            </div>

            <div className="card-dark rounded-xl p-4">
              <p
                className="font-cinzel text-xs text-center mb-3"
                style={{ color: "rgba(201,168,76,0.7)" }}
              >
                Статистика форума
              </p>
              {[
                { label: "Тем", value: "247" },
                { label: "Ответов", value: "4 891" },
                { label: "Участников", value: "1 203" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex justify-between text-xs py-2"
                  style={{ borderBottom: "1px solid rgba(201,168,76,0.1)" }}
                >
                  <span style={{ color: "rgba(232,216,176,0.5)" }}>
                    {stat.label}
                  </span>
                  <span
                    className="font-cinzel font-bold"
                    style={{ color: "#C9A84C" }}
                  >
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <div className="relative mb-6">
              <Icon
                name="Search"
                size={15}
                className="absolute left-4 top-1/2 -translate-y-1/2"
                style={{ color: "rgba(201,168,76,0.5)" }}
              />
              <input
                type="text"
                placeholder="Поиск по темам..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-lg text-sm outline-none"
                style={{
                  background: "rgba(201,168,76,0.05)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  color: "#E8D8B0",
                }}
              />
            </div>

            <div className="flex flex-col gap-2">
              {filtered.map((topic) => (
                <div
                  key={topic.id}
                  className="card-dark rounded-xl px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-3 cursor-pointer transition-all duration-200 group"
                  style={
                    topic.pinned
                      ? { borderLeft: "3px solid rgba(201,168,76,0.5)" }
                      : { borderLeft: "3px solid transparent" }
                  }
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      {topic.pinned && (
                        <span
                          className="text-xs px-2 py-0.5 rounded-full"
                          style={{
                            background: "rgba(201,168,76,0.1)",
                            color: "#C9A84C",
                            border: "1px solid rgba(201,168,76,0.25)",
                          }}
                        >
                          📌 Закреплено
                        </span>
                      )}
                      {topic.hot && (
                        <span
                          className="text-xs px-2 py-0.5 rounded-full"
                          style={{
                            background: "rgba(248,113,113,0.1)",
                            color: "#f87171",
                            border: "1px solid rgba(248,113,113,0.25)",
                          }}
                        >
                          🔥 Горячее
                        </span>
                      )}
                      <span
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{
                          background: `${categoryColors[topic.category]}18`,
                          color: categoryColors[topic.category],
                          border: `1px solid ${categoryColors[topic.category]}40`,
                        }}
                      >
                        {categoryLabels[topic.category]}
                      </span>
                    </div>

                    <h3
                      className="font-cinzel text-sm font-semibold leading-snug group-hover:text-gold transition-colors"
                      style={{ color: "#E8D8B0" }}
                    >
                      {topic.title}
                    </h3>
                    <p
                      className="text-xs mt-1"
                      style={{ color: "rgba(232,216,176,0.45)" }}
                    >
                      {topic.author} · {topic.date}
                    </p>
                  </div>

                  <div className="flex items-center gap-5 flex-shrink-0">
                    <div className="text-center">
                      <p
                        className="font-cinzel font-bold text-sm"
                        style={{ color: "rgba(232,216,176,0.8)" }}
                      >
                        {topic.replies}
                      </p>
                      <p
                        className="text-xs"
                        style={{ color: "rgba(232,216,176,0.35)" }}
                      >
                        ответов
                      </p>
                    </div>
                    <div className="text-center">
                      <p
                        className="font-cinzel font-bold text-sm"
                        style={{ color: "rgba(232,216,176,0.5)" }}
                      >
                        {topic.views}
                      </p>
                      <p
                        className="text-xs"
                        style={{ color: "rgba(232,216,176,0.35)" }}
                      >
                        просмотров
                      </p>
                    </div>
                    <Icon
                      name="ChevronRight"
                      size={16}
                      style={{ color: "rgba(201,168,76,0.4)" }}
                    />
                  </div>
                </div>
              ))}

              {filtered.length === 0 && (
                <div className="text-center py-16">
                  <div className="text-4xl mb-4">📜</div>
                  <p
                    className="font-cinzel"
                    style={{ color: "rgba(232,216,176,0.4)" }}
                  >
                    Темы не найдены
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
