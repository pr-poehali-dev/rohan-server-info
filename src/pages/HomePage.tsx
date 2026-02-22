interface HomePageProps {
  onNavigate: (page: string) => void;
}

const servers = [
  { name: "error", game: "Age of Conan", online: 142, max: 200, status: "online" },
  { name: "error", game: "Lineage II", online: 87, max: 150, status: "online" },
  { name: "error", game: "World of Warcraft", online: 0, max: 100, status: "offline" },
];

const features = [
  { icon: "⚔️", title: "Серверы", desc: "Несколько игровых миров с уникальными правилами и лором Рохана" },
  { icon: "🛡️", title: "Персонажи", desc: "Храните прогресс всех персонажей в едином личном кабинете" },
  { icon: "🪙", title: "Медянники", desc: "Единая внутренняя валюта для покупок в магазине сайта" },
  { icon: "📜", title: "Форум", desc: "Общайтесь с другими игроками, делитесь тактиками и историями" },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      <section
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: `url(https://cdn.poehali.dev/projects/422eee64-8a4f-447f-b492-239ca4a0b449/files/f3ca33bc-66cd-4e60-9f0a-83a91ce8163a.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(13,10,5,0.5) 0%, rgba(13,10,5,0.7) 60%, #0D0A05 100%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
          <div className="max-w-3xl animate-fade-in">
            <div className="medallion-badge mb-6 inline-block">
              ⚔️ Игровой портал Рохана
            </div>
            <h1
              className="font-cinzel text-5xl md:text-7xl font-black leading-tight mb-6"
              style={{
                color: "#E8D8B0",
                textShadow: "0 2px 40px rgba(201,168,76,0.3)",
              }}
            >
              Воины
              <br />
              <span style={{ color: "#C9A84C" }}>Рохана</span>
            </h1>
            <p
              className="text-lg md:text-xl mb-10 max-w-xl leading-relaxed animate-fade-in-delay-1"
              style={{ color: "rgba(232, 216, 176, 0.75)" }}
            >
              Вступи в ряды всадников Марки. Сражайся на наших серверах, развивай
              своих персонажей и обретай легендарное снаряжение.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-delay-2">
              <button
                onClick={() => onNavigate("servers")}
                className="btn-gold text-sm"
              >
                Выбрать сервер
              </button>
              <button
                onClick={() => onNavigate("cabinet")}
                className="btn-outline-gold text-sm"
              >
                Создать аккаунт
              </button>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background: "linear-gradient(transparent, #0D0A05)",
          }}
        />
      </section>

      <section className="py-20" style={{ background: "#0D0A05" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-divider mb-8" />
            <h2
              className="font-cinzel text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#E8D8B0" }}
            >
              Статус серверов
            </h2>
            <p style={{ color: "rgba(232,216,176,0.55)" }} className="text-sm">
              Актуальная информация об игровых мирах
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {servers.map((s) => (
              <div
                key={s.name}
                className="card-dark rounded-lg p-6 hover:gold-glow transition-all duration-300 group cursor-pointer"
                onClick={() => onNavigate("servers")}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3
                      className="font-cinzel font-semibold text-base mb-1"
                      style={{ color: "#E8D8B0" }}
                    >
                      {s.name}
                    </h3>
                    <p
                      className="text-xs"
                      style={{ color: "rgba(232,216,176,0.5)" }}
                    >
                      {s.game}
                    </p>
                  </div>
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      s.status === "online"
                        ? "status-online"
                        : "status-offline"
                    }`}
                    style={{
                      background:
                        s.status === "online"
                          ? "rgba(74, 222, 128, 0.1)"
                          : "rgba(248, 113, 113, 0.1)",
                      border: `1px solid ${s.status === "online" ? "rgba(74,222,128,0.3)" : "rgba(248,113,113,0.3)"}`,
                    }}
                  >
                    {s.status === "online" ? "● Online" : "● Offline"}
                  </span>
                </div>

                {s.status === "online" && (
                  <>
                    <div className="flex justify-between text-xs mb-2">
                      <span style={{ color: "rgba(232,216,176,0.5)" }}>
                        Игроков онлайн
                      </span>
                      <span style={{ color: "#C9A84C" }}>
                        {s.online} / {s.max}
                      </span>
                    </div>
                    <div
                      className="w-full h-1.5 rounded-full"
                      style={{ background: "rgba(201,168,76,0.1)" }}
                    >
                      <div
                        className="h-full rounded-full transition-all"
                        style={{
                          width: `${(s.online / s.max) * 100}%`,
                          background:
                            "linear-gradient(90deg, #8B6914, #C9A84C)",
                        }}
                      />
                    </div>
                  </>
                )}

                {s.status === "offline" && (
                  <p
                    className="text-xs mt-2"
                    style={{ color: "rgba(232,216,176,0.4)" }}
                  >
                    Сервер временно недоступен
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20"
        style={{ background: "linear-gradient(180deg, #0D0A05, #1A1208)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="font-cinzel text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#E8D8B0" }}
            >
              Возможности портала
            </h2>
            <div className="section-divider mt-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="card-dark rounded-lg p-6 text-center"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3
                  className="font-cinzel font-semibold mb-3 text-base"
                  style={{ color: "#C9A84C" }}
                >
                  {f.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(232,216,176,0.6)" }}
                >
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20"
        style={{
          background: "linear-gradient(180deg, #1A1208, #0D0A05)",
          borderTop: "1px solid rgba(201,168,76,0.1)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="font-cinzel text-3xl md:text-5xl font-black mb-6"
            style={{ color: "#E8D8B0" }}
          >
            Готов встать в строй?
          </h2>
          <p
            className="mb-10 text-base max-w-xl mx-auto"
            style={{ color: "rgba(232,216,176,0.6)" }}
          >
            Присоединяйся к тысячам воинов Рохана. Регистрация занимает меньше
            минуты.
          </p>
          <button
            onClick={() => onNavigate("cabinet")}
            className="btn-gold text-sm"
          >
            Начать приключение
          </button>
        </div>
      </section>

      <footer
        className="py-8"
        style={{
          background: "#080604",
          borderTop: "1px solid rgba(201,168,76,0.1)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span style={{ color: "#C9A84C" }}>⚔️</span>
            <span
              className="font-cinzel text-sm"
              style={{ color: "rgba(201,168,76,0.7)" }}
            >
              РОХАН — Игровой Портал
            </span>
          </div>
          <p className="text-xs" style={{ color: "rgba(232,216,176,0.3)" }}>
            © 2026 Все права защищены
          </p>
        </div>
      </footer>
    </div>
  );
}