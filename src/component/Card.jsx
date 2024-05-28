import React from "react";
import { useTheme } from "../store/card-sontext-api";
import "./card.css";

const Card = ({ title, content }) => {
  // const { theme } = useTheme();

  return (
    <div className={`card `}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
