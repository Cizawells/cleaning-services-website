"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import VideoPopup from "@/modals/VideoPopup";
import FaqAnswerQuestion from "@/components/common/FaqAnswerQuestion";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import faqThumb from "@/assets/img/video/faq-video.jpg";

const FAQ = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [faqData, setFaqData] = useState({
    faqTitle: "Frequently Asked Questions",
    faqText: "Find answers to common questions about our cleaning services.",
    faqVideoId: "tUP5S4YdEJo",
    faqVideoThumbnail: faqThumb,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const homepage = await client.fetch(`*[_type == "homepage"][0]`, {}, {
          next: { tags: ['homepage'], revalidate: 60 }
        });
        
        const thumbnail = homepage?.faqVideoThumbnail ? urlFor(homepage.faqVideoThumbnail).url() : faqThumb;
        
        setFaqData({
          faqTitle: homepage?.faqTitle || "Frequently Asked Questions",
          faqText: homepage?.faqText || "Find answers to common questions about our cleaning services.",
          faqVideoId: homepage?.faqVideoId || "tUP5S4YdEJo",
          faqVideoThumbnail: thumbnail,
        });
      } catch (error) {
        console.error("Error fetching FAQ data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="faq-area-two py-120">
        <div className="container">
          <div className="row gap-60">
            <div className="col-lg-6">
              <div className="faq-video-part rel">
                <Image src={faqData.faqVideoThumbnail} alt="Video" width={500} height={300} />
                <a
                  onClick={() => setIsVideoOpen(true)}
                  style={{ cursor: "pointer" }}
                  className="video-play video-play--two"
                  data-effect="mfp-zoom-in"
                >
                  <i className="fa fa-play"></i>
                </a>
              </div>
            </div>
            <FaqAnswerQuestion />
          </div>
        </div>
      </div>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={faqData.faqVideoId}
      />
      {/* video modal end */}
    </>
  );
};

export default FAQ;
