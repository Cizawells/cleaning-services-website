import BecomeVolunteerForm from "@/components/forms/BecomeVolunteerForm"
import Image from "next/image";

import volunteerShape from "@/assets/img/shapes/three-round-big-green.png";

const BecomeVolunteer = () => {
   return (
      <div className="become-volunteer-two bgc-black py-120 rel z-1">
         <div className="container">
            <div className="row gap-60 align-items-center">
               <div className="col-lg-6">
                  <div className="volunteer-left-image rel rmb-65">
                     <Image src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=700&fit=crop" alt="Professional Cleaning Service" width={400} height={500} />
                     <Image className="shape top_image_bounce" src={volunteerShape} alt="Shape" />
                  </div>
               </div>
               
               <div className="col-lg-6">
                  <div className="volunteer-content form-style-two text-white">
                     <div className="section-title mb-40">
                        <span className="section-title__subtitle mb-10">Book A Service</span>
                        <h3>Request a <span>Cleaning</span></h3>
                     </div>
                     <BecomeVolunteerForm />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BecomeVolunteer
