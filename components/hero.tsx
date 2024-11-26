import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-black">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?auto=format&fit=crop&q=80"
          alt="Mel Robbins"
          fill
          className="object-cover opacity-60"
          priority
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            High Performance Habits That Will Change Your Life
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
            Join millions who have transformed their lives using science-backed strategies and tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="text-lg bg-[--primary] hover:bg-[--primary]/90 text-white border-0"
            >
              Start Your Journey
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg text-white border-white hover:bg-white hover:text-black"
            >
              Watch Free Training
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}