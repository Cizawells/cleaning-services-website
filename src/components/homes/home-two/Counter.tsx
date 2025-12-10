import Link from "next/link"
import Count from "@/components/common/Count"
import counter_data from "@/data/counterData"

const Counter = () => {
   return (
      <div className="counter-area pt-110 rpt-115 pb-90 bgs-cover rel z-1" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1500&h=800&fit=crop)` }}>
         <div className="container">
            <div className="row justify-content-end">
               <div className="col-xl-8 col-lg-10">
                  <div className="counter-section-content">
                     <div className="section-title">
                        <h2>Professional Cleaning Creates Healthy, Productive Spaces</h2>
                     </div>
                     <i>We Have Served Over <span>12,500+</span> Satisfied Clients Across Multiple Cities,<br /> Cleaning <span>45,000+</span> Homes & Businesses</i>
                     <div className="counter-btns pt-5 mb-100">
                        <Link className="cr-btn" href="#services">View Our Services</Link>
                        <Link className="cr-btn btn--yellow" href="/contact">Contact Us</Link>
                     </div>
                     
                     <div className="row">
                        {counter_data.filter((items) => items.page === "home_2").map((item) => (
                           <div key={item.id} className="col-md-4 col-sm-6">
                              <div className="counter-item counter-text-wrap">
                                 <div className={`counter-item__icon ${item.icon_bg}`}><i
                                    className={item.icon}></i></div>
                                 <div className="counter-item__content">
                                    <span className="count-text" data-speed="3000" data-stop="876000"><Count number={item.counter_number} /></span>
                                    <h5 className="counter-title">{item.title}</h5>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Counter
