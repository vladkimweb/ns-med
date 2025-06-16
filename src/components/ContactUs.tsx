import Link from "next/link";

export const ContactUs = () => {
  // Данные для контактов (можно вынести в конфиг)
  const phoneNumber = "+7 (XXX) XXX-XX-XX"; // Замените на реальный номер
  const whatsappNumber = "79991234567"; // Номер WhatsApp (без + и пробелов)
  const whatsappMessage = "Здравствуйте! Я хочу записаться на консультацию.";

  return (
    <div className="bg-blue-50 p-6 rounded-lg max-w-md mx-auto my-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Свяжитесь с нами</h2>
      <p className="text-gray-600 mb-6">
        Мы готовы ответить на ваши вопросы о лечении и организации поездки.
      </p>

      {/* Телефон */}
      <Link
        href={`tel:${phoneNumber}`}
        className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 px-4 rounded-lg mb-3 hover:bg-blue-700 transition"
      >
        <PhoneIcon />
        <span>{phoneNumber}</span>
      </Link>

      {/* WhatsApp */}
      <Link
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition"
      >
        <WhatsAppIcon />
        <span>Написать в WhatsApp</span>
      </Link>
    </div>
  );
};

// Иконки в виде SVG (можно заменить на react-icons, если нужно)
const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
);