import Image from "next/image";
import { Fragment } from "react";
import classes from "./MeetupDetail.module.css";

const MeetupDetail = ({ image, title, description, address }) => {
  return (
    <section className={classes.detail}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
};

export default MeetupDetail;
