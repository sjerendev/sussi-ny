import Image from 'next/image';
import Link from 'next/link';

const platforms = [
  {
    name: "Apple Podcasts",
    icon: "/apple-podcasts.svg",
    url: "https://podcasts.apple.com"
  },
  {
    name: "Spotify",
    icon: "/spotify.svg",
    url: "https://spotify.com"
  },
  {
    name: "Google Podcasts",
    icon: "/google-podcasts.svg",
    url: "https://podcasts.google.com"
  },
  {
    name: "Amazon Music",
    icon: "/amazon-music.svg",
    url: "https://music.amazon.com"
  }
];

export function PodcastPlatforms() {
  return (
    <section className="section-padding bg-[--accent]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Follow The Mel Robbins Podcast
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {platforms.map((platform) => (
            <Link
              key={platform.name}
              href={platform.url}
              className="flex flex-col items-center group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative w-16 h-16 mb-4 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={platform.icon}
                  alt={platform.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-medium text-gray-700 group-hover:text-[--primary]">
                {platform.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}