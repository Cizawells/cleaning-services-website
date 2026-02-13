'use client'

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client"

interface ContactDataType {
  phoneNumber1?: string
  phoneNumber2?: string
  emailAddress1?: string
  emailAddress2?: string
}

const ContactInfo = () => {
  const [contactData, setContactData] = useState<ContactDataType | null>(null)
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

  const contact_data = [
    {
      id: 1,
      item_bg: "contact-info-item--green",
      icon: "flaticon-phone-call",
      title: "Phone Number",
      contact_info: [
        ...(contactData?.phoneNumber1 ? [{ info_link: `callto:${contactData.phoneNumber1}`, info_title: contactData.phoneNumber1 }] : []),
        ...(contactData?.phoneNumber2 ? [{ info_link: `callto:${contactData.phoneNumber2}`, info_title: contactData.phoneNumber2 }] : []),
      ].length > 0 ? [
        ...(contactData?.phoneNumber1 ? [{ info_link: `callto:${contactData.phoneNumber1}`, info_title: contactData.phoneNumber1 }] : []),
        ...(contactData?.phoneNumber2 ? [{ info_link: `callto:${contactData.phoneNumber2}`, info_title: contactData.phoneNumber2 }] : []),
      ] : undefined,
    },
    {
      id: 2,
      item_bg: "contact-info-item--yellow",
      icon: "flaticon-phone-call",
      title: "Email Address",
      contact_info: [
        ...(contactData?.emailAddress1 ? [{ info_link: `mailto:${contactData.emailAddress1}`, info_title: contactData.emailAddress1 }] : []),
        ...(contactData?.emailAddress2 ? [{ info_link: `mailto:${contactData.emailAddress2}`, info_title: contactData.emailAddress2 }] : []),
      ].length > 0 ? [
        ...(contactData?.emailAddress1 ? [{ info_link: `mailto:${contactData.emailAddress1}`, info_title: contactData.emailAddress1 }] : []),
        ...(contactData?.emailAddress2 ? [{ info_link: `mailto:${contactData.emailAddress2}`, info_title: contactData.emailAddress2 }] : []),
      ] : undefined,
    },
  ];

  return (
    <div className="contact-info-area pb-85">
      <div className="container">
        <div className="row justify-content-center">
          {contact_data.map((item) => (
            item.contact_info && item.contact_info.length > 0 && (
              <div key={item.id} className="col-md-4 col-sm-6">
                <div className={`contact-info-item ${item.item_bg}`}>
                  <div className="contact-info__icon">
                    <i className={item.icon}></i>
                  </div>
                  <h5>{item.title}</h5>
                  <div className="contact-info__text">
                    {item.contact_info.map((info, index) => (
                      <React.Fragment key={index}>
                        <Link href={info.info_link}>{info.info_title}</Link>
                        <br />
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
