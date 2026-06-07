"use client";
import { useState } from "react";
import { COOKIES } from "@/lib/data";
import CookieCard from "@/components/CookieCard";
import OrderCTA from "@/components/OrderCTA";

type Category = "all" | "classic" | "fruity" | "nutty" | "special";

const FILTERS: { label: string; value: Category }[] = [
  { label: "All Cookies", value: "all" },
  { label: "Classic", value: "classic" },
  // { label: "Fruity", value: "fruity" },
  { label: "Nutty", value: "nutty" },
  { label: "Specials", value: "special" },
];

export default function MenuPage() {
  const [active, setActive] = useState<Category>("all");
  const filtered = active === "all" ? COOKIES : COOKIES.filter((c) => c.category === active);

  return (
    <>
      {/* Hero */}
      <div style={{
        background: "linear-gradient(180deg,#f5e6c8 0%,#FFF8EE 100%)",
        padding: "clamp(40px,8vw,70px) 0 clamp(32px,5vw,50px)",
        textAlign: "center",
      }}>
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: 10 }}>— Our Menu</p>
          <h1 className="display-lg" style={{ color: "#2C1A0E", marginBottom: 14 }}>
            Pick Your{" "}
            <em style={{ fontStyle: "italic", color: "#C47C3A" }}>Perfect</em>{" "}
            Cookie 🍪
          </h1>
          <p style={{ color: "#6B3A1F", fontSize: "clamp(0.95rem,2.5vw,1.1rem)", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
            Every cookie is handcrafted in small batches, baked fresh every morning.
            Tap &ldquo;Order&rdquo; to DM us on WhatsApp!
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="filter-bar">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            className={`btn btn-outline${active === f.value ? " active" : ""}`}
            style={{ padding: "9px 20px", fontSize: "0.88rem" }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="container" style={{ paddingBottom: "clamp(48px,8vw,80px)" }}>
        <div className="grid-cards">
          {filtered.map((c) => <CookieCard key={c.id} cookie={c} />)}
        </div>
      </div>

      <OrderCTA
        title="Want a custom box? 🎁"
        subtitle="Mix and match your favourite flavours! Message us on WhatsApp to build your dream cookie box."
        buttonText="Build My Custom Box"
        message="Hi! I'd like to build a custom cookie box 🍪"
      />
    </>
  );
}
