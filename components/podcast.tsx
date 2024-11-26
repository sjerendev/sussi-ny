import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Podcast() {
  return (
    <section className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Create a Better Life With{' '}
              <span className="text-[--primary]">The Mel Robbins Podcast</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Find out why this podcast is the #1 education podcast on Spotify! New episodes drop every Monday and Thursday.
            </p>
            <Button 
              size="lg"
              className="bg-[--yellow] hover:bg-[--yellow]/90 text-black font-semibold"
            >
              Listen Now
            </Button>
          </div>
          <div className="relative">
            <Image
              src="/mel-podcast.jpg"
              alt="Mel Robbins Podcast"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}