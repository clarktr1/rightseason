import HomeComponent from "./components/home/page";

export const metadata = {
  title: 'The Right Season',
  description:
    'Fresh, seasonal ingredients crafted into unforgettable meals. Experience culinary excellence on wheels, bringing farm-to-table dining to your neighborhood.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'The Right Season Mobile Kitchen',
    description:
      'Fresh, seasonal ingredients crafted into unforgettable meals. Experience culinary excellence on wheels, bringing farm-to-table dining to your neighborhood.',
    images: [
      {
        url: '/assets/logo.png',
        width: 1200,
        height: 630,
        alt: 'The Right Season Mobile Kitchen'
      }
    ],
  },
};

export default function Home() {
  return (
    <div className="space-y-0">
      <HomeComponent />
    </div>
  );
}
