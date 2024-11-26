import Image from 'next/image';
import { Button } from '@/components/ui/button';

const cards = [
  {
    tag: "New Episode",
    title: "Dr. Gabor Maté: The Shocking Link Between ADHD, Depression, Disease, & Trauma",
    image: "/content-1.jpg"
  },
  {
    tag: "Popular",
    title: "The Real Reason You're Exhausted: How To Get Your Life & Your Time Back",
    image: "/content-2.jpg"
  },
  {
    tag: "Featured",
    title: "The #1 Money Hack To Live By: Understand The Psychology of Money",
    image: "/content-3.jpg"
  }
];

export function ContentCards() {
  return (
    <section className="bg-[--accent] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Science-backed tools, encouragement and
          </h2>
          <p className="text-xl">the support you need.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div key={card.title} className="group cursor-pointer">
              <div className="relative aspect-[4/3] mb-4">
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-[--blue] text-white px-3 py-1 rounded-full text-sm">
                    {card.tag}
                  </span>
                </div>
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold group-hover:text-[--primary] transition-colors">
                {card.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-[--yellow] hover:bg-[--yellow]/90 text-black font-semibold"
          >
            Listen Now
          </Button>
        </div>
      </div>
    </section>
  );
}