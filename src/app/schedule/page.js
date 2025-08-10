import ScheduleComponent from '../components/schedule/page.js'

const upcomingEvents = [
  {
    id: 1,
    name: "Hardin County Honda",
    address: "5608 N Dixie Hwy, Elizabethtown, KY 42701",
    time: "5:30 PM - 7:00 PM",
    dateNumber: "15",
    dateMonth: "Aug",
  },
  // Add more events here
];

  export const metadata = {
    title: 'Schedule',
    description:
      'See where we are so you can get a taste of our delicious food!',
    icons: {
      icon: '/facicon.ico'
    },
    openGraph: {
      title: 'The Right Season Mobile Kitchen - Schedule',
      description:
      'See where we are so you can get a taste of our delicious food!',
        images: [
        {
          url: 'favicon.ico',
          width: 1200,
          height: 630,
          alt: 'The Right Season Mobile Kitchen'
        }
      ],
    },
  }

export default function SchedulePage() {
  return (
    <>
      <ScheduleComponent events={upcomingEvents} />
    </>
  );
}
