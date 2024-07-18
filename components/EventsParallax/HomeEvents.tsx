import { EventParallax } from "@/components/EventsParallax/EventParallax";
import { products } from "@/components/EventsParallax/eventData";

export default function HomeEvents() {
  return (
    <>
      <EventParallax products={products} />
      <div className="mt-10 mb-10 flex justify-center">
        <a
          href="https://forms.gle/TXnuxGRfgnMRtFqn9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            aria-label="get started button"
            className="flex items-center justify-center rounded-full bg-black px-10 py-3 text-lg text-white duration-300 ease-in-out hover:bg-gray-800 dark:bg-btndark dark:hover:bg-gray-800"
          >
            View All Events
          </button>
        </a>
      </div>
    </>
  );
}
