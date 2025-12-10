import { StaticImageData } from "next/image";

interface DataType {
   id: number;
   page: string;
   thumb: string | StaticImageData;
   name: string;
   item_bg?: string;
}

const volunteer_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      thumb: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&q=80",
      name: "Robart Jonson",
      item_bg: "valunteer-item--green",
   },
   {
      id: 2,
      page: "home_1",
      thumb: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&q=80",
      name: "Leslie Alexander"
   },
   {
      id: 3,
      page: "home_1",
      thumb: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&q=80",
      name: "Kristin Watson",
      item_bg: "valunteer-item--yellow",
   },
   {
      id: 4,
      page: "home_1",
      thumb: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&q=80",
      name: "Guy Hawkins",
      item_bg: "valunteer-item--green",
   },
   {
      id: 5,
      page: "home_1",
      thumb: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&q=80",
      name: "Theresa Webb"
   },
   {
      id: 6,
      page: "home_1",
      thumb: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&q=80",
      name: "Brooklyn Simmons",
      item_bg: "valunteer-item--yellow",
   },

   // home two

   {
      id: 1,
      page: "home_2",
      thumb: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&q=80",
      name: "Brooklyn Simmons"
   },
   {
      id: 2,
      page: "home_2",
      thumb: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&q=80",
      name: "Savannah Nguyen",
      item_bg: "valunteer-two-item__des--yellow",
   },
   {
      id: 3,
      page: "home_2",
      thumb: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&q=80",
      name: "Darrell Steward",
      item_bg: "valunteer-two-item__des--green",
   },
   {
      id: 4,
      page: "home_2",
      thumb: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&q=80",
      name: "Leslie Alexander"
   },
   {
      id: 5,
      page: "home_2",
      thumb: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&q=80",
      name: "Brooklyn Simmons"
   },
   {
      id: 6,
      page: "home_2",
      thumb: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&q=80",
      name: "Savannah Nguyen",
      item_bg: "valunteer-two-item__des--yellow",
   },
   {
      id: 7,
      page: "home_2",
      thumb: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&q=80",
      name: "Darrell Steward",
      item_bg: "valunteer-two-item__des--green",
   },
   {
      id: 8,
      page: "home_2",
      thumb: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&q=80",
      name: "Leslie Alexander"
   },

   // home three

   {
      id: 1,
      page: "home_3",
      thumb: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&q=80",
      name: "Brooklyn Simmons"
   },
   {
      id: 2,
      page: "home_3",
      thumb: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&q=80",
      name: "Savannah Nguyen"
   },
   {
      id: 3,
      page: "home_3",
      thumb: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&q=80",
      name: "Darrell Steward"
   },
   {
      id: 4,
      page: "home_3",
      thumb: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&q=80",
      name: "Leslie Alexander"
   },
   {
      id: 5,
      page: "home_3",
      thumb: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&q=80",
      name: "Brooklyn Simmons"
   },
   {
      id: 6,
      page: "home_3",
      thumb: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&q=80",
      name: "Savannah Nguyen"
   },
   {
      id: 7,
      page: "home_3",
      thumb: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&q=80",
      name: "Darrell Steward"
   },
   {
      id: 8,
      page: "home_3",
      thumb: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&q=80",
      name: "Leslie Alexander"
   },
]

export default volunteer_data;