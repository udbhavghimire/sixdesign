import Image from 'next/image';
import Link from 'next/link';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const idxLinks = [
    { href: '/toronto-idx-website-for-realtors', text: 'Toronto Real Estate Website' },
    { href: '/brampton-idx-website-for-realtors', text: 'Brampton Real Estate Website' },
    { href: '/mississauga-idx-website-for-realtors', text: 'Mississauga Real Estate Website' },
    { href: '/edmonton-idx-website-for-realtors', text: 'Edmonton Real Estate Website' },
    { href: '/vancouver-idx-website-for-realtors', text: 'Vancouver Real Estate Website' },
    { href: '/calgary-idx-website-for-realtors', text: 'Calgary Real Estate Website' },
    { href: '/ottawa-idx-website-for-realtors', text: 'Ottawa Real Estate Website' },
    { href: '/regina-idx-website-for-realtors', text: 'Regina Real Estate Website' },
    { href: '/winnipeg-idx-website-for-realtors', text: 'Winnipeg Real Estate Website' },
  ];

  return (
    <>
      {/* Mouse Image */}
      <div className="flex justify-center mb-8 pt-32">
        <img
          src="/mouse.png"
          alt="Mouse Icon"
          className="w-50 h-50 object-contain"
        />
      </div>

      <footer className="pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 ">
            {/* Logo and Description - 4 columns */}
            <div className="md:col-span-4 flex flex-col items-center md:items-start">
              <Link href="/">
                <Image
                  src="/sixdesign-logo.svg"
                  alt="Sixdesigns logo"
                  width={60}
                  height={30}
                  className="mb-8"
                />
              </Link>
              <p className="text-[15px] leading-relaxed text-gray-600 text-center md:text-left">
                We specialize in creating high-quality websites, captivating landing pages, and visually
                appealing designs tailored for realtors, brokerages, and builders. Please note that the
                information provided on this website is for general reference only, and we cannot be held liable
                for any misuse of the content, including copyrighted materials such as logos and images from
                builders
              </p>
            </div>

            {/* About Section */}
            <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left pt-8 md:pt-16 ml-20">
              <div className="w-full max-w-xs text-center">
                <h5 className="text-xl font-bold mb-4 text-center">About</h5>
                <div className="space-y-2">
                  <p className="text-[15px] text-gray-600">Company : Sixdesign</p>
                  <p className="text-[15px] text-gray-600">
                    Services : Project Marketing, CRM Integration & Branding for Realtors, Brokerages &
                    Builders
                  </p>
                  <p className="text-[15px] text-gray-600">Contact : 647-527-4970</p>
                </div>
              </div>
            </div>

            {/* IDX Links Section */}
            <div className="md:col-span-4 flex flex-col items-center md:items-end text-center md:text-left pt-16">
              <div className="w-full max-w-xs">
                <h5 className="text-xl font-bold mb-4">Idx Website for Realtors</h5>
                <ul className="space-y-2">
                  {idxLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-[15px] text-gray-600 hover:text-primary transition-colors duration-300"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mt-24 max-w-lg mx-auto">
            <form action="./contactForm.php" method="POST" className="space-y-6">
              <h6 className="text-2xl font-bold text-center">SUBSCRIBE TO NEWSLETTER</h6>
              <div className="grid grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="h-16 px-6 bg-[#F8F9FC] border-0 rounded-xl text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="h-16 px-6 bg-[#F8F9FC] border-0 rounded-xl text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              <Button
                type="submit"
                className="w-full h-16 bg-black text-white text-xl hover:bg-gray-800 rounded-xl"
              >
                Subscribe Now
              </Button>
              <div className="flex justify-center pt-2">
                <Link href="https://www.instagram.com/sixdesign_ca/" target="_blank">
                  <Image
                    src="/instagram.svg"
                    alt="instagram"
                    width={24}
                    height={24}
                  />
                </Link>
              </div>
            </form>
          </div>

          {/* Signature Section */}
          <div className="flex flex-col items-center justify-center mt-20">
            <p className="font-bold text-center mb-2">Designed with love by</p>
            <Image
              src="/udbhav-black-signtaure.png"
              alt="Signature"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer; 