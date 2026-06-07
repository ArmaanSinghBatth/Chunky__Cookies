"use client";
import { useState } from "react";
import Image from "next/image";
import { Cookie } from "@/lib/data";
import { useCart } from "@/lib/cartContext";

export default function CookieCard({ cookie }: { cookie: Cookie }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem, items } = useCart();

  const cartItem = items.find((i) => i.cookie.id === cookie.id);
  const inCart = cartItem ? cartItem.qty : 0;

  const handleAdd = () => {
    addItem(cookie);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="card"
      style={{
        borderRadius: 20,
        overflow: "hidden",
        borderColor: hovered ? "#C47C3A" : "#F5DEB3",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? "0 20px 48px rgba(107,58,31,0.14)" : "none",
        position: "relative",
      }}
    >
      {/* In-cart badge */}
      {inCart > 0 && (
        <div style={{
          position: "absolute", top: 12, left: 12, zIndex: 2,
          background: "#2C1A0E", color: "#E8A44A",
          borderRadius: 50, fontSize: "0.68rem", fontWeight: 700,
          padding: "3px 10px", letterSpacing: "0.04em",
        }}>
          {inCart} in cart
        </div>
      )}

      {/* Image / gradient area */}
      <div style={{
        background: `linear-gradient(135deg, ${cookie.bgFrom} 0%, ${cookie.bgTo} 100%)`,
        height: "clamp(150px, 22vw, 200px)",
        minHeight: 150,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        {cookie.image ? (
          <Image
            src={cookie.image}
            alt={cookie.name}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 480px) 100vw, (max-width: 900px) 50vw, 25vw"
          />
        ) : (
          <span style={{ fontSize: "clamp(3.5rem, 8vw, 5.5rem)", filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.14))" }}>
            {cookie.emoji}
          </span>
        )}
        {cookie.badge && (
          <span style={{
            position: "absolute", top: 12, right: 12, zIndex: 1,
            background: "#2C1A0E", color: "#E8A44A",
            fontSize: "0.7rem", fontWeight: 700,
            padding: "3px 10px", borderRadius: 50,
            letterSpacing: "0.05em",
          }}>
            {cookie.badge}
          </span>
        )}
      </div>

      {/* Body */}
      <div style={{ padding: "clamp(14px,3vw,22px)" }}>
        <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(1.1rem,2.5vw,1.3rem)", fontWeight: 700, color: "#2C1A0E", marginBottom: 6 }}>
          {cookie.name}
        </h3>
        <p style={{ fontSize: "0.85rem", color: "#6B3A1F", lineHeight: 1.55, marginBottom: 16 }}>
          {cookie.description}
        </p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, flexWrap: "wrap" }}>
          <div>
            <span style={{ fontFamily: "'Fraunces', serif", fontSize: "1.3rem", fontWeight: 900, color: "#2C1A0E" }}>
              ₹{cookie.price}
            </span>
            <span style={{ fontSize: "0.78rem", color: "#6B3A1F", marginLeft: 3 }}>/piece</span>
          </div>
          <button
            onClick={handleAdd}
            className="btn"
            style={{
              padding: "9px 16px",
              fontSize: "0.82rem",
              gap: 5,
              background: added ? "#22c55e" : "#2C1A0E",
              color: "#fff",
              transition: "background 0.3s",
              minWidth: 110,
              justifyContent: "center",
            }}
          >
            {added ? "✓ Added!" : "Add to Cart 🛒"}
          </button>
        </div>
      </div>
    </div>
  );
}
