import event_data from "@/data/EventData"
import Image from "next/image"
import Link from "next/link"

const Event = () => {
   return (
      <div className="our-event-two bgs-cover pt-120 pb-90 rel z-1" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1500&h=800&fit=crop)` }}>
         <div className="container container-1090">
            <div className="row justify-content-center">
               <div className="col-xl-7 col-lg-8 col-md-10">
                  <div className="section-title text-center mb-55">
                     <span className="section-title__subtitle mb-10">Success Stories</span>
                     <h3>Completed <span>Cleaning Projects</span></h3>
                     <p>Discover professional cleaning jobs we have recently completed for residential and commercial clients.</p>
                  </div>
               </div>
            </div>
            
            <div className="row justify-content-center">
               {event_data.filter((item) => item.page === "home_2").map((item) => (
                  <div key={item.id} className="col-lg-6">
                     <div className={`event-two-item ${item.item_bg}`}>
                        <div className="image">
                           <Image src={item.thumb} alt="Event" width={400} height={300} />
                        </div>
                        <div className="content">
                           <h5><Link href="/services">{item.title}</Link></h5>
                           <ul>
                              <li><i className="flaticon-pin"></i> {item.city}</li>
                              <li><i className="flaticon-time"></i> Project Duration: {item.time}</li>
                           </ul>
                        </div>
                        <div className="date">
                           <b>{item.date}</b><span>dec</span>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Event
