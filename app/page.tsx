import Link from "next/link";
import { WA_DEFAULT, COOKIES } from "@/lib/data";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import CookieCard from "@/components/CookieCard";
import OrderCTA from "@/components/OrderCTA";

const BESTSELLERS = COOKIES.filter((c) =>
  ["choco-chunk", "biscoff", "nutella", "chunky-cookie-tin"].includes(c.id)
);

const WHY = [
  { icon: "🧈", title: "Real Ingredients", desc: "No preservatives, no shortcuts. Every batch uses fresh butter, real eggs, and premium chocolate." },
  { icon: "🔥", title: "Baked Fresh Daily", desc: "We bake every morning so you always get the freshest, warmest cookies delivered to your door." },
  { icon: "💬", title: "Easy WhatsApp Orders", desc: "No apps, no hassle. Just DM us on WhatsApp and we'll take care of the rest in minutes." },
  { icon: "🎁", title: "Custom Gift Boxes", desc: "We do custom packaging for birthdays, corporate gifts, and special occasions." },
];

const TESTIMONIALS = [
  { emoji: "😍", name: "Priya Sharma", text: "These are genuinely the best cookies I've ever had. The choco chunk one is pure heaven — crispy outside, melty inside. Ordered 3 times already!" },
  { emoji: "🎉", name: "Rahul Mehta", text: "Ordered a gift box for my colleague's birthday. The packaging was beautiful and everyone in the office went crazy over the peanut butter ones!" },
  { emoji: "🤩", name: "Ananya K.", text: "Love how easy ordering via WhatsApp is. Just messaged them, got a reply in 2 minutes, and my cookies arrived super fresh. 10/10 would recommend!" },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="bg-dots" style={{ position: "absolute", inset: 0 }} />
        <div className="container hero-inner">
          <div className="grid-2">
            {/* Text */}
            <div>
              <div className="animate-fade-up" style={{
                display: "inline-block",
                background: "#F5DEB3", color: "#6B3A1F",
                fontSize: "0.75rem", fontWeight: 700,
                letterSpacing: "0.12em", textTransform: "uppercase",
                padding: "6px 16px", borderRadius: 50, marginBottom: 20,
              }}>
                ✨ Freshly Baked Daily
              </div>

              <h1 className="display-xl animate-fade-up-1" style={{ color: "#2C1A0E", marginBottom: 20 }}>
                Life is{" "}
                <em style={{ fontStyle: "italic", color: "#C47C3A" }}>sweeter</em>{" "}
                with a Chunky Cookie
              </h1>

              <p className="animate-fade-up-2" style={{
                fontSize: "clamp(1rem,2.5vw,1.15rem)",
                color: "#6B3A1F", lineHeight: 1.7,
                maxWidth: 420, marginBottom: 32,
              }}>
                Handcrafted cookies made with real butter, Belgian chocolate, and a whole lot of love. Order fresh, delivered to your door.
              </p>

              <div className="animate-fade-up-3" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/menu" className="btn btn-dark">Browse Our Menu 🍪</Link>
                <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer" className="btn btn-wa">
                  <WhatsAppIcon size={17} /> Order on WhatsApp
                </a>
              </div>
            </div>

            {/* Cookie plate visual */}
            {/* <div className="cookie-plate-wrap animate-fade-in">
              <div className="cookie-plate">
                <div className="plate-circle" />
                <div className="main-cookie animate-float">🍪</div>
                <div className="deco-emoji animate-float-sm" style={{ fontSize: "clamp(2rem,6vw,4rem)", top: "8%", right: "6%" }}>🍫</div>
                <div className="deco-emoji animate-float-sm2" style={{ fontSize: "clamp(1.6rem,5vw,3rem)", bottom: "12%", left: "4%" }}>🥜</div>
                <div className="deco-emoji animate-float-sm3" style={{ fontSize: "clamp(1.8rem,5vw,3.5rem)", bottom: "4%", right: "14%" }}>🍪</div>
                <div className="fresh-badge">Baked Fresh Today!</div>
              </div>
            </div> */}
            <div className="cookie-plate-wrap animate-fade-in">
              <div className="cookie-plate">
                <div className="plate-circle" />
                <div className="main-cookie animate-float pl-4">🍪</div>
                <div className="fade-in-up relative flex justify-center items-center w-full aspect-square max-w-[500px] mx-auto lg:ml-auto" style={{ animationDelay: "400ms" }}>          
            
              {/* Real 3D Fluent Emoji Cookie Image */}
              <img 
                src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Cookie/3D/cookie_3d.png" 
                alt="3D Chocolate Chip Cookie" 
                className="relative w-[75%] h-[75%] object-contain animate-float drop-shadow-[0_20px_30px_rgba(44,26,14,0.3)] z-20"
              />
              </div>
                <div className="deco-emoji animate-float-sm" style={{ fontSize: "clamp(2rem,6vw,4rem)", top: "8%", right: "6%" }}>🍫</div>
                <div className="deco-emoji animate-float-sm2" style={{ fontSize: "clamp(1.6rem,5vw,3rem)", bottom: "12%", left: "4%" }}>🥜</div>
                <div className="deco-emoji animate-float-sm3" style={{ fontSize: "clamp(1.8rem,5vw,3.5rem)", bottom: "4%", right: "14%" }}>🍪</div>
                <div className="fresh-badge">Baked Fresh Today!</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="stats-strip">
        {[
          { num: "500+", label: "Happy Customers" },
          { num: "12", label: "Cookie Flavours" },
          { num: "100%", label: "Fresh Ingredients" },
          { num: "4.9★", label: "Average Rating" },
        ].map((s) => (
          <div key={s.label} style={{ textAlign: "center" }}>
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── BESTSELLERS ── */}
      <section className="section-pad container">
        <p className="eyebrow" style={{ marginBottom: 10 }}>— Our Bestsellers</p>
        <h2 className="display-lg" style={{ color: "#2C1A0E", marginBottom: 40 }}>
          Can&apos;t get enough of <em style={{ fontStyle: "italic", color: "#C47C3A" }}>these</em>
        </h2>
        <div className="grid-cards">
          {BESTSELLERS.map((c) => <CookieCard key={c.id} cookie={c} />)}
        </div>
        <div style={{ textAlign: "center", marginTop: 36 }}>
          <Link href="/menu" className="btn btn-dark">See Full Menu →</Link>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section style={{ background: "#2C1A0E", padding: "clamp(48px,8vw,96px) 0" }}>
        <div className="container">
          <p className="eyebrow" style={{ color: "#E8A44A", marginBottom: 10 }}>— Why Chunky Cookies?</p>
          <h2 className="display-lg" style={{ color: "#FFF8EE", marginBottom: 40 }}>
            We bake with <em style={{ fontStyle: "italic", color: "#E8A44A" }}>heart</em>
          </h2>
          <div className="grid-4">
            {WHY.map((w) => (
              <div key={w.title} style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 18, padding: "clamp(20px,3vw,32px)",
              }}>
                <div style={{ fontSize: "clamp(1.8rem,4vw,2.5rem)", marginBottom: 14 }}>{w.icon}</div>
                <h3 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(1rem,2vw,1.2rem)", fontWeight: 700, color: "#E8A44A", marginBottom: 8 }}>{w.title}</h3>
                <p style={{ fontSize: "0.88rem", color: "#F5DEB3", lineHeight: 1.65 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section-pad container">
        <p className="eyebrow" style={{ marginBottom: 10 }}>— What People Say</p>
        <h2 className="display-lg" style={{ color: "#2C1A0E", marginBottom: 40 }}>
          Customers are <em style={{ fontStyle: "italic", color: "#C47C3A" }}>obsessed</em>
        </h2>
        <div className="grid-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="card" style={{ padding: "clamp(20px,3vw,28px)", position: "relative" }}>
              <div style={{ fontFamily: "'Fraunces',serif", fontSize: "4rem", color: "#F5DEB3", lineHeight: 1, position: "absolute", top: 8, left: 16 }}>
                &ldquo;
              </div>
              <p style={{ fontSize: "0.93rem", color: "#6B3A1F", lineHeight: 1.7, marginTop: 28, marginBottom: 18 }}>{t.text}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{
                  width: 38, height: 38, borderRadius: "50%",
                  background: "linear-gradient(135deg,#F5DEB3,#E8A44A)",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem",
                }}>{t.emoji}</div>
                <div>
                  <strong style={{ fontSize: "0.88rem", fontWeight: 700, color: "#2C1A0E", display: "block" }}>{t.name}</strong>
                  <span style={{ color: "#E8A44A", fontSize: "0.78rem" }}>★★★★★</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <OrderCTA />
    </>
  );
}
