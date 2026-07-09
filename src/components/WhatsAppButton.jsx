import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-button"
      href="https://wa.me/5543996496660"
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar com a RBK pelo WhatsApp"
    >
      <MessageCircle size={28} strokeWidth={2.1} />
    </a>
  );
}
