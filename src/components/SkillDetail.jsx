import React from "react";

const SkillDetail = ({ title, number, img }) => {
  return (
    <React.Fragment>
      <div className="skills__data">
        <div className="skills__titles">
          <h3 className="skills__name">{title}{" "}
          <img src={img} alt="" width={25}/>
          </h3>
          {typeof number == "string" ? (
            <span className="skills__number">{number}%</span>
          ) : (
            <span className="skills__number">{number}+</span>
          )}
        </div>
        <div className="skills__bar">
          {typeof number == "string" ? (
            <div
              className="skills__percentage"
              style={{ width: `${number}%`}}
            ></div>
          ) : (
            <div
              className="skills__percentage"
              style={{ width: "100%" }}
            ></div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default SkillDetail;
