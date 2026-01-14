const LocationMap = () => {
  return (
    <div className="contact-page-map wow fadeInUp delay-0-2s">
      <div className="our-location">
        {/* <iframe
           src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d136834.1519573059!2d-74.0154445224086!3d40.7260256534837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1639991650837!5m2!1sen!2sbd"
           style={{ border: 0, width: "100%" }}
           allowFullScreen
           loading="lazy"
         ></iframe> */}

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2377.172451357353!2d-1.4782346243205375!3d53.42962476849032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487979abd32636a3%3A0xd51b618ac5ba9c05!2s26%20Milnrow%20Cres%2C%20Sheffield%20S5%209LQ%2C%20UK!5e0!3m2!1sen!2sbi!4v1768404738017!5m2!1sen!2sbi"
          width="600"
          height="450"
          style={{ border: 0, width: "100%" }}
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default LocationMap;
