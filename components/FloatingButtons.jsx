import Image from 'next/image';
import Link from 'next/link';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 md:hidden">
      {/* Contact Button */}
      <Link 
        href="#Contact" 
        className="shadow-lg rounded-xl bg-red-500 px-4 py-2 flex items-center justify-center"
      >
        <span className="text-white font-semibold whitespace-nowrap">
          Contact us
        </span>
      </Link>

      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/16475274970"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-[40px] h-[40px]"
      >
        <Image
          src="/whatsapp.png"
          alt="WhatsApp"
          width={40}
          height={40}
          className="object-contain"
        />
      </Link>
    </div>
  );
};

export default FloatingButtons; 