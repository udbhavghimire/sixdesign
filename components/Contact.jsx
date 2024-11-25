import Image from 'next/image';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="pt-32 md:pt-32">
      <div className="container mx-auto px-4">
        {/* Banner Image */}
        <div className="relative w-full h-[200px] md:h-[300px] mb-4">
          <Image
            src="/contact-img.webp"
            alt="Contact Banner"
            fill
            className="object-contain rounded-3xl"
            priority
          />
        </div>

        {/* Form Section */}
        <div className="max-w-3xl mx-auto">
          <form action="./contactForm.php" method="POST" className="space-y-4 md:space-y-6">
            {/* Name Field */}
            <div>
              <Input
                type="text"
                placeholder="Name"
                name="name"
                className="h-16 px-4 md:px-6 bg-[#f1f3fa] border-0 rounded-xl md:rounded-2xl text-base md:text-lg text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-500"
              />
            </div>

            {/* Phone and Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <Input
                type="tel"
                placeholder="Phone"
                name="phone"
                className="h-16 px-4 md:px-6 bg-[#f1f3fa] border-0 rounded-xl md:rounded-2xl text-base md:text-lg text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-500"
              />
              <Input
                type="email"
                placeholder="Email"
                name="email"
                className="h-16 px-4 md:px-6 bg-[#f1f3fa] border-0 rounded-xl md:rounded-2xl text-base md:text-lg text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-500"
              />
            </div>

            {/* Message Field */}
            <div>
              <Textarea
                placeholder="Enter your message"
                name="message"
                rows={6}
                className="min-h-[120px] md:min-h-[160px] px-4 md:px-6 py-4 md:py-5 bg-[#f1f3fa] border-0 rounded-xl md:rounded-2xl text-base md:text-lg text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-500 resize-none"
              />
            </div>

            {/* Consent Text */}
            <p className="text-xs text-gray-500 text-center px-4">
              I consent to receive future communications about Sixdesigns. I understand I can opt out at anytime by sending an email.
            </p>

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button
                type="submit"
                className="px-4 md:px-6 py-4 md:py-6 text-xl md:text-xl font-normal bg-black hover:bg-gray-800 rounded-xl md:rounded-xl text-white px-6 "
              >
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 