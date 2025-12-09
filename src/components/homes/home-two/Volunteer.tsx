import volunteer_data from "@/data/volunteerData"
import Image from "next/image"

const Volunteer = ({ style }: any) => {

   const filteredVolunteers = volunteer_data
      .filter((item) => item.page === "home_2")
      .slice(0, style ? 4 : 8);

   return (
      <div className={`volunteer-area-two pb-90 rel z-1 ${style ? "pt-120" : ""}`}>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-8 col-md-10">
                  <div className="section-title text-center mb-60">
                     <span className="section-title__subtitle mb-10">Our Cleaning Team</span>
                     {style ? <h3>Meet <span>Our Professional Cleaners</span></h3> : <h2>Our <span>Cleaning Experts</span> Style 02</h2>}
                     <p>Our trained and dedicated cleaning staff provides high-quality service, ensuring every space is spotless, fresh, and hygienic.</p>
                  </div>
               </div>
            </div>
            
            <div className="row justify-content-center">
               {filteredVolunteers.map((item) => (
                  <div key={item.id} className="col-xl-3 col-sm-6">
                     <div className="valunteer-two-item">
                        <div className="valunteer-two-item__img">
                           <Image src={item.thumb} alt="Cleaner" />
                        </div>
                        <div className={`valunteer-two-item__des ${item.item_bg}`}>
                           <h5>{item.name}</h5>
                           <span>Cleaner</span>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Volunteer
