import Image from "next/image"
import Link from "next/link"

const UrgentCause = () => {
   return (
      <div className="urgent-cause-two py-120">
         <div className="container">
            <div className="urgent-cause-inner bgs-cover p-60 py-120" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1584622180416-e897e59edd84?w=1500&h=800&fit=crop)` }}>
               <div className="row gap-40 align-items-center">
                  <div className="col-lg-6">
                     <div className="urgent-cause-left-image rmb-65">
                        <Image src="/assets/img/clean/1.jpg" alt="Emergency Cleaning Service" width={400} height={500} />
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
                           <span>Response Time : <strong>Within 2 Hours</strong></span>
                           <span>Availability : <strong>24/7</strong></span>
                        </div>
                        <div className="urgent-cause-btn">
                           <Link className="cr-btn" href="/contact">Book Emergency Clean</Link>
                           <Link className="cr-btn btn--green" href="#services">Our Services</Link>
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
