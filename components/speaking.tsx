import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function Speaking() {
  return (
    <section className="section-padding bg-[--secondary] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Book Mel For Your Next Event
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              One of the most sought-after speakers in the world, Mel delivers high-impact keynotes that combine compelling science, memorable stories, and actionable tools.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Fortune 500 Companies",
                "Leadership Conferences",
                "Sales Kickoffs",
                "Women's Events",
                "Virtual Presentations"
              ].map((item) => (
                <li key={item} className="flex items-center space-x-3 text-lg">
                  <Check className="w-6 h-6 text-[--primary]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button 
              size="lg"
              className="bg-[--primary] hover:bg-[--primary]/90 text-white"
            >
              Inquire About Speaking
            </Button>
          </div>
          
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80"
              alt="Mel Robbins speaking on stage"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}