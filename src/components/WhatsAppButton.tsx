import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = "919876543210"; 
  const message = "Hi Hair Healer! I'd like to order the Hair Healer Oil or know more about it.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="sticky-cta px-5"
    >
      <MessageCircle size={24} />
      <span className="text-sm font-bold uppercase tracking-widest">Order via WhatsApp</span>
    </a>
  );
}
