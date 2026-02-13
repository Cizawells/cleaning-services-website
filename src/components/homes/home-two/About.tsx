"use client";
import Image from "next/image";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

interface ContentData {
  sub_title: string;
  title: string;
  desc: string;
  list: string[];
  gallery: any[];
  aboutUsImage: string;
}

const About = () => {
  const [contentData, setContentData] = useState<ContentData>({
    sub_title: "About Us",
    title: "Professional Cleaning Services",
    desc: "We provide top-quality residential and commercial cleaning services designed to make your space fresh, spotless, and healthy.",
    list: [
      "Premium residential cleaning",
      "Office & commercial cleaning",
      "Eco-friendly products used",
      "Deep cleaning specialists",
      "Flexible scheduling options",
      "Professional & trusted team",
    ],
    gallery: [],
    aboutUsImage: "/assets/img/clean/2.jpg",
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const homepage = await client.fetch(`*[_type == "homepage"][0]`, {}, {
          next: { tags: ['homepage'], revalidate: 60 }
        });
        
        const aboutUsTitle = homepage?.aboutUsTitle || "Professional Cleaning Services";
        const aboutUsText = homepage?.aboutUsText || "We provide top-quality residential and commercial cleaning services designed to make your space fresh, spotless, and healthy.";
        const aboutUsImage = homepage?.aboutUsImage ? urlFor(homepage.aboutUsImage).url() : "/assets/img/clean/2.jpg";
        const gallery = homepage?.aboutusGaller || [];
        const galleryUrls = gallery.map((img: any) => urlFor(img).url());

        setContentData({
          sub_title: "About Us",
          title: aboutUsTitle,
          desc: aboutUsText,
          list: [
            "Premium residential cleaning",
            "Office & commercial cleaning",
            "Eco-friendly products used",
            "Deep cleaning specialists",
            "Flexible scheduling options",
            "Professional & trusted team",
          ],
          gallery: galleryUrls,
          aboutUsImage,
        });
      } catch (error) {
        console.error("Error fetching about us data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

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
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const { sub_title, title, desc, list, gallery, aboutUsImage } = contentData;
  const galleryToDisplay = gallery.length > 0 ? gallery : [
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    "/assets/img/clean/3.jpg",
    "/assets/img/clean/5.jpg",
    "https://images.unsplash.com/photo-1599505606035-61e2e8f81634?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1527857050620-14bbb14ad601?w=400&h=300&fit=crop",
  ];

  return (
    <div className="about-us-two" id="about">
      <div className="container">
        <div className="row gap-100 align-items-center">
          <div className="col-xl-6">
            <div className="about-us-content-part mb-50">
              <div className="section-title mb-50">
                <span className="section-title__subtitle mb-10">
                  {sub_title}
                </span>
                <h2>{title}</h2>
              </div>
              <p>{desc}</p>
              <hr className="mt-40" />

              <Slider {...settings} className="about-middle-images row">
                {galleryToDisplay.map((imgUrl, i) => (
                  <div key={i} className="col-lg-4">
                    <div className="about-middle-images-item">
                      <Image
                        src={imgUrl}
                        alt="Cleaning Services"
                        width={300}
                        height={250}
                      />
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
              <Image
                src={aboutUsImage}
                alt="Professional cleaning Team"
                width={500}
                height={600}
              />
              <div
                className="experiences-year"
                style={{
                  backgroundImage: `url(https://images.unsplash.com/photo-1578654377249-e33cae98b126?w=200&h=200&fit=crop)`,
                }}
              >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
