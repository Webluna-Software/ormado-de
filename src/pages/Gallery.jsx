import { Helmet } from "react-helmet";
import { useState, useContext, useEffect } from "react";
import { ApiLinkContext } from "../context/ApiLinkContext";
import axios from "axios";
import PreLoader from "./PreLoader";
import Faq from "../components/home/Faq";

const Gallery = () => {
  const [banner, setBanner] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const { ApiLink2 } = useContext(ApiLinkContext);
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get(`${ApiLink2}/galeryBanner`),
      axios.get(`${ApiLink2}/galeryPhoto`),
      axios.get(`${ApiLink2}/faqGalery`)
    ])
      .then(([bannerRes, galleryRes, galleryFaq]) => {
        console.log(galleryFaq);
        const galleryData = galleryRes.data.galeryPhoto;
        const bannerData = bannerRes.data.galeryBanner[0];
        const faqData = galleryFaq.data.data;
        setFaq(faqData);
        setBanner(bannerData);
        setGallery(galleryData);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        // Optionally, handle the error (e.g., show an error message)
      });
  }, [ApiLink2]);

  console.log(gallery, "gall");

  return (
    <>
      <Helmet>
        <title>Gallery</title>
      </Helmet>
      {loading ? (
        <PreLoader />
      ) : (
        <section className="gallery">
          <div className="image-container">
            <img src={banner.image} alt={banner.title} className="img-fluid" />
            <div className="image-overlay">
              <h3>{banner.title}</h3>
            </div>
          </div>
          <h3 className="text-center mt-5">
            <span style={{ color: "#4A3024" }}>Memories</span>
            <span style={{ color: "#D59729" }}> of Team Ormado</span>
          </h3>
          <p className="text-center text-secondary">{gallery.length} Photos</p>
          <div className="container">
            <div className="row">
              {gallery.map((item) => (
                <div
                  className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4"
                  key={item._id}
                >
                  {item.videoLink ? (
                 <video
                 controls
                 className="img-fluid"
                 poster={item.image[0]} 
                 preload="auto"
                 muted
                 onError={(e) => {
                   e.target.src = ""; 
                   e.target.poster = item.image[0];
                 }}
               >
                 <source src={item.videoLink} type="video/mp4" />
                 Your browser does not support the video tag.
               </video>
               
                  ) : (
                    <img
                      src={item.image[0]}
                      alt="Gallery Item"
                      className="img-fluid"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          <Faq faqs={faq} />
        </section>
      )}
    </>
  );
};

export default Gallery;
