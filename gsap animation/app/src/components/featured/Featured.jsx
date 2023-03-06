import React from "react";
import "./Featured.css";
import  photos from "../../utils/data"
export default function Featured() {
  const [firstURL,secondURL] = photos;

  return (
    <section className="featured-section"
    data-scroll-section
    >
      <div className="featured-row-layout">
      <h6>lilly</h6>
        <img src={firstURL} data-scroll />
      </div>
      <div className="featured-column-layout">
        <h6>Green</h6>
        <img src={secondURL} data-scroll />
      </div>
    </section>
  );
}
