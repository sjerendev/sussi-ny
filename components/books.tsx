import Image from "next/image";
import { Button } from "@/components/ui/button";

const books = [
  {
    title: "The High 5 Habit",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80",
    description: "The simple yet powerful habit that will transform your confidence and create extraordinary results in your life.",
  },
  {
    title: "The 5 Second Rule",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80",
    description: "The secret to changing anything in your life. More than 1 million copies sold worldwide.",
  },
  {
    title: "Take Control",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80",
    description: "The #1 audiobook on Audible. Learn how to stop worrying and start living with practical tools for anxiety.",
  },
];

export function Books() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[--secondary]">
            #1 Bestselling Books
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Life-changing strategies and tools that have helped millions of readers worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {books.map((book) => (
            <div key={book.title} className="group">
              <div className="relative aspect-[2/3] mb-6 rounded-lg overflow-hidden shadow-xl transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[--secondary]">{book.title}</h3>
              <p className="text-gray-600 mb-6">{book.description}</p>
              <Button 
                className="w-full bg-[--primary] hover:bg-[--primary]/90 text-white"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}