import Link from "next/link";
import { WA_DEFAULT, waLink } from "@/lib/data";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Footer() {
  return (
    <footer style={{ background: "#2C1A0E", color: "#FFF8EE", padding: "clamp(40px,6vw,60px) 0 28px" }}>
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <Link
              href="/"
              style={{
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                marginBottom: 14,
                fontFamily: "'Fraunces', serif",
                fontSize: "1.4rem",
                fontWeight: 900,
                color: "#FFF8EE",
              }}
            >
              🍪 Chunky<span style={{ color: "#C47C3A" }}>Cookies</span>
            </Link>
            <p style={{ fontSize: "0.9rem", color: "#F5DEB3", lineHeight: 1.7, maxWidth: 280, marginBottom: 20 }}>
              Handcrafted cookies made with real butter, Belgian chocolate, and a whole lot of love.
            </p>
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa"
              style={{ fontSize: "0.88rem", padding: "10px 20px" }}
            >
              <WhatsAppIcon size={15} /> WhatsApp Us
            </a>
          </div>

          {/* Pages */}
          <div>
            <h4 style={{ fontFamily: "'Fraunces', serif", fontSize: "1rem", fontWeight: 700, color: "#E8A44A", marginBottom: 16 }}>
              Pages
            </h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {["/", "/menu", "/about", "/contact"].map((href, i) => (
                <li key={href}>
                  <Link href={href} style={{ color: "#F5DEB3", textDecoration: "none", fontSize: "0.9rem" }}>
                    {["Home", "Menu", "About Us", "Contact"][i]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular */}
          <div>
            <h4 style={{ fontFamily: "'Fraunces', serif", fontSize: "1rem", fontWeight: 700, color: "#E8A44A", marginBottom: 16 }}>
              Popular Cookies
            </h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { label: "Choco Chunk", msg: "I'd like to order Classic Choco Chunk cookies 🍪" },
                { label: "Peanut Butter Bliss", msg: "I'd like to order Peanut Butter Bliss cookies 🍪" },
                { label: "Strawberry Cream", msg: "I'd like to order Strawberry Cream cookies 🍪" },
                { label: "Custom Gift Box", msg: "I'd like a custom cookie gift box! 🎁" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={waLink(item.msg)} target="_blank" rel="noopener noreferrer"
                    style={{ color: "#F5DEB3", textDecoration: "none", fontSize: "0.9rem" }}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 20, textAlign: "center", color: "#F5DEB3", fontSize: "0.82rem" }}>
          © {new Date().getFullYear()} Chunky Cookies. Baked with 🧈 &amp; ❤️ — All orders via WhatsApp.
        </div>
      </div>
    </footer>
  );
}
