import React from "react";
import Cover from "../assets/img/covers/cover.jpg";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { socialLinks } from "../assets/data/socialLinks";
import SocialLink from "./SocioLink";

const Home = () => {
  const programmer = "{Programmer}";
  return (
    <React.Fragment>
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <div className="home__social">
              {socialLinks.map((s, idx) => <SocialLink key={idx} name={s.name} link={s.link} icon={s.icon} className1={"home__social-icon"} className2={""}/>)}
            </div>

            <div className="home__img">
              <img className="home__blob-img" src={Cover} alt="" />
            </div>

            <div className="home__data">
              <h1 className="home__title">Hey, I'm Md Abid Hussain</h1>
              <h3 className="home__subtitle">
                Full Stack Developer | {programmer} | <span>Designer</span>
              </h3>
              <p className="home__description">
                Experiencing in Full-Stack web design and development knowledge,
                and familiarity in Data Structures & Algorithms.
              </p>
              <a href="#contact" className="button button-flex">
                Contact Me
              </a>
            </div>
          </div>
          <div className="home__scroll">
            <a href="#about" className="home__scroll-button button--flex">
              <span className="home__scroll-name">Scroll down</span>
              <ArrowDownwardIcon />
            </a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
