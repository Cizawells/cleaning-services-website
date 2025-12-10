import Image from "next/image"
import Link from "next/link"

import heroShape from "@/assets/img/shapes/three-round-green.png"

const HeroArea = () => {
   return (
      <div className="hero-area-two bgs-cover overlay py-250" style={{ backgroundImage: `url(/assets/img/hero/hero-two.jpg)` }}>
         <div className="container">
            <div className="hero-content mt-110 rmt-0 mb-65 text-center text-white rel z-1">
               <h1>Professional Cleaning Services For Homes &amp; Businesses</h1>
               <p className="lead">Trusted, reliable and eco-friendly cleaning — book online in minutes.</p>
               <div className="hero-btns pt-15 rpt-0">
                  <Link className="cr-btn" href="/contact">Book Now</Link>
               </div>
               <Image className="hero-shape-two top_image_bounce" src={heroShape} alt="Shape" />
            </div>
         </div>
      </div>
   )
}

export default HeroArea
