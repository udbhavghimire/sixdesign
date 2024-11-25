"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const consultationButton = (
    <Button 
      variant="default" 
      className="bg-black text-lg text-white hover:bg-gray-800 rounded-xl px-6 py-6"
    >
      Book Free Consultation
    </Button>
  );

  return (
    <nav className="fixed w-full bg-white z-50 py-6">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/sixdesign-logo.svg" alt="SixDesign Logo" width={60} height={60} />
        </Link>

        {/* Button for Mobile - Show only on small screens */}
        <div className="md:hidden">
          {consultationButton}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Navigation Links */}
        <div className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-full left-0 right-0 bg-white md:bg-transparent flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 p-4 md:p-0 border-t md:border-t-0`}>
          <Link href="/our-work" className="text-black hover:text-black-900 font-medium">
            Our Work
          </Link>
          
          <Link href="/design-elements" className="text-black hover:text-black-900 font-medium">
            Design Elements
          </Link>

          <div className="relative group">
            <div className="flex items-center gap-1 text-black hover:text-black-900 font-medium cursor-pointer">
              REALTORS® <ChevronDown className="h-4 w-4" />
            </div>
            <div className="hidden group-hover:block absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[200px]">
              <Link href="/realtors" className="block px-4 py-2 hover:bg-gray-100">
                For Realtors
              </Link>
              <Link href="/brokerages" className="block px-4 py-2 hover:bg-gray-100">
                For Brokerages
              </Link>
              <Link href="/builders" className="block px-4 py-2 hover:bg-gray-100">
                For Builders
              </Link>
            </div>
          </div>

          {/* Button for Desktop - Show only on medium screens and up */}
          <div className="hidden md:block">
            {consultationButton}
          </div>

          <Link href="tel:6475274970" className="flex items-center gap-2">
            <Image 
              src="/call-img.png" 
              alt="Call button" 
              width={170} 
              height={170} 
              className="w-[120px] md:w-[170px]"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 