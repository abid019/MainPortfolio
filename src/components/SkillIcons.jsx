import React from "react";

const SkillIcons = ({ img }) => {
  return (
    <React.Fragment>
      <th>
        <img className="skill-icon" src={img} alt="" width="80" />
      </th>
    </React.Fragment>
  );
};

export default SkillIcons;
