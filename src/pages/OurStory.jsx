import React from "react";
import weare from "../assets/img/weareperfect.png";
import overlay from "../assets/img/overlay.png";
import { useContext } from "react";
import ApiLinkContext from "../context/ApiLinkContext";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import roasting1 from "../assets/img/roasting1.png";
import roasting2 from "../assets/img/roasting2.png";
import roasting3 from "../assets/img/roasting3.png";
import { Link } from "react-router-dom";
const OurStory = () => {
  const { ApiLink } = useContext(ApiLinkContext);
  const [about, setAbout] = useState([]);
  const [mission, setMission] = useState([]);

  useEffect(() => {
    // About
    axios.get(`${ApiLink}/about`).then((res) => {
      console.log(res.data.data, "ABOUT");
      setAbout(res.data.data[0]);
    });
    // Mission & Visson
    axios.get(`${ApiLink}/missionAndVision`).then((res) => {
      console.log(res.data.data[0], "Misson & Visson");
      setMission(res.data.data[0]);
    });
  }, []);

  return (
    <section className="ourstory">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 ">
            <div className="desc">
              <h3>{about.headerText}</h3>
              <p dangerouslySetInnerHTML={{ __html: about.text }} />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 ">
            <div className="ourstoryImg">
              {/* style={{width:"659px",height:"332px"}} */}
              <img src={about.image} alt="" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </div>
      <div className="roasting">
        <h3 className="ms-1">
          Roasting <font color="#D59729">House</font>
        </h3>
        <p className="ms-1">
          Blending coffee is both a science and an art, requiring expertise,
          creativity, and a keen understanding of flavor profiles. At our
          roasting house, we take pride in our mastery of the blending process,
          meticulously fine-tuning each blend to achieve the perfect balance of
          acidity, body, and aroma.
        </p>
        <div className="container-fluid">
          <div className="row g-3">
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 ">
              <img src={roasting1} alt="" className="img-fluid" />
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 ">
              <img src={roasting2} alt="" className="img-fluid" />
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 ">
              <img src={roasting3} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="missionVision">
        <div className="container-fluid">
          <div className="row g-4">
            <div className="col-12  col-sm-4 ">
              <div className="missonDesc">
                <h3>MISSION</h3>
                <p>
                  Our mission is to passionately craft exceptional coffee
                  experiences that transcend borders. We are dedicated to
                  sourcing the finest beans, roasting with precision, and
                  fostering sustainability, ensuring every cup tells a story of
                  quality and the love for coffee.
                </p>
              </div>
            </div>
            <div className="col-12  col-sm-4  text-center">
              <h1>&</h1>
            </div>
            <div className="col-12  col-sm-4 ">
              <div className="visionDesc">
                <h3>VISION</h3>
                <p>
                  As a beacon of coffee excellence, we envision a world where
                  the art of coffee becomes a universal language, connecting
                  people through shared moments of delight. We strive to be at
                  the forefront of innovation, sustainability, and community
                  engagement, setting the standard for exceptional coffee
                  experiences worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="weareperfect">
        <div className="container-fluid">
          <div className="row g-3">
            <div className="col-12 col-sm-12 col-md-5 col-lg-5 ">
              <div className="imgBox">
                <img src={weare} alt="" className="img-fluid w-100" />
                {/* <Link to={}> */}
                  <div className="overlayImg">
                    <img src={overlay} alt="" className="img-fluid w-100" />
                  </div>
                {/* </Link> */}
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-7 col-lg-7 ">
              <div className="weAreDesc">
                <h3>
                  Great things are never done by one person. They’re achieved by
                  a team of people.
                </h3>
                <p className="pb-5">
                  We believe in the power of collaboration and the collective
                  spirit that fuels extraordinary achievements. "Great things
                  are never done by one person; they're achieved by a team of
                  people." This ethos forms the heartbeat of our brand, driving
                  us to unite our diverse talents, skills, and passions in
                  crafting unparalleled coffee experiences. In our international
                  coffee family, every member plays a crucial role, contributing
                  unique perspectives and expertise to the blend. From the
                  skilled artisans who roast our beans to the baristas crafting
                  your favorite brew, and the warm smiles that greet you at our
                  locations worldwide – we understand that it's the synergy of
                  our team that brings exceptional moments to life.
                </p>
              </div>
              <div className="row">
                <div className="col-6 col-sm-4 col-md-4 col-lg-4 ">
                  <div className="counter">
                    <h2>{mission.count1}+</h2>
                    <p className="ms-2">Experience</p>
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-md-4 col-lg-4 ">
                  <div className="counter">
                    <h2>{mission.count2}+</h2>
                    <p className="ms-2">Best team</p>
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-md-4 col-lg-4 ">
                  <div className="counter">
                    <h2>{mission.count3}+</h2>
                    <p className="ms-3">Total CLIENT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
