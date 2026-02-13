'use client'

import ContactForm from "@/components/forms/ContactForm"
import FaqContent from "@/components/common/FaqContent"
import { useEffect, useState } from "react"
import { client } from "@/sanity/lib/client"

interface ContactData {
  contactTitle?: string
  ContactText?: string
}

const ContactArea = () => {
   const [contactData, setContactData] = useState<ContactData | null>(null)
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      const fetchContactData = async () => {
         try {
            const data = await client.fetch(`*[_type == "contact"][0]`, {}, {
              next: { tags: ['contact'], revalidate: 60 }
            })
            setContactData(data)
         } catch (error) {
            console.error('Error fetching contact data:', error)
         } finally {
            setLoading(false)
         }
      }

      fetchContactData()
   }, [])

   return (
      <div className="contact-page-area overflow-hidden py-120 rpt-100">
         <div className="container">
            <div className="row gap-60 align-items-center">
               <div className="col-lg-6">
                  <div className="faq-three-left-part mb-20 rel rmb-75">
                    <FaqContent/>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="contact-page-form form-style-two py-110 rpy-85">
                     <div className="section-title mb-10">
                        <span className="section-title__subtitle mb-10">Need help</span>
                        <h3>{contactData?.contactTitle || "Get In touch"}</h3>
                        {contactData?.ContactText && <p>{contactData.ContactText}</p>}
                     </div>
                     <ContactForm />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ContactArea
