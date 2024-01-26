import React from "react";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
const ServiceModal = ({point}) => {
  return (
    <React.Fragment>
      <li className="services__modal-service">
        <i className="uil uil-check-circle services__modal-icon">
          <RadioButtonCheckedIcon />
        </i>
        <p>{point}</p>
      </li>
    </React.Fragment>
  );
};

export default ServiceModal;
