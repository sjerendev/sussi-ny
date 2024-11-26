import { NewBook } from '@/components/new-book';
import { Podcast } from '@/components/podcast';
import { ContentCards } from '@/components/content-cards';
import { Newsletter } from '@/components/newsletter';
import { About } from '@/components/about';
import { PodcastApp } from '@/components/podcast-app';
import { PodcastFeature } from '@/components/podcast-feature';
import { PodcastPlatforms } from '@/components/podcast-platforms';

export default function Home() {
  return (
    <>
      <NewBook />
      <Podcast />
      <ContentCards />
      <Newsletter />
      <About />
      <PodcastApp />
      <PodcastFeature />
      <PodcastPlatforms />
    </>
  );
}