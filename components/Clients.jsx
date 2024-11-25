import Image from 'next/image';

const Clients = () => {
  const clients = [
    // First row
    [
      { src: '/homebaba logo.svg', alt: 'Homebaba', className:'client-img2', href: 'https://homebaba.ca/' },
      { src: '/condomonk.png', alt: 'Condomonk', className:'client-img2', href: 'https://condomonk.ca/' },
      { src: '/dolphy.svg', alt: 'Dolphy', className:'client-img', href: './dolphy/' },
      { src: '/lowriselogo.svg', alt: 'Lowrise', className:'client-img', href: 'https://lowrise.ca/' },
      { src: '/icommission.png', alt: 'iCommission', className:'client-img', href: 'https://www.icommission.ca/' },
      { src: '/dolphin.png', alt: 'Dolphin Realty', className:'client-img', href: '#' },
      { src: '/baystreet.png', alt: 'Bay Street Group', className:'client-img', href: '#' },
      { src: '/elixar.png', alt: 'Elixir Real Estate', className:'client-img', href: '#' },
      { src: '/tony.png', alt: 'Tony Ning', className:'client-img', href: '#' },
      { src: '/CondoWong.webp', alt: 'Condo Wong', className:'client-img', href: '#' },
    ],
  ];

  return (
    <section className="pt-32 md:pt-32 pb-16 md:pb-32 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-[28px] md:text-4xl font-extrabold text-center mb-12">
          Some of our <span className="text-primary">trusted clients</span>
        </h2>
        
        <div className="space-y-10">
          {clients.map((row, rowIndex) => (
            <div 
              key={rowIndex}
              className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 items-center justify-items-center"
            >
              {row.map((client, index) => (
                <div 
                  key={index}
                  className="grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110"
                >
                  <a 
                    href={client.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <img
                      src={client.src}
                      alt={client.alt}
                      className={client.className}
                    />
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients; 