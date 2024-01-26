import React from "react";
import { socialLinks } from "../assets/data/socialLinks";
import SocialLink from "./SocioLink";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <div className="footer__bg">
          <div className="footer__container container grid">
            <div>
              <h1 className="footer__title">Md Abid Hussain</h1>
              <span className="footer__subtitle">Full-Stack developer</span>
            </div>

            <ul className="footer__links">
              <li>
                <a href="#services" className="footer__link">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="footer__link">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="footer__link">
                  Contact
                </a>
              </li>
            </ul>

            <div className="footer__socials">
              {socialLinks.map((s, idx) => {
                if (s.name !== "LeetCode" && s.name !== "GitHub") {
                  return <SocialLink key={idx} name={s.name} link={s.link} icon={s.icon} className1={"footer__social"} className2={"footer__logo"}/>
                }
                return "";
              })}

            </div>
          </div>

          <p className="footer__copy">
            &#169; Md Abid Hussain All rights reserved.
          </p>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
