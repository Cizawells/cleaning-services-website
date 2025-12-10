"use client"
import Image from "next/image"
import Slider from 'react-slick'

interface ContentData {
   sub_title: string;
   title: JSX.Element;
   desc: JSX.Element;
   list: string[];
}

const about_content: ContentData = {
   sub_title: "About Us",
   title: (<>Professional <span>Cleaning Services</span></>),
   desc: (<>We provide top-quality residential and commercial cleaning services designed to make your space fresh, spotless, and healthy. With trained cleaners, eco-friendly products, and attention to detail, we guarantee a cleaning experience you can trust.</>),
   list: [
         "Premium residential cleaning",
         "Office & commercial cleaning",
         "Eco-friendly products used",
         "Deep cleaning specialists",
         "Flexible scheduling options",
         "Professional & trusted team"
      ],
}

const about_img_data = [
   "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
   "https://images.unsplash.com/photo-1563453392-de7612edde00?w=400&h=300&fit=crop",
   "https://images.unsplash.com/photo-1584622180416-e897e59edd84?w=400&h=300&fit=crop",
   "https://images.unsplash.com/photo-1563453392-de7612edde00?w=400&h=300&fit=crop"
];

const { sub_title, title, desc, list } = about_content;

const About = () => {

   const settings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      fade: false,
      autoplaySpeed: 2000,
      responsive: [
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 3,
            }
         },
         {
            breakpoint: 991,
            settings: {
               slidesToShow: 3,
            }
         },
         {
            breakpoint: 575,
            settings: {
               slidesToShow: 2,
            }
         },
         {
            breakpoint: 375,
            settings: {
               slidesToShow: 1,
            }
         }
      ],
   }

   return (
      <div className="about-us-two">
         <div className="container">
            <div className="row gap-100 align-items-center">
               <div className="col-xl-6">
                  <div className="about-us-content-part mb-50">
                     <div className="section-title mb-50">
                        <span className="section-title__subtitle mb-10">{sub_title}</span>
                        <h2>{title}</h2>
                     </div>
                     <p>{desc}</p>
                     <hr className="mt-40" />

                     <Slider {...settings} className="about-middle-images row">
                        {about_img_data.map((imgUrl, i) => (
                           <div key={i} className="col-lg-4">
                              <div className="about-middle-images-item">
                                 <Image src={imgUrl} alt="Cleaning Services" width={300} height={250} />
                              </div>
                           </div>
                        ))}
                     </Slider>
                     <hr />

                     <ul className="list-style-one pt-15">
                        {list.map((li, index) => (
                           <li key={index}>{li}</li>
                        ))}
                     </ul>
                  </div>
               </div>
               
               <div className="col-xl-6">
                  <div className="about-us-image-part mb-65 rel">
                     <Image src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=700&fit=crop" alt="Professional Cleaning Team" width={500} height={600} />
                     <div className="experiences-year" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1578654377249-e33cae98b126?w=200&h=200&fit=crop)` }}>
                        <span className="experiences-year__number">10</span>
                        <span className="experiences-year__text">Years Experience</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default About
