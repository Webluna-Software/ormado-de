import React from "react";
import img from "../assets/img/weareperfect.png";
import Faq from "../components/home/Faq" ;
import bgimg from '../assets/img/bgimg.png'
const Gallery = () => {
  const data = [
    { id: 0, img: img },
    { id: 1, img: img },
    { id: 2, img: img },
    { id: 3, img: img },
    { id: 4, img: img },
    { id: 5, img: img },
    { id: 6, img: img }
  ];

  return (
    <>
      <section className="gallery">
      <div className="image-container">
                <img src={bgimg} alt="" className='img-fluid' />
                    <div className="image-overlay">
                        <h3>Gallery</h3>
                    </div>
            </div>
      <h3 className="text-center mt-5"> <font color="4A3024">Ormado </font><span><font color="#D59729">Roasting House</font></span> </h3>
        <p className="text-center text-secondary">{data.length} Photos</p>
        <div className="container">
          <div className="row">
            {data.map((item) => {
              return <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                     <img src={item.img} alt="" className="img-fluid" />
                     </div>
            })}
          </div>
        </div>
        <Faq/>
      </section>
    </>
  );
};

export default Gallery;