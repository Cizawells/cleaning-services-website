import { StaticImageData } from "next/image";

import causeThumb_1 from "@/assets/img/causes/cause1.jpg";
import causeThumb_2 from "@/assets/img/causes/cause2.jpg";
import causeThumb_3 from "@/assets/img/causes/cause3.jpg";

import cause2Thumb_1 from "@/assets/img/causes/cause-two1.jpg";
import cause2Thumb_2 from "@/assets/img/causes/cause-two2.jpg";
import cause2Thumb_3 from "@/assets/img/causes/cause-two3.jpg";
import cause2Thumb_4 from "@/assets/img/causes/cause-two4.jpg";
import cause2Thumb_5 from "@/assets/img/causes/cause-two5.jpg";
import cause2Thumb_6 from "@/assets/img/causes/cause-two6.jpg";
import cause2Thumb_7 from "@/assets/img/causes/cause-two7.jpg";
import cause2Thumb_8 from "@/assets/img/causes/cause-two8.jpg";
import cause2Thumb_9 from "@/assets/img/causes/cause-two9.jpg";

import cause3Thumb_1 from "@/assets/img/causes/cause-three1.jpg";
import cause3Thumb_2 from "@/assets/img/causes/cause-three2.jpg";
import cause3Thumb_3 from "@/assets/img/causes/cause-three3.jpg";

import recentCauseThumb_1 from "@/assets/img/widgets/cause1.jpg";
import recentCauseThumb_2 from "@/assets/img/widgets/cause2.jpg";
import recentCauseThumb_3 from "@/assets/img/widgets/cause3.jpg";

interface DataType {
   id: number;
   page: string;
   img: StaticImageData;
   title: string;
   desc?: string;
   raised: number;
   goal: number;
   progress_width?: string | number;
   progress_bg?: string;
   btn_bg?: string;
   price_color?: string;
   item_bg?: string;
   percentage?: number;
}

const cause_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      img: causeThumb_1,
      title: "Home Deep Cleaning",
      desc: "Professional deep cleaning service for your home, ensuring every corner is spotless.",
      raised: 5000,
      goal: 10000,
      progress_width: "50%",
   },
   {
      id: 2,
      page: "home_1",
      img: causeThumb_2,
      title: "Office Sanitization",
      desc: "Keep your workplace clean and hygienic with our specialized office cleaning services.",
      raised: 3000,
      goal: 8000,
      progress_width: "40%",
      progress_bg: "progress-bar--yellow",
      btn_bg: "btn--yellow",
   },
   {
      id: 3,
      page: "home_1",
      img: causeThumb_3,
      title: "Carpet & Upholstery Cleaning",
      desc: "We provide professional carpet and upholstery cleaning for a fresh, healthy environment.",
      raised: 7000,
      goal: 10000,
      progress_width: "70%",
      progress_bg: "progress-bar--green",
      btn_bg: "btn--green",
   },

   // Home two
   {
      id: 1,
      page: "home_2",
      img: cause2Thumb_1,
      title: "Window Cleaning",
      desc: "Shiny, streak-free windows for homes and offices with our expert cleaning team.",
      raised: 2500,
      goal: 5000,
      percentage: 50,
      progress_bg: "one",
   },
   {
      id: 2,
      page: "home_2",
      img: cause2Thumb_2,
      title: "Kitchen Deep Cleaning",
      desc: "Thorough cleaning of kitchen surfaces, appliances, and utensils for a safe environment.",
      raised: 4000,
      goal: 7000,
      percentage: 60,
      progress_bg: "two",
      btn_bg: "btn--yellow",
      price_color: "cause-price--yellow",
      item_bg: "cause-yellow",
   },
   {
      id: 3,
      page: "home_2",
      img: cause2Thumb_3,
      title: "Bathroom Sanitization",
      desc: "Comprehensive bathroom cleaning to remove germs, grime, and soap scum.",
      raised: 3500,
      goal: 6000,
      percentage: 55,
      progress_bg: "three",
      btn_bg: "btn--green",
      price_color: "cause-price--green",
      item_bg: "cause-green",
   },

   // Home three
   {
      id: 1,
      page: "home_3",
      img: cause3Thumb_1,
      title: "Post-Construction Cleaning",
      desc: "We clean newly built or renovated spaces, removing dust and debris effectively.",
      raised: 2000,
      goal: 8000,
      percentage: 25,
   },
   {
      id: 2,
      page: "home_3",
      img: cause3Thumb_2,
      title: "Move-In / Move-Out Cleaning",
      desc: "Professional cleaning services to make your moving process smooth and stress-free.",
      raised: 1500,
      goal: 5000,
      percentage: 30,
      item_bg: "item--green",
   },
   {
      id: 3,
      page: "home_3",
      img: cause3Thumb_3,
      title: "Industrial Cleaning",
      desc: "Specialized industrial cleaning services to maintain hygiene and safety standards.",
      raised: 4000,
      goal: 9000,
      percentage: 45,
      item_bg: "item--yellow",
   },

   // Inner Page
   {
      id: 1,
      page: "inner_page",
      img: cause2Thumb_1,
      title: "Window Cleaning",
      desc: "Shiny, streak-free windows for homes and offices with our expert cleaning team.",
      raised: 2500,
      goal: 5000,
      percentage: 50,
      progress_bg: "one",
   },
   {
      id: 2,
      page: "inner_page",
      img: cause2Thumb_2,
      title: "Kitchen Deep Cleaning",
      desc: "Thorough cleaning of kitchen surfaces, appliances, and utensils for a safe environment.",
      raised: 4000,
      goal: 7000,
      percentage: 60,
      progress_bg: "two",
      btn_bg: "btn--yellow",
      price_color: "cause-price--yellow",
      item_bg: "cause-yellow",
   },
   {
      id: 3,
      page: "inner_page",
      img: cause2Thumb_3,
      title: "Bathroom Sanitization",
      desc: "Comprehensive bathroom cleaning to remove germs, grime, and soap scum.",
      raised: 3500,
      goal: 6000,
      percentage: 55,
      progress_bg: "three",
      btn_bg: "btn--green",
      price_color: "cause-price--green",
      item_bg: "cause-green",
   },

   // Recent Services
   {
      id: 1,
      page: "inner_page_details",
      img: recentCauseThumb_1,
      title: "Car Cleaning Service",
      raised: 2000,
      goal: 5000,
   },
   {
      id: 2,
      page: "inner_page_details",
      img: recentCauseThumb_2,
      title: "Office Desk Sanitization",
      raised: 1500,
      goal: 3000,
   },
   {
      id: 3,
      page: "inner_page_details",
      img: recentCauseThumb_3,
      title: "Garden Cleaning",
      raised: 1800,
      goal: 4000,
   },
];

export default cause_data;
