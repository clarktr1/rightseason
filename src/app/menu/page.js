import MenuComponent from "../components/menu/page";

export const metadata = {
  title: 'Menu',
  description:
    'Check out our delicious menu made with fresh and local ingredients!',
  openGraph: {
    title: 'The Right Season Mobile Kitchen - Menu',
    description:
    'Check out our delicious menu made with fresh and local ingredients!',
      images: [
      {
        url: '/assets/logo.png',
        width: 1200,
        height: 630,
        alt: 'The Right Season Mobile Kitchen'
      }
    ],
  },
}

export default function Menu() {

  return (
   <>
    <MenuComponent />
   </>
  );
}
