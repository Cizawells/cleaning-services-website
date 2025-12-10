import { StaticImageData } from "next/image";

import eventThumb_1 from "@/assets/img/events/event1.jpg";
import eventThumb_2 from "@/assets/img/events/event2.jpg";
import eventThumb_3 from "@/assets/img/events/event3.jpg";
import eventThumb_4 from "@/assets/img/events/event4.jpg";
import eventThumb_5 from "@/assets/img/events/event5.jpg";
import eventThumb_6 from "@/assets/img/events/event6.jpg";

import event2Thumb_1 from "@/assets/img/events/event-two1.jpg";
import event2Thumb_2 from "@/assets/img/events/event-two2.jpg";
import event2Thumb_3 from "@/assets/img/events/event-two3.jpg";
import event2Thumb_4 from "@/assets/img/events/event-two4.jpg";

import event3Thumb_1 from "@/assets/img/events/event-three1.jpg";
import event3Thumb_2 from "@/assets/img/events/event-three2.jpg";
import event3Thumb_3 from "@/assets/img/events/event-three3.jpg";

import eventInnerThumb_1 from "@/assets/img/events/event-three1.jpg";
import eventInnerThumb_2 from "@/assets/img/events/event-three2.jpg";
import eventInnerThumb_3 from "@/assets/img/events/event-three3.jpg";
import eventInnerThumb_4 from "@/assets/img/events/event-three4.jpg";
import eventInnerThumb_5 from "@/assets/img/events/event-three5.jpg";
import eventInnerThumb_6 from "@/assets/img/events/event-three6.jpg";
import eventInnerThumb_7 from "@/assets/img/events/event-three7.jpg";
import eventInnerThumb_8 from "@/assets/img/events/event-three8.jpg";
import eventInnerThumb_9 from "@/assets/img/events/event-three9.jpg";

interface DataType {
  id: number;
  page: string;
  thumb: StaticImageData;
  title: string;
  date?: string | number;
  city: string;
  time?: string;
  item_bg?: string;
  desc?: string;
}

const event_data: DataType[] = [
  // home one
  {
    id: 1,
    page: "home_1",
    thumb: eventThumb_1,
    title: "Community Cleaning Day",
    date: "Jan 18, 2023",
    city: "Melbourne City",
  },
  {
    id: 2,
    page: "home_1",
    thumb: eventThumb_2,
    title: "Office Deep Cleaning",
    date: "Feb 10, 2023",
    city: "Melbourne City",
  },
  {
    id: 3,
    page: "home_1",
    thumb: eventThumb_3,
    title: "Park Cleanup Initiative",
    date: "Mar 15, 2023",
    city: "Melbourne City",
  },
  {
    id: 4,
    page: "home_1",
    thumb: eventThumb_4,
    title: "Street Sweeping Campaign",
    date: "Apr 22, 2023",
    city: "Melbourne City",
  },
  {
    id: 5,
    page: "home_1",
    thumb: eventThumb_5,
    title: "School Cleaning Drive",
    date: "May 18, 2023",
    city: "Melbourne City",
  },
  {
    id: 6,
    page: "home_1",
    thumb: eventThumb_6,
    title: "Community Recycling Day",
    date: "Jun 12, 2023",
    city: "Melbourne City",
  },

  // home two
  {
    id: 1,
    page: "home_2",
    thumb: event2Thumb_1,
    title: "Neighborhood Cleaning",
    time: "Sunday, 08:00am",
    city: "Melbourne City",
    date: 25,
  },
  {
    id: 2,
    page: "home_2",
    thumb: event2Thumb_2,
    title: "Beach Cleanup Drive",
    time: "Friday, 10:00am",
    city: "Kinchiden, USA",
    date: 28,
    item_bg: "event-two-item--green",
  },
  {
    id: 3,
    page: "home_2",
    thumb: event2Thumb_3,
    title: "Office Declutter Session",
    time: "Monday, 02:00pm",
    city: "Old City London",
    date: 30,
    item_bg: "event-two-item--yellow",
  },
  {
    id: 4,
    page: "home_2",
    thumb: event2Thumb_4,
    title: "Park Beautification",
    time: "Saturday, 09:00pm",
    city: "Mownten City",
    date: 31,
  },

  // home three
  {
    id: 1,
    page: "home_3",
    thumb: event3Thumb_1,
    title: "Community Street Cleaning",
    time: "Jan 18, 2023",
    city: "Mownten City",
    desc: "Join our volunteers to clean streets and public areas to maintain a healthy environment.",
  },
  {
    id: 2,
    page: "home_3",
    thumb: event3Thumb_2,
    title: "Neighborhood Recycling",
    time: "Jan 20, 2023",
    city: "Mownten City",
    desc: "Support our recycling drive to reduce waste and protect our community.",
    item_bg: "item--green",
  },
  {
    id: 3,
    page: "home_3",
    thumb: event3Thumb_3,
    title: "School Cleanup Campaign",
    time: "Jan 22, 2023",
    city: "Mownten City",
    desc: "Help make local schools clean and safe for children to learn and play.",
    item_bg: "item--yellow",
  },

  // inner page
  {
    id: 1,
    page: "inner_page",
    thumb: eventInnerThumb_1,
    title: "City Park Cleaning",
    time: "Jan 18, 2023",
    city: "Melbourne City",
    desc: "Volunteer to clean and maintain city parks for a greener community.",
    item_bg: "item--yellow",
  },
  {
    id: 2,
    page: "inner_page",
    thumb: eventInnerThumb_2,
    title: "Community Recycling Event",
    time: "Jan 18, 2023",
    city: "Melbourne City",
    desc: "Participate in our recycling drive to reduce waste and promote sustainability.",
    item_bg: "item--green",
  },
  {
    id: 3,
    page: "inner_page",
    thumb: eventInnerThumb_3,
    title: "Street Cleaning Campaign",
    time: "Jan 18, 2023",
    city: "Melbourne City",
    desc: "Join our volunteers to clean local streets and public spaces for a cleaner city.",
    item_bg: "item--yellow",
  },
  // You can continue the same pattern for all other inner_page events...
];

export default event_data;
