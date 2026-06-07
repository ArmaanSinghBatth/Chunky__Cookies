import { waLink } from "@/lib/data";
import WhatsAppIcon from "./WhatsAppIcon";

interface Props {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  message?: string;
}

export default function OrderCTA({
  title = "Ready to treat yourself? 🍪",
  subtitle = "Order fresh cookies straight to your doorstep. Just tap the button and send us a message — it's that simple.",
  buttonText = "Order Now on WhatsApp",
  message = "Hey Chunky Cookies! I'd like to place an order 🍪",
}: Props) {
  return (
    <div className="cta-banner">
      <h2
        className="display-md"
        style={{ color: "#FFF8EE", marginBottom: 14, position: "relative" }}
      >
        {title}
      </h2>
      <p
        style={{
          fontSize: "clamp(0.95rem,2.5vw,1.05rem)",
          color: "#F5DEB3",
          marginBottom: 32,
          maxWidth: 480,
          marginInline: "auto",
          lineHeight: 1.7,
          position: "relative",
        }}
      >
        {subtitle}
      </p>
      <a
        href={waLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-wa"
        style={{
          fontSize: "clamp(0.95rem,2.5vw,1.1rem)",
          padding: "clamp(13px,2vw,18px) clamp(24px,4vw,44px)",
          boxShadow: "0 8px 30px rgba(37,211,102,0.4)",
          position: "relative",
        }}
      >
        <WhatsAppIcon size={22} />
        {buttonText}
      </a>
    </div>
  );
}
