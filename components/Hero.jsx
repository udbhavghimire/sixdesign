import Image from 'next/image';

const Hero = () => {
  return (
    <div className="min-h-fit relative bg-white pt-24">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center min-h-[600px] lg:h-[calc(100vh-96px)]">
        <div className="w-full order-2 lg:order-1">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold leading-tight md:leading-none mb-5 pt-20">
            Stand Out From
            <br />
            The Crowd<span className="text-primary">.</span>
          </h1>
          <div className="md:w-2/4 w-full">
            <span className="text-xl md:text-2xl font-medium">
              Project Marketing, CRM Integration & Branding
            </span>
            <span className="ml-1 text-xl md:text-2xl text-gray-500">
             for Realtors, Brokerages & Builders
            </span>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <img
            src="/istockphoto-500558937-612x612.jpg"
            alt="Growing Plant"
            className="hero-img"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero; 