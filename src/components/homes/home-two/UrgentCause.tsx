import Image from "next/image"
import Link from "next/link"

import urgentCauseThumb from "@/assets/img/causes/urgent-causes-left.png"

const UrgentCause = () => {
   return (
      <div className="urgent-cause-two py-120">
         <div className="container">
            <div className="urgent-cause-inner bgs-cover p-60 py-120" style={{ backgroundImage: `url(/assets/img/causes/urgent-causes-bg.jpg)` }}>
               <div className="row gap-40 align-items-center">
                  <div className="col-lg-6">
                     <div className="urgent-cause-left-image rmb-65">
                        <Image src={urgentCauseThumb} alt="Causes" />
                     </div>
                  </div>
                  
                  <div className="col-lg-6">
                     <div className="urgent-cause-right-content">
                        <div className="section-title mb-30">
                           <span className="section-title__subtitle mb-30">Urgent Service</span>
                           <h2>Emergency Deep Cleaning <span>Available Now</span></h2>
                        </div>

                        <p>
                           When spills, stains, or unexpected messes happen, our team is ready to respond quickly.
                           We offer fast and professional deep cleaning services for homes, offices, and commercial spaces.
                           Your environment will look spotless, fresh, and healthy again — within hours.
                        </p>
                           <div className="cause-price mt-30">
                           <span>Completed : $87,689</span>
                           <span>Remaining : $87,689</span>
                        </div>
                        <div className="progress">
                           <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "60%" }}></div>
                        </div>
                        <div className="urgent-cause-btn">
                           <Link className="cr-btn" href="#">Book Now</Link>
                           <Link className="cr-btn btn--green" href="#">View Details</Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default UrgentCause
