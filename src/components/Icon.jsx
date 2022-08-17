import React from "react";
import AlexPhoto from "../images/alex.jpg";
import "./IconStyle.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

export default function Icon(props) {
  return (
    <div className="icon">
      <img className="icon__image" src={AlexPhoto} />
      {props.active && (
        <FontAwesomeIcon icon={faCircleCheck} className="icon__badge" />
      )}
    </div>
  );
}
