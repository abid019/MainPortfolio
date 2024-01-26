import React from "react";

const SocialLink = ({ name, link, icon, className1, className2 }) => {
  return (
    <React.Fragment>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className={className1}
      >
        <img src={icon} width={20} alt="" className={className2}/>
      </a>
    </React.Fragment>
  );
};

export default SocialLink;
