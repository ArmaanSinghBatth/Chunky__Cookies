"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/lib/cartContext";
import { WA_NUMBER } from "@/lib/data";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalCount, totalPrice, clearCart } = useCart();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    instructions: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.address.trim()) return;

    const orderLines = items
      .map((i) => `  • ${i.cookie.name} × ${i.qty} = ₹${i.cookie.price * i.qty}`)
      .join("\n");

    const message = [
      "🍪 New Order from Chunky Cookies Website!",
      "",
      `👤 Name: ${form.name}`,
      form.phone ? `📞 Phone: ${form.phone}` : null,
      `📍 Address: ${form.address}`,
      form.instructions ? `📝 Instructions: ${form.instructions}` : null,
      "",
      "🛒 Order Summary:",
      orderLines,
      "",
      `💰 Total: ₹${totalPrice} (${totalCount} items)`,
    ]
      .filter((l) => l !== null)
      .join("\n");

    const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
    clearCart();
    window.open(waUrl, "_blank");
    router.push("/");
  };

  if (items.length === 0) {
    return (
      <div style={{
        minHeight: "70vh", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", gap: 16,
        textAlign: "center", padding: "40px 20px",
      }}>
        <div style={{ fontSize: "4rem" }}>🍪</div>
        <h1 style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "1.8rem", color: "#2C1A0E" }}>
          Your cart is empty
        </h1>
        <p style={{ color: "#6B3A1F" }}>Add some cookies before checking out!</p>
        <Link href="/menu" className="btn btn-dark" style={{ padding: "12px 28px" }}>
          Browse Menu
        </Link>
      </div>
    );
  }

  return (
    <div style={{ background: "linear-gradient(180deg,#f5e6c8 0%,#FFF8EE 100%)", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ padding: "clamp(36px,6vw,60px) 0 clamp(20px,4vw,32px)", textAlign: "center" }}>
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: 8 }}>— Almost there!</p>
          <h1 className="display-lg" style={{ color: "#2C1A0E" }}>
            Complete Your <em style={{ fontStyle: "italic", color: "#C47C3A" }}>Order</em>
          </h1>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: "clamp(48px,8vw,80px)" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "clamp(24px,4vw,40px)",
        }}
          className="checkout-grid"
        >
          {/* LEFT: Order summary */}
          <div>
            <div style={{
              background: "#FFFDF9", borderRadius: 20,
              border: "2px solid #F5DEB3", padding: "clamp(20px,4vw,28px)",
            }}>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "1.15rem", color: "#2C1A0E", marginBottom: 18 }}>
                🛒 Order Summary
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {items.map(({ cookie, qty }) => (
                  <div key={cookie.id} style={{
                    display: "flex", alignItems: "center", gap: 12,
                    padding: "10px 12px", background: "#FFF8EE",
                    borderRadius: 12, border: "1.5px solid #F5DEB3",
                  }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: 10, flexShrink: 0,
                      background: `linear-gradient(135deg, ${cookie.bgFrom}, ${cookie.bgTo})`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "1.4rem",
                    }}>
                      {cookie.emoji}
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontWeight: 700, fontSize: "0.88rem", color: "#2C1A0E" }}>{cookie.name}</p>
                      <p style={{ fontSize: "0.78rem", color: "#6B3A1F" }}>₹{cookie.price} × {qty}</p>
                    </div>
                    <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "0.95rem", color: "#2C1A0E" }}>
                      ₹{cookie.price * qty}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{
                marginTop: 18, paddingTop: 16,
                borderTop: "2px dashed #F5DEB3",
                display: "flex", justifyContent: "space-between", alignItems: "center",
              }}>
                <span style={{ color: "#6B3A1F", fontWeight: 600 }}>Total ({totalCount} items)</span>
                <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "1.4rem", color: "#2C1A0E" }}>
                  ₹{totalPrice}
                </span>
              </div>
            </div>

            <Link
              href="/menu"
              style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 14, color: "#6B3A1F", fontSize: "0.85rem", textDecoration: "none", fontWeight: 600 }}
            >
              ← Continue Shopping
            </Link>
          </div>

          {/* RIGHT: Form */}
          <div>
            <div style={{
              background: "#FFFDF9", borderRadius: 20,
              border: "2px solid #F5DEB3", padding: "clamp(20px,4vw,28px)",
            }}>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "1.15rem", color: "#2C1A0E", marginBottom: 20 }}>
                📋 Delivery Details
              </h2>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {/* Name */}
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#2C1A0E", marginBottom: 6 }}>
                    Your Name <span style={{ color: "#C47C3A" }}>*</span>
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Priya Sharma"
                    style={inputStyle}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#2C1A0E", marginBottom: 6 }}>
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="98765 43210"
                    type="tel"
                    style={inputStyle}
                  />
                </div>

                {/* Address */}
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#2C1A0E", marginBottom: 6 }}>
                    Delivery Address <span style={{ color: "#C47C3A" }}>*</span>
                  </label>
                  <textarea
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    required
                    placeholder="12 MG Road, Sector 4, Patiala..."
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", lineHeight: 1.5 }}
                  />
                </div>

                {/* Special instructions */}
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#2C1A0E", marginBottom: 6 }}>
                    Special Instructions <span style={{ fontSize: "0.76rem", color: "#6B3A1F", fontWeight: 400 }}>(optional)</span>
                  </label>
                  <textarea
                    name="instructions"
                    value={form.instructions}
                    onChange={handleChange}
                    placeholder="Any allergies, extra crispy, gift wrapping..."
                    rows={2}
                    style={{ ...inputStyle, resize: "vertical", lineHeight: 1.5 }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-wa"
                  style={{ width: "100%", justifyContent: "center", padding: "15px 20px", fontSize: "1rem", marginTop: 4 }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.852L.057 23.5l5.797-1.521A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.899 0-3.68-.505-5.22-1.389l-.374-.221-3.443.903.921-3.36-.243-.388A9.958 9.958 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                  Send Order via WhatsApp
                </button>

                <p style={{ fontSize: "0.75rem", color: "#6B3A1F", textAlign: "center", lineHeight: 1.5 }}>
                  Tapping above will open WhatsApp with your pre-filled order. The cart clears automatically.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .checkout-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "11px 14px",
  border: "2px solid #F5DEB3",
  borderRadius: 12,
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "0.9rem",
  color: "#2C1A0E",
  background: "#FFF8EE",
  outline: "none",
  transition: "border-color 0.2s",
};
