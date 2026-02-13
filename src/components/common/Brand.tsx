"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

interface GalleryImage {
  _key?: string;
  asset: {
    _ref: string;
  };
  crop?: any;
  hotspot?: any;
}

interface ContactData {
  gallery?: GalleryImage[];
}

const Brand = ({ style }: any) => {
  const [gallery, setGallery] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const data = await client.fetch(`*[_type == "contact"][0] { gallery[] }`, {}, {
          next: { tags: ['contact'], revalidate: 60 }
        });
        if (data?.gallery && Array.isArray(data.gallery)) {
          setGallery(data.gallery);
        }
      } catch (error) {
        console.error('Error fetching gallery:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  return (
    <div
      className={`client-logo-area ${style ? "py-75" : "bgc-lighter py-30"}`}
      style={{
        backgroundImage: `${
          style && "url(/assets/img/client-logo/client-logo-section-bg.jpg)"
        }`,
      }}
    >
      <div className={`container ${style ? "container-1370" : ""}`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          {gallery && gallery.length > 0 ? (
            gallery.map((image, index) => {
              const imageUrl = image?.asset ? builder.image(image.asset).url() : null;
              return (
                <div key={image._key || `img-${index}`} className="client-logo-item" style={{ flex: '1 1 auto', minWidth: '150px' }}>
                  <Link href="#">
                    <div style={{ padding: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {imageUrl && (
                        <Image
                          src={imageUrl}
                          alt="Client Logo"
                          width={200}
                          height={150}
                          priority
                          style={{ height: "150px", width: "200px", objectFit: "cover", borderRadius: "8px" }}
                        />
                      )}
                    </div>
                  </Link>
                </div>
              );
            })
          ) : (
            loading && <p>Loading gallery...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Brand;
