"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { WA_DEFAULT } from "@/lib/data";
import WhatsAppIcon from "./WhatsAppIcon";
import { useCart } from "@/lib/cartContext";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { totalCount, setIsOpen: setCartOpen } = useCart();

  // Close drawer on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Prevent body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <Link href="/" className="nav-logo">
          🍪 Chunky<span>Cookies</span>
        </Link>

        {/* Desktop links */}
        <ul className="nav-desktop">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`nav-link${pathname === l.href ? " active" : ""}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            {/* Cart button */}
            <button
              onClick={() => setCartOpen(true)}
              style={{
                position: "relative", background: "none", border: "2px solid #F5DEB3",
                borderRadius: 50, cursor: "pointer", padding: "7px 14px",
                display: "flex", alignItems: "center", gap: 6,
                fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
                fontSize: "0.88rem", color: "#2C1A0E",
                transition: "all 0.2s",
              }}
              aria-label="Open cart"
            >
              🛒
              {totalCount > 0 && (
                <span style={{
                  position: "absolute", top: -6, right: -6,
                  background: "#C47C3A", color: "#fff",
                  borderRadius: 50, fontSize: "0.65rem", fontWeight: 700,
                  minWidth: 18, height: 18, display: "flex", alignItems: "center", justifyContent: "center",
                  padding: "0 4px",
                }}>
                  {totalCount}
                </span>
              )}
            </button>
          </li>
          <li>
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa"
              style={{ padding: "9px 20px", fontSize: "0.88rem" }}
            >
              <WhatsAppIcon size={15} />
              Order Now
            </a>
          </li>
        </ul>

        {/* Hamburger (mobile) */}
        <button
          className={`hamburger${open ? " open" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Mobile: cart icon + hamburger
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <button
            onClick={() => setCartOpen(true)}
            className="hamburger"
            style={{ position: "relative", width: "auto", padding: "6px 10px", display: "flex", alignItems: "center" }}
            aria-label="Open cart"
          >
            <span style={{ fontSize: "1.15rem", lineHeight: 1 }}>🛒</span>
            {totalCount > 0 && (
              <span style={{
                position: "absolute", top: -4, right: -4,
                background: "#C47C3A", color: "#fff",
                borderRadius: 50, fontSize: "0.6rem", fontWeight: 700,
                minWidth: 16, height: 16, display: "flex", alignItems: "center", justifyContent: "center",
                padding: "0 3px",
              }}>
                {totalCount}
              </span>
            )}
          </button>

          <button
            className={`hamburger${open ? " open" : ""}`}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div> */}
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="mobile-menu animate-slide-down" role="dialog" aria-label="Navigation">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={pathname === l.href ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="wa-mobile-btn"
            onClick={() => setOpen(false)}
          >
            <WhatsAppIcon size={18} />
            Order on WhatsApp
          </a>
        </div>
      )}

      {/* Backdrop */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            top: "calc(var(--nav-h) + 100%)",
            background: "rgba(44,26,14,0.3)",
            zIndex: 198,
          }}
        />
      )}
    </>
  );
}
