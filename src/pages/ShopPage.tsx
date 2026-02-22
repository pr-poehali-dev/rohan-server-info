import { useState } from "react";

const categories = ["Все", "Оружие", "Броня", "Зелья", "Маунты", "Питомцы"];

const items = [
  { id: 1, name: "Меч Рохана", category: "Оружие", price: 350, rarity: "Редкий", desc: "Легендарный клинок всадников Марки", icon: "⚔️" },
  { id: 2, name: "Кольчуга Теодена", category: "Броня", price: 520, rarity: "Эпический", desc: "Доспехи короля-воина. +25% к защите", icon: "🛡️" },
  { id: 3, name: "Зелье Силы", category: "Зелья", price: 120, rarity: "Обычный", desc: "Восстанавливает 500 HP мгновенно", icon: "🧪" },
  { id: 4, name: "Боевой конь Рохана", category: "Маунты", price: 1500, rarity: "Легендарный", desc: "Верный скакун. Скорость +80%", icon: "🐎" },
  { id: 5, name: "Лук Эовин", category: "Оружие", price: 280, rarity: "Редкий", desc: "Точный лук щитовой девы", icon: "🏹" },
  { id: 6, name: "Фалькон Рохана", category: "Питомцы", price: 800, rarity: "Эпический", desc: "Боевой сокол. Атакует врагов", icon: "🦅" },
  { id: 7, name: "Зелье Ярости", category: "Зелья", price: 200, rarity: "Необычный", desc: "+50% к атаке на 30 секунд", icon: "🔥" },
  { id: 8, name: "Шлем Медусельда", category: "Броня", price: 390, rarity: "Редкий", desc: "Украшен символами Рохана. +15 к защите", icon: "⛑️" },
];

const rarityColor: Record<string, string> = {
  "Обычный": "rgba(232,216,176,0.5)",
  "Необычный": "#4ade80",
  "Редкий": "#60a5fa",
  "Эпический": "#c084fc",
  "Легендарный": "#C9A84C",
};

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [cart, setCart] = useState<number[]>([]);

  const filtered = selectedCategory === "Все"
    ? items
    : items.filter((i) => i.category === selectedCategory);

  const addToCart = (id: number) => {
    setCart((prev) => prev.includes(id) ? prev : [...prev, id]);
  };

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
              Магазин
            </h1>
            <p style={{ color: "rgba(232,216,176,0.55)" }}>
              Снаряжение, питомцы и расходники за медянники
            </p>
          </div>
          <div
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg"
            style={{
              background: "rgba(201,168,76,0.1)",
              border: "1px solid rgba(201,168,76,0.25)",
            }}
          >
            <span>🪙</span>
            <span
              className="font-cinzel font-bold"
              style={{ color: "#C9A84C" }}
            >
              1 250
            </span>
            <span
              className="text-xs"
              style={{ color: "rgba(201,168,76,0.6)" }}
            >
              медянников
            </span>
            {cart.length > 0 && (
              <span
                className="ml-3 text-xs px-2 py-0.5 rounded-full font-bold"
                style={{ background: "#C9A84C", color: "#0D0A05" }}
              >
                🛒 {cart.length}
              </span>
            )}
          </div>
        </div>

        <div className="flex gap-2 flex-wrap mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className="px-4 py-2 rounded-full text-xs font-cinzel tracking-wide transition-all duration-200"
              style={{
                background:
                  selectedCategory === cat
                    ? "linear-gradient(135deg, #C9A84C, #8B6914)"
                    : "rgba(201,168,76,0.08)",
                color: selectedCategory === cat ? "#0D0A05" : "rgba(232,216,176,0.7)",
                border:
                  selectedCategory === cat
                    ? "1px solid #C9A84C"
                    : "1px solid rgba(201,168,76,0.2)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="card-dark rounded-xl p-5 flex flex-col transition-all duration-300 group"
              style={{ boxShadow: "0 0 0 1px rgba(201,168,76,0.1)" }}
            >
              <div
                className="w-full aspect-square rounded-lg flex items-center justify-center text-5xl mb-4"
                style={{ background: "rgba(201,168,76,0.06)" }}
              >
                {item.icon}
              </div>

              <div className="flex items-center justify-between mb-2">
                <span
                  className="text-xs font-semibold"
                  style={{ color: rarityColor[item.rarity] }}
                >
                  {item.rarity}
                </span>
                <span
                  className="text-xs"
                  style={{ color: "rgba(232,216,176,0.4)" }}
                >
                  {item.category}
                </span>
              </div>

              <h3
                className="font-cinzel font-bold text-sm mb-2"
                style={{ color: "#E8D8B0" }}
              >
                {item.name}
              </h3>
              <p
                className="text-xs leading-relaxed mb-4 flex-1"
                style={{ color: "rgba(232,216,176,0.55)" }}
              >
                {item.desc}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-1">
                  <span>🪙</span>
                  <span
                    className="font-cinzel font-black text-base"
                    style={{ color: "#C9A84C" }}
                  >
                    {item.price}
                  </span>
                </div>
                <button
                  onClick={() => addToCart(item.id)}
                  className={`text-xs px-3 py-1.5 rounded transition-all duration-200 font-cinzel ${
                    cart.includes(item.id) ? "" : ""
                  }`}
                  style={{
                    background: cart.includes(item.id)
                      ? "rgba(74,222,128,0.1)"
                      : "linear-gradient(135deg, #C9A84C, #8B6914)",
                    color: cart.includes(item.id) ? "#4ade80" : "#0D0A05",
                    border: cart.includes(item.id)
                      ? "1px solid rgba(74,222,128,0.3)"
                      : "1px solid #C9A84C",
                  }}
                >
                  {cart.includes(item.id) ? "✓ В корзине" : "Купить"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <div
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 px-6 py-4 rounded-xl flex items-center gap-6"
            style={{
              background: "rgba(26, 18, 8, 0.97)",
              border: "1px solid rgba(201,168,76,0.4)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.5), 0 0 20px rgba(201,168,76,0.1)",
            }}
          >
            <span
              className="font-cinzel text-sm"
              style={{ color: "rgba(232,216,176,0.8)" }}
            >
              🛒 В корзине: {cart.length} предмет
              {cart.length > 1 ? "а" : ""}
            </span>
            <div className="section-divider" style={{ width: "1px", height: "24px", background: "rgba(201,168,76,0.3)" }} />
            <span className="font-cinzel font-bold" style={{ color: "#C9A84C" }}>
              🪙{" "}
              {cart.reduce((sum, id) => {
                const item = items.find((i) => i.id === id);
                return sum + (item?.price || 0);
              }, 0)}
            </span>
            <button className="btn-gold text-xs">Оформить</button>
          </div>
        )}
      </div>
    </div>
  );
}
