import { Link } from "react-router-dom";
import EventCard from "./Event";

export default function Events() {

  // Array of event data
  const events = [
    {
      title: "Technology acquisitions 2021",
      desc: "Here are the biggest enterprise technology acquisitions.",
      imgSrc: "/images/events/kleosupcoming.jpg",
      link: "#",
    },
    {
      title: "AI Conference 2022",
      desc: "The latest trends in AI and machine learning.",
      imgSrc: "/images/events/kleosupcoming.jpg",
      link: "#",
    },
    {
      title: "Blockchain Summit",
      desc: "Exploring the future of decentralized finance.",
      imgSrc: "/images/events/kleosupcoming.jpg",
      link: "#",
    },
    {
      title: "Cloud Computing Expo",
      desc: "Innovations in cloud infrastructure and services.",
      imgSrc: "/images/events/kleosupcoming.jpg",
      link: "#",
    },
    {
      title: "Cybersecurity Forum",
      desc: "Protecting digital assets in an interconnected world.",
      imgSrc: "/images/events/kleosupcoming.jpg",
      link: "#",
    },
  ];

  return (
    <section className="overflow-hidden pb-25 pt-45 lg:pb-32.5 lg:pt-50 xl:pb-27.5 xl:pt-45">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <p className="mt-4 flex justify-start ml-20 mb-5 text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
            All Registered Events
          </p>
          <div className="mt-4 flex justify-end mr-16 mb-5">
            <nav className="text-gray-500 dark:text-gray-400 mr-5">
              <ul className="flex space-x-2">
                <li>
                  <Link to="/profile" className="hover:underline text-gray-800 dark:text-white">
                    Settings
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <p className="text-gray-800 dark:text-white">
                    Events
                  </p>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="flex justify-center p-10 bg-gray-100 dark:bg-[#2A2E35] rounded-lg shadow-md mr-20 ml-20">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-y-1 gap-x-5 m-2 p-5 bg-gray-100 dark:bg-[#2A2E35] rounded-lg">
            {events.map((event, index) => (
              <EventCard
                key={index}
                title={event.title}
                desc={event.desc}
                imgSrc={event.imgSrc}
                link={event.link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
