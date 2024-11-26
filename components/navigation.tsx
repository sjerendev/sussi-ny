"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/podcast", label: "Podcast" },
    { href: "/blog", label: "Blog" },
    { href: "/speaking", label: "Speaking" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className={cn(
      "fixed w-full z-50 transition-all duration-300",
      isScrolled ? "bg-white shadow-md" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link 
              href="/" 
              className={cn(
                "text-2xl font-bold transition-colors",
                isScrolled ? "text-[--secondary]" : "text-white"
              )}
            >
              Mel Robbins
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-medium transition-colors",
                  isScrolled 
                    ? "text-gray-600 hover:text-[--primary]" 
                    : "text-white/90 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button 
              className="bg-[--yellow] hover:bg-[--yellow]/90 text-black font-semibold"
            >
              Get Mel's Book
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "transition-colors",
                isScrolled ? "text-gray-600" : "text-white"
              )}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-gray-600 hover:text-[--primary]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Button 
                className="w-full bg-[--yellow] hover:bg-[--yellow]/90 text-black font-semibold"
              >
                Get Mel's Book
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}