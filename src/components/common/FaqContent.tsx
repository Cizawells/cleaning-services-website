import Image from "next/image";
import Count from "./Count";

import faqThumb from "@/assets/img/clean/3.jpg";

const FaqContent = () => {
  return (
    <>
      <Image src={faqThumb} alt="Man" />
      <div className="experiences-years">
        <span className="experiences-years__number">Cleaning</span>
        {/* <span className="experiences-years__text">cleaning</span> */}
      </div>
      <div className="counter-item counter-text-wrap">
        <div className="counter-item__content">
          {/* <span className="count-text" data-speed="3000" data-stop="80000"> */}
          {/* <Count number={80000} /> */}
          {/* </span> */}
          {/* <h5 className="counter-title">Volunteers</h5> */}
        </div>
      </div>

      <div className="project-complete">
        <div className="project-complete__icon">
          {/* <i className="flaticon-charity"></i> */}
        </div>
        <div className="project-complete__content">
          <h5>We Complate 10+ Projects</h5>
          <span></span>Welcome
        </div>
      </div>
    </>
  );
};

export default FaqContent;
