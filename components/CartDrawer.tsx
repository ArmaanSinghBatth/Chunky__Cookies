"use client";
import { useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cartContext";

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, updateQty, removeItem, totalCount, totalPrice } = useCart();

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed", inset: 0, background: "rgba(44,26,14,0.45)",
            zIndex: 299, backdropFilter: "blur(2px)",
          }}
        />
      )}

      {/* Drawer */}
      <div
        style={{
          position: "fixed", top: 0, right: 0, bottom: 0,
          width: "min(400px, 100vw)",
          background: "#FFFDF9",
          zIndex: 300,
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.32s cubic-bezier(0.32,0,0.15,1)",
          display: "flex", flexDirection: "column",
          boxShadow: "-8px 0 40px rgba(44,26,14,0.18)",
        }}
      >
        {/* Header */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "18px 20px 16px",
          borderBottom: "2px solid #F5DEB3",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: "1.3rem" }}>🛒</span>
            <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "1.15rem", color: "#2C1A0E" }}>
              Your Cart
            </span>
            {totalCount > 0 && (
              <span style={{
                background: "#C47C3A", color: "#fff",
                borderRadius: 50, fontSize: "0.72rem", fontWeight: 700,
                padding: "2px 8px", lineHeight: 1.4,
              }}>
                {totalCount}
              </span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              fontSize: "1.4rem", color: "#6B3A1F", lineHeight: 1,
              padding: 4, borderRadius: 6,
            }}
            aria-label="Close cart"
          >
            ✕
          </button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: "auto", padding: "12px 20px" }}>
          {items.length === 0 ? (
            <div style={{ textAlign: "center", paddingTop: 60, color: "#6B3A1F" }}>
              <div style={{ fontSize: "3.5rem", marginBottom: 14 }}>🍪</div>
              <p style={{ fontFamily: "'Fraunces', serif", fontSize: "1.05rem", fontWeight: 700 }}>Your cart is empty</p>
              <p style={{ fontSize: "0.85rem", marginTop: 6 }}>Add some delicious cookies!</p>
              <button
                onClick={() => setIsOpen(false)}
                className="btn btn-dark"
                style={{ marginTop: 20, padding: "10px 24px", fontSize: "0.88rem" }}
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {items.map(({ cookie, qty }) => (
                <div key={cookie.id} style={{
                  display: "flex", gap: 12, alignItems: "center",
                  background: "#FFF8EE", borderRadius: 14,
                  padding: "12px 14px",
                  border: "1.5px solid #F5DEB3",
                }}>
                  {/* Emoji thumb */}
                  <div style={{
                    width: 52, height: 52, borderRadius: 12, flexShrink: 0,
                    background: `linear-gradient(135deg, ${cookie.bgFrom}, ${cookie.bgTo})`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.6rem",
                  }}>
                    {cookie.emoji}
                  </div>
                  {/* Info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontWeight: 700, fontSize: "0.88rem", color: "#2C1A0E", marginBottom: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {cookie.name}
                    </p>
                    <p style={{ fontSize: "0.8rem", color: "#6B3A1F" }}>₹{cookie.price}/pc</p>
                  </div>
                  {/* Controls */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
                    <p style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "0.95rem", color: "#2C1A0E" }}>
                      ₹{cookie.price * qty}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <button
                        onClick={() => updateQty(cookie.id, -1)}
                        style={{
                          width: 26, height: 26, borderRadius: 50,
                          border: "1.5px solid #F5DEB3", background: "#fff",
                          cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: "1rem", color: "#6B3A1F", fontWeight: 700,
                        }}
                      >−</button>
                      <span style={{ fontWeight: 700, fontSize: "0.88rem", minWidth: 18, textAlign: "center" }}>{qty}</span>
                      <button
                        onClick={() => updateQty(cookie.id, 1)}
                        style={{
                          width: 26, height: 26, borderRadius: 50,
                          border: "1.5px solid #F5DEB3", background: "#fff",
                          cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: "1rem", color: "#6B3A1F", fontWeight: 700,
                        }}
                      >+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div style={{
            borderTop: "2px solid #F5DEB3",
            padding: "16px 20px 24px",
            background: "#FFFDF9",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
              <span style={{ color: "#6B3A1F", fontSize: "0.9rem" }}>Total ({totalCount} items)</span>
              <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "1.1rem", color: "#2C1A0E" }}>₹{totalPrice}</span>
            </div>
            <Link
              href="/checkout"
              onClick={() => setIsOpen(false)}
              className="btn btn-wa"
              style={{ display: "flex", width: "100%", justifyContent: "center", fontSize: "0.95rem", padding: "13px 20px" }}
            >
              Proceed to Checkout →
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
