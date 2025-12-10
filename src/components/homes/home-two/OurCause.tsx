import cause_data from "@/data/causeData"
import Image from "next/image"
import Link from "next/link"
import CircleProgress from "@/hooks/Circular"

import causeShape from "@/assets/img/shapes/three-round-green.png"

const OurCause = () => {
   return (
      <div className="our-cause-area pt-55 pb-90 rel z-1">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-8 col-md-10">
                  <div className="section-title text-center mb-50">
                     <span className="section-title__subtitle mb-10">Our Portfolio</span>
                     <h3>Recent <span>Cleaning Projects</span></h3>
                     <p>Explore some of our recent professional cleaning jobs completed for homes and businesses.</p>
                  </div>
               </div>
            </div>
            
            <div className="row justify-content-center">
               {cause_data.filter((item) => item.page === "home_2").slice(0,3).map((item) => (
                  <div key={item.id} className="col-xl-4 col-md-6">
                     <div className={`cause-two-item ${item.item_bg}`}>
                        <div className="image">
                           <Image src={item.img} alt="Cause" width={400} height={300} />
                        </div>
                        <div className="content">
                           <div className={`circle-progresss ${item.progress_bg}`}>
                              <div className="chart" data-percent="65">
                              <span><CircleProgress finish={item.percentage} /></span>
                           </div>
                           </div>
                           <h4><Link href="/services">{item.title}</Link></h4>
                           <div className="cause-price cause-price--green">
                              <span>Status : Completed</span>
                              <span>Quality : Premium</span>
                           </div>
                           <p> {item.desc}</p>
                           <div className="cause-btn">
                              <Link className={`cr-btn ${item.btn_bg}`} href="/services">View Details</Link>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         <div className="our-cause-shapes">
            <Image className="one top_image_bounce" src={causeShape} alt="Shape" />
         </div>
      </div>
   )
}

export default OurCause
