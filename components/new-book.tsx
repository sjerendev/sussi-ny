import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function NewBook() {
  return (
    <section className="bg-[--primary] relative overflow-hidden">
      <div className="gradient-glow absolute inset-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              My New Book Is Here!
            </h1>
            <p className="text-xl text-white/90 mb-8">
              The all-new "Science-backed tools of behavior change, encouragement and support you need to create a better life."
            </p>
            <Button 
              size="lg"
              className="bg-[--yellow] hover:bg-[--yellow]/90 text-black font-semibold"
            >
              Learn More
            </Button>
          </div>
          <div className="relative">
            <Image
              src="/book-cover.png"
              alt="Let Them Think Book Cover"
              width={400}
              height={600}
              className="mx-auto transform rotate-12 drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}