import React, { useContext, useEffect, useState } from "react";
import ApiLinkContext from "../../context/ApiLinkContext";
import axios from "axios";

const Contactus = () => {
  const [fullName, setFullName] = useState();
  const [email, setemail] = useState();
  const [number, setnumber] = useState();
  const [country, setcountry] = useState();
  const [companyName, setcompanyName] = useState();
  const [interestedIn, setinterestedIn] = useState();
  const [message, setmessage] = useState();


  const [showModal, setShowModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);


  const { ApiLink } = useContext(ApiLinkContext);
  useEffect(() => {
    axios
      .get(`https://ormadoapi.webluna.org/api/client/contactForm`)
      .then((res) => {
        console.log(res.data, "ContactForm");
      });
  }, []);

  const ContactPost = (e) => {
    e.preventDefault();
    axios.post(`${ApiLink}/contactForm`, {
      fullName: fullName,
      email: email,
      number: number,
      country: country,
      companyName: companyName,
      interestedIn: interestedIn,
      message: message,
    })
      .then((res) => {
        if (res.data.status === "success") {
          setShowModal(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setShowErrorModal(true);
      });
  };

  return (
    <div className="Contactus">
      <div className="boxcontainer">
        <div className="container">
          <div className="row">
            <div className=" col-12  col-lg-6  leftside">
              <div className="conbox">
                <div className="middle">
                  <h1>Get in Touch with us! </h1>
                </div>

                <div className="loremone">
                  <div className="first">
                    <h6 className="col-10">
                      Have questions, suggestions, or just want to chat about
                      coffee? Our team is here to listen. Reach out to us today
                      using the form, and let's start a conversation.
                    </h6>
                  </div>
                  <div className="second">
                    <h6 className="col-10">
                      Your feedback matters, and we're eager to make your
                      experience with Ormado Kaffeehaus exceptional. Contact us
                      now!
                    </h6>
                  </div>
                  <br /> <br />
                  <div className="text text-white">
                    <p>
                    Connecting Through Coffee, One Message at a Time
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className=" col-12 col-sm-8 col-md-8 rightside "> */}
            <div className=" col-12  col-lg-6  rightside ">
              <form onSubmit={ContactPost}>
                <div className="inner">
                  <div className="container px-5">
                    <div className="titlebox">
                      <p>Contact Us</p>
                    </div>

                    <div className="row g-5">
                      <div className="col-6">
                        <div className="inputbox">
                          <label htmlFor="">
                            Full name <span>*</span>
                          </label>
                          <input
                            placeholder="Jon Doe"
                            className="myinput"
                            type="text"
                            required
                            onChange={(e) => setFullName(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="inputbox">
                          <label htmlFor="">
                            Email address<span>*</span>
                          </label>
                          <input
                            placeholder="example@gmail.com"
                            className="myinput"
                            type="email"
                            onChange={(e) => setemail(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="inputbox">
                          <label htmlFor="">
                            Country/Region<span>*</span>
                          </label>
                          <input
                            placeholder="Country/Region"
                            className="myinput"
                            type="text"
                            onChange={(e) => setcountry(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="inputbox">
                          <label htmlFor="">
                            Phone<span>*</span>
                          </label>
                          <input
                            placeholder="+994-__-__-__"
                            className="myinput"
                            type="number"
                            onChange={(e) => setnumber(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="inputbox">
                          <label htmlFor="">Company Name</label>
                          <input
                            placeholder="50098 Cordia Key"
                            className="myinput"
                            type="text"
                            onChange={(e) => setcompanyName(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="inputbox">
                          <label htmlFor="">Subject</label>
                          <input
                            placeholder="Enter subject"
                            className="myinput"
                            type="text"
                            onChange={(e) => setinterestedIn(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-12 ">
                        <label for="floatingTextarea">Message</label>
                        <div className="form-floating">
                          <textarea
                            className="form-control"
                            placeholder="Write message...."
                            id="floatingTextarea"
                            type="text"
                            onChange={(e) => setmessage(e.target.value)}
                          ></textarea>
                          <label for="floatingTextarea">Message</label>
                        </div>
                      </div>

                      <div className="col-12 btnsubmit my-3">
                        <button type='submit' data-bs-toggle="modal" data-bs-target="#exampleModal">Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div className="btn-form-modal">
                    <div className={`modal fade ${showModal ? 'show' : ''}`} tabIndex={-1} role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                           <div className="modal-header">
                            <h5 className="modal-title">Thank you !</h5>
                            <button type="button" 
                              onClick={() => {
                              window.location.reload()
                              setShowModal(false)
                              }}
                              className="btn-close" data- bs-dismiss="modal" aria-label="Close">
                            </button>
                          </div>
                          <div className="modal-body">
                            <p>Your form has been submitted successfully!</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
