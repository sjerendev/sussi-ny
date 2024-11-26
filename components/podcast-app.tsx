import Image from 'next/image';

export function PodcastApp() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Mel gets more personal than ever, welcoming you into her life and talking you behind the scenes in real time.
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              You learned everything she teaches has been discovered through her own struggles, research that transformed her life and her desire not to suffer.
            </p>
          </div>
          <div className="relative">
            <div className="relative aspect-[9/16] max-w-[300px] mx-auto">
              <Image
                src="/podcast-app.png"
                alt="Mel Robbins Podcast App"
                width={300}
                height={600}
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}