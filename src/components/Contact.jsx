import React, { useRef, useState } from "react";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [desc, setDesc] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3vd16yu",
        "template_w7gxwb9",
        form.current,
        "6fCyooqccPtelidiH"
      )
      .then(
        (result) => {
          alert(
            "Success✅! Your message has been sent to Md Abid Hussain" +
              "\n" +
              "Thanks for visiting my site🖖"
          );
        },
        (error) => {
          alert(error.text);
        }
      );

    setName("");
    setEmail("");
    setSubject("");
    setDesc("");
  };
  return (
    <React.Fragment>
      <section className="contact section" id="contact">
        <div className="reveal">
          <h2 className="section__title">Contact me</h2>
          <span className="section__subtitle">Get in touch</span>

          <div className="contact__container container grid">
            <div>
              <div className="contact__information">
                <i className="uil uil-phone-alt contact__icon">
                  <CallIcon />
                </i>

                <div>
                  <h3 className="contact__title">Call me</h3>
                  <span className="contact__subtitle">
                    <a className="contact__subtitle_a" href="tel:+916206819422">
                      (+91) 6206819422
                    </a>
                  </span>
                </div>
              </div>

              <div className="contact__information">
                <i className="uil uil-envelope contact__icon">
                  <EmailIcon />
                </i>

                <div>
                  <h3 className="contact__title">E-mail</h3>
                  <span className="contact__subtitle">
                    {" "}
                    <a
                      className="contact__subtitle_a"
                      href="mailto:mdabidhussain3112@gmail.com"
                    >
                      mdabidhussain3112@gmail.com
                    </a>
                  </span>
                </div>
              </div>

              <div className="contact__information">
                <i className="uil uil-map-marker contact__icon">
                  <LocationOnIcon />
                </i>

                <div>
                  <h3 className="contact__title">Location</h3>
                  <span className="contact__subtitle">
                    Bilaspur, Chattisgarh, India
                  </span>
                </div>
              </div>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <div action="" className="contact__form grid">
                <div className="contact__inputs grid">
                  <div className="contact__content">
                    <label htmlFor="" className="contact__label" id="name">
                      Name
                    </label>
                    <input
                      id="inputName"
                      name="from_name"
                      type="text"
                      className="contact__input"
                      placeholder=""
                      autoComplete="off"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      required
                    />
                  </div>

                  <div className="contact__content">
                    <label htmlFor="" className="contact__label" id="email">
                      E-mail
                    </label>
                    <input
                      id="inputEmail"
                      name="email_id"
                      type="email"
                      className="contact__input"
                      placeholder=""
                      autoComplete="off"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      required
                    />
                  </div>
                </div>

                <div className="contact__content">
                  <label htmlFor="" className="contact__label" id="subject">
                    Subject
                  </label>
                  <input
                    id="inputSubject"
                    name="subject"
                    type="text"
                    className="contact__input"
                    placeholder=""
                    autoComplete="off"
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject}
                    required
                  />
                </div>

                <div className="contact__content">
                  <label htmlFor="" className="contact__label" id="message">
                    Message
                  </label>
                  <textarea
                    id="inputMessage"
                    name="message"
                    cols="0"
                    rows="7"
                    className="contact__input"
                    autoComplete="off"
                    placeholder=""
                    onChange={(e) => setDesc(e.target.value)}
                    value={desc}
                    required
                  ></textarea>
                </div>

                <div>
                  <button value="Send" type="submit">
                    <div className="svg-wrapper-1">
                      <div className="svg-wrapper">
                        <svg
                          height="24"
                          width="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 0h24v24H0z" fill="none"></path>
                          <path
                            d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <span>Send Message</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
