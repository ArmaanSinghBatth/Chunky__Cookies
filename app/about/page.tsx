import { WA_DEFAULT } from "@/lib/data";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const VALUES = [
  { icon: "🧈", title: "Real Ingredients Only", desc: "Every recipe uses fresh dairy butter, free-range eggs, and premium chocolate. No artificial flavours ever." },
  { icon: "❤️", title: "Made with Love", desc: "Every cookie is handcrafted in small batches. You can actually taste the difference that care makes." },
  { icon: "🌱", title: "Thoughtful Baking", desc: "We offer vegan options, use eco-friendly packaging, and constantly experiment with new seasonal recipes." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-pad container">
        <div className="grid-2">
          {/* Text */}
          <div>
            <p className="eyebrow" style={{ marginBottom: 10 }}>— Our Story</p>
            <h1 className="display-lg" style={{ color: "#2C1A0E", marginBottom: 20 }}>
              Born from a{" "}
              <em style={{ fontStyle: "italic", color: "#C47C3A" }}>late-night</em>{" "}
              craving
            </h1>
            <p style={{ fontSize: "clamp(0.95rem,2vw,1rem)", color: "#6B3A1F", lineHeight: 1.8, marginBottom: 16 }}>
              Chunky Cookies started in a tiny home kitchen in 2023. Our founder, a cookie obsessive,
              couldn&apos;t find cookies that hit that perfect balance — crispy yet chewy, rich but not overwhelming.
            </p>
            <p style={{ fontSize: "clamp(0.95rem,2vw,1rem)", color: "#6B3A1F", lineHeight: 1.8, marginBottom: 16 }}>
              So she started baking. Friends loved them. Friends of friends wanted them. And just like that,
              Chunky Cookies was born — a home bakery with big dreams and even bigger cookies.
            </p>
            <p style={{ fontSize: "clamp(0.95rem,2vw,1rem)", color: "#6B3A1F", lineHeight: 1.8, marginBottom: 28 }}>
              Today we bake fresh every morning, deliver across the city, and take orders through WhatsApp
              because good food should be as simple as sending a message to a friend.
            </p>
            <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer" className="btn btn-wa">
              <WhatsAppIcon size={17} /> Say Hello on WhatsApp
            </a>
          </div>

          {/* Blob — shown above text on mobile */}
          <div className="about-visual-first" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            {/* <div className="about-blob animate-morph"
              style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              🍪
            </div> */}
            <div className="fade-in-up relative flex justify-center items-center w-full aspect-square max-w-[500px] mx-auto lg:ml-auto" style={{ animationDelay: "400ms" }}>          
            
              {/* Real 3D Fluent Emoji Cookie Image */}
              <img 
                src="images/red-velvet-cream-cheese.png" 
                alt="3D Chocolate Chip Cookie" 
                className="relative w-[75%] h-[75%] object-contain animate-float drop-shadow-[0_20px_30px_rgba(44,26,14,0.3)] z-20"
              />
              </div>
        </div>
          </div>
          
      </section>

      {/* Values */}
      <section style={{ paddingBottom: "clamp(48px,8vw,80px)" }}>
        <div className="container">
          <div className="grid-3">
            {VALUES.map((v) => (
              <div key={v.title} className="card" style={{ padding: "clamp(20px,3vw,28px)", textAlign: "center" }}>
                <div style={{ fontSize: "clamp(1.8rem,4vw,2.5rem)", marginBottom: 14 }}>{v.icon}</div>
                <h3 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(1rem,2vw,1.1rem)", fontWeight: 700, color: "#2C1A0E", marginBottom: 8 }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: "0.87rem", lineHeight: 1.6, color: "#6B3A1F" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <div className="stats-strip" style={{ marginBottom: "clamp(48px,8vw,80px)" }}>
        {[
          { num: "2023", label: "Founded" },
          { num: "500+", label: "Happy Customers" },
          { num: "12", label: "Flavours & counting" },
          { num: "100%", label: "Homemade" },
        ].map((s) => (
          <div key={s.label} style={{ textAlign: "center" }}>
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </>
  );
}
