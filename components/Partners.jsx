import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Partners = () => {
  const partners = [
    {
      href: "https://homebaba.ca/",
      image: "/homebaba.png",
      title: "Homebaba",
    },
    {
      href: "https://condomonk.ca/",
      image: "/condomonk hero.png",
      title: "Condomonk",
    },
  ];

  return (
    <section className="mt-16 md:mt-32">
      <div className="container mx-auto px-4">
        <h2 className="text-[28px] md:text-4xl font-extrabold text-center mb-8 md:mb-16">
          Our Preconstruction <span className="text-primary">Partners</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mx-auto">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block "
            >
              <div className="space-y-3">
                <div className="relative overflow-hidden rounded-[0.5rem]">
                  <div className=" aspect-h-9 imghei2">
                    <Image
                      src={partner.image}
                      alt={partner.title}
                      fill
                      className="imghei2 transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="text-center">
                  <p className="text-base md:text-lg font-medium text-gray-900 group-hover:text-primary transition-colors duration-300">
                    {partner.title}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center mt-8 md:mt-12">
          <Link
            href="/pre-construction-list"
            className="text-base md:text-lg text-center text-gray-900 hover:text-primary transition-colors duration-300 inline-flex items-center"
          >
            Check out all the list of Preconstruction platforms and projects
            <ArrowRight className="inline-block ml-1 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Partners;
