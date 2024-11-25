import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Work = () => {
  const projects = [
    { href: 'https://www.condowong.ca/', image: '/condowong-work.png', title: 'Condowong' },
    { href: 'https://www.icommission.ca/', image: '/19.png', title: 'iCommission' },
    { href: 'https://shrutidua.com/', image: '/4.png', title: 'Shruti Dua' },
    { href: 'https://knightsbridge-homes.ca/', image: '/7.png', title: 'Knightsbridge Homes' },
    { href: 'https://oakparkvillage.ca/', image: '/5.png', title: 'Oak Park Village' },
    { href: 'https://empire-wynfield.ca/', image: '/6.png', title: 'Empire Wyndield' },
    { href: 'https://queensland-condos.ca/', image: '/8.png', title: 'Queensland Condos' },
    { href: 'https://niagara77.ca/', image: '/9.png', title: 'Niagara77 Condos' },
    { href: 'https://boutintower.ca/', image: '/11.png', title: 'Boutin Tower' },
    { href: 'https://primontcondo.ca/', image: '/12.png', title: 'Primont Place Condos' },
    { href: 'https://www.arborwesthome.ca/', image: '/13.png', title: 'Arbor West Homes' },
    { href: 'https://thepickering.ca/', image: '/14.png', title: 'The Pickering' },
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-[28px] md:text-4xl font-extrabold text-center mb-8 md:mb-16">
          Some glimpses of <span className="text-primary">our work</span>
        </h2>

        <div className="grid grid-cols-2  md:grid-cols-3 gap-8 md:gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="space-y-3">
                <div className="relative overflow-hidden rounded-[0.5rem]">
                  <div className="aspect-w-16 aspect-h-12">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="text-center">
                  <p className="text-base md:text-lg font-medium text-gray-900 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="flex justify-center mt-8 md:mt-12">
          <Link 
            href="/our-work" 
            className="flex items-center gap-2 text-base md:text-lg text-gray-900 hover:text-primary transition-colors duration-300"
          >
            View all our work 
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Work; 