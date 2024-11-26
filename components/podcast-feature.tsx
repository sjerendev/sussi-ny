import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function PodcastFeature() {
  return (
    <section className="bg-black text-white section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The <span className="text-[--primary]">#1 Podcast</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Tune in and buckle up – your life is about to change. New episodes drop every Monday and Thursday (to get you through!).
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Mel's honest, research-backed advice has made her one of the most listened to podcasters in the world. Join millions of people who start their week with The Mel Robbins Podcast.
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
              src="/podcast-feature.jpg"
              alt="Mel Robbins Podcast Feature"
              width={500}
              height={500}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}