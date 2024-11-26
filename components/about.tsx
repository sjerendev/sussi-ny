import Image from "next/image";
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section className="bg-[--accent] section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[--secondary]">
              Meet Mel Robbins
            </h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                Mel Robbins is the world's most booked female speaker and a New York Times bestselling author whose work has inspired billions of views and changed millions of lives.
              </p>
              <p>
                Her groundbreaking work on behavior change has made her one of the most sought-after experts in the world, working with top brands like Microsoft, JP Morgan Chase, LinkedIn, Cisco, and AT&T.
              </p>
              <p>
                Through her global platform, Mel empowers people with the mindset, tools, and motivation they need to change their lives.
              </p>
            </div>
            <Button 
              size="lg" 
              className="mt-8 bg-[--primary] hover:bg-[--primary]/90 text-white"
            >
              Learn More About Mel
            </Button>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
                alt="Mel Robbins"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}