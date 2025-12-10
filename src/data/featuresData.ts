import { StaticImageData } from "next/image";

import features3Bg_1 from "@/assets/img/features/feature-bg-red.jpg"
import features3Bg_2 from "@/assets/img/features/feature-bg-green.jpg"
import features3Bg_3 from "@/assets/img/features/feature-bg-yellow.jpg"

interface DataType {
   id: number;
   page:string;
   icon_bg?: string;
   icon_name?: string;
   title: string;
   desc: string;
   btn_bg?: string;
   bg_img?: StaticImageData;
   item_bg?:string;
}

const features_data: DataType[] = [
   {
      id: 1,
      page:"home_1",
      icon_name: "flaticon-help",
      title: "Book a Cleaning Service",
      desc: "Schedule your home or office cleaning quickly and efficiently with our expert team.",
   },
   {
      id: 2,
      page:"home_1",
      icon_name: "flaticon-solidarity",
      icon_bg: "feature-item__icon--green",
      title: "Deep Cleaning",
      desc: "Professional deep cleaning to make every corner sparkle, ensuring a healthy environment.",
   },
   {
      id: 3,
      page:"home_1",
      icon_name: "flaticon-donation",
      icon_bg: "feature-item__icon--yellow",
      title: "Eco-Friendly Cleaning",
      desc: "We use eco-friendly cleaning products to keep your space safe and green.",
   },
   {
      id: 4,
      page:"home_1",
      icon_name: "flaticon-solidarity",
      icon_bg: "feature-item__icon--green",
      title: "Quick Fundraising",
      desc: "Lorem ipsum dolor sit amet consect cingo eiusmod tempor sentence structures to generate Lorem Ipsum",
   },

   // home one single features
   {
      id: 1,
      page:"single_features",
      title: "Child Education Help",
      desc: "Your little help can make milion childrean smile model sentence structures",
   },
   {
      id: 2,
      page:"single_features",
      title: "Child Education Help",
      desc: "Your little help can make milion childrean smile model sentence structures",
      btn_bg: "btn--yellow",
   },
   {
      id: 3,
      page:"single_features",
      title: "Child Education Help",
      desc: "Your little help can make milion childrean smile model sentence structures",
      btn_bg: "btn--green",
   },

   // home two

   {
      id:1,
      page:"home_2",
      icon_name:"flaticon-help",
      title:"Services",
      desc:"We provide a wide range of expert cleaning services across the UK.",
   },
   {
      id:2,
      page:"home_2",
      icon_name:"flaticon-donation",
      title:"Book a Cleaning Service",
      desc:"Fast and reliable cleaning services for your home, office, or commercial space.",
      item_bg:"feature-item--green",
   },
   {
      id:3,
      page:"home_2",
      icon_name:"flaticon-solidarity",
      title:"Reliable Services",
      desc:"Trusted cleaning services that leave your home or office spotless every time.",
      item_bg:"feature-item--yellow",
   },

   // home three
   
   {
      id:1,
      page:"home_3",
      bg_img:features3Bg_1,
      icon_name:"flaticon-solidarity",
      title:"Get Inspire And Help",
      desc:"Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
   }, 
   {
      id:2,
      page:"home_3",
      bg_img:features3Bg_2,
      icon_name:"flaticon-heart",
      title:"Send Us Donations",
      desc:"Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
   }, 
   {
      id:3,
      page:"home_3",
      bg_img:features3Bg_3,
      icon_name:"flaticon-help",
      title:"Become a volunteer",
      desc:"Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
   },
]

export default features_data;