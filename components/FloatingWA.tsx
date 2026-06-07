import { WA_DEFAULT } from "@/lib/data";
import WhatsAppIcon from "./WhatsAppIcon";

export default function FloatingWA() {
  return (
    <a
      href={WA_DEFAULT}
      target="_blank"
      rel="noopener noreferrer"
      title="Order on WhatsApp"
      className="float-wa animate-pulse-wa"
    >
      <WhatsAppIcon size={26} />
    </a>
  );
}
