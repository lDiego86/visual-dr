import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/50688971845?text=Hola,%20quiero%20trabajar%20con%20ustedes"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
    >
      <FaWhatsapp className="w-6 h-6" />
    </a>
  );
}