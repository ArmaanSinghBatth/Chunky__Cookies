import { WA_DEFAULT, waLink } from "@/lib/data";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const STEPS = [
  { num: "1️⃣", title: "Browse the Menu", desc: "Pick your favourite flavours from our menu page." },
  { num: "2️⃣", title: "Message us on WhatsApp", desc: "Tell us what you want, how many, and your delivery address." },
  { num: "3️⃣", title: "Receive & Enjoy!", desc: "We'll bake fresh and deliver warm cookies right to you." },
];

export default function ContactPage() {
  return (
    <section className="section-pad container">
      {/* Header */}
      <p className="eyebrow" style={{ marginBottom: 10 }}>— Get in Touch</p>
      <h1 className="display-lg" style={{ color: "#2C1A0E", marginBottom: 14 }}>
        We&apos;d love to hear from you 🍪
      </h1>
      <p style={{ color: "#6B3A1F", fontSize: "clamp(0.95rem,2.5vw,1.05rem)", lineHeight: 1.7, marginBottom: 40, maxWidth: 560 }}>
        Have a question, a custom order, or just want to chat about cookies?
        Reach out — we respond fast on WhatsApp!
      </p>

      {/* Contact cards */}
      <div className="contact-grid">
        {/* WhatsApp */}
        <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer"
          style={{
            background: "linear-gradient(135deg,#25D366,#128C7E)",
            borderRadius: 20,
            padding: "clamp(24px,4vw,36px) 24px",
            textAlign: "center", textDecoration: "none",
            transition: "all 0.3s", display: "block",
          }}
        >
          <div style={{ fontSize: "clamp(2rem,5vw,2.8rem)", marginBottom: 14 }}>💬</div>
          <h3 style={{ fontFamily: "'Fraunces',serif", fontSize: "1.1rem", fontWeight: 700, color: "white", marginBottom: 8 }}>WhatsApp Us</h3>
          <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}>
            Tap to open WhatsApp and send us a message. We reply within minutes!
          </p>
        </a>

        {/* Email */}
        <a href="mailto:hello@chunkycookies.in" className="contact-card">
          <div style={{ fontSize: "clamp(2rem,5vw,2.8rem)", marginBottom: 14 }}>📧</div>
          <h3 style={{ fontFamily: "'Fraunces',serif", fontSize: "1.1rem", fontWeight: 700, color: "#2C1A0E", marginBottom: 8 }}>Email Us</h3>
          <p style={{ fontSize: "0.88rem", color: "#6B3A1F", lineHeight: 1.6 }}>
            hello@chunkycookies.in<br />We reply within 24 hours.
          </p>
        </a>

        {/* Instagram */}
        <a href="https://instagram.com/chunkycookiesindia" target="_blank" rel="noopener noreferrer" className="contact-card">
          <div style={{ fontSize: "clamp(2rem,5vw,2.8rem)", marginBottom: 14 }}>📸</div>
          <h3 style={{ fontFamily: "'Fraunces',serif", fontSize: "1.1rem", fontWeight: 700, color: "#2C1A0E", marginBottom: 8 }}>Follow on Instagram</h3>
          <p style={{ fontSize: "0.88rem", color: "#6B3A1F", lineHeight: 1.6 }}>
            @chunkycookiesindia — Daily bakes, new flavours, and behind-the-scenes!
          </p>
        </a>
      </div>

      {/* How to Order */}
      <div className="card" style={{ padding: "clamp(28px,5vw,44px)" }}>
        <p className="eyebrow" style={{ marginBottom: 8 }}>— How to Order</p>
        <h2 className="display-md" style={{ color: "#2C1A0E", marginBottom: 32 }}>
          Just 3 simple steps 🍪
        </h2>
        <div className="steps-grid">
          {STEPS.map((s) => (
            <div key={s.title} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "clamp(2rem,5vw,3rem)", marginBottom: 10 }}>{s.num}</div>
              <strong style={{ fontFamily: "'Fraunces',serif", display: "block", marginBottom: 8, color: "#2C1A0E", fontSize: "clamp(0.95rem,2vw,1rem)" }}>
                {s.title}
              </strong>
              <p style={{ fontSize: "0.88rem", color: "#6B3A1F", lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 36 }}>
          <a
            href={waLink("Hey Chunky Cookies! I'd like to place an order 🍪")}
            target="_blank" rel="noopener noreferrer"
            className="btn btn-wa"
            style={{ fontSize: "clamp(0.95rem,2.5vw,1rem)", padding: "clamp(13px,2vw,16px) clamp(24px,4vw,36px)" }}
          >
            <WhatsAppIcon size={19} /> Start My Order Now
          </a>
        </div>
      </div>
    </section>
  );
}
