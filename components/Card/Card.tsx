"use client";
import React from "react";
import "./Card.scss";
import img from "@/img/data.svg";
import Image from "next/image";

const Card = ({ name, deck }) => {
  let date = new Date();
  return (
    <div className="container_card">
      <p className="name_task">{name}</p>
      <p className="deck_task">{deck}</p>
      <div className="container_data">
        <Image src={img} alt="img" />
        <p className="data">
          {date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}
        </p>
      </div>
    </div>
  );
};
export default Card;
