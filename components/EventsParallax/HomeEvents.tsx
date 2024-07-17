"use client";
import { EventParallax } from "@/components/EventsParallax/EventParallax";
import { products } from "@/components/EventsParallax/eventData";

export default function HomeEvents() {
  return <EventParallax products={products} />;
}
