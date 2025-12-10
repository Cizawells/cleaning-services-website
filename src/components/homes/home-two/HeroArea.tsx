import Image from "next/image"
import Link from "next/link"

import heroShape from "@/assets/img/shapes/three-round-green.png"

const HeroArea = () => {
   return (
      <div className="hero-area-two bgs-cover overlay py-250" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1500&h=800&fit=crop)` }}>
         <div className="container">
            <div className="hero-content mt-110 rmt-0 mb-65 text-center text-white rel z-1">
               <h1>Professional Cleaning Services For Homes & Businesses</h1>
               <p style={{ fontSize: "18px", marginBottom: "20px" }}>Trusted, reliable and eco-friendly cleaning solutions. Book your service in minutes.</p>
               <div className="hero-btns pt-15 rpt-0">
                  <Link className="cr-btn" href="/contact">Book Now</Link>
                  <Link className="cr-btn btn--white" href="#services" style={{ marginLeft: "15px" }}>Our Services</Link>
               </div>
               <Image className="hero-shape-two top_image_bounce" src={heroShape} alt="Shape" />
            </div>
         </div>
      </div>
   )
}

export default HeroArea
