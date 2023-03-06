import React, { useEffect, useRef, useState } from "react";
import "./Galerry.css";
const images = [
  {
    src: "https://images.unsplash.com/photo-1600421719060-f18eba3cba4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
    title: "Salam Gozel insanlar",
    subtitle: "Necesiz Ashklarim",
    category: "ashkokushko / Bg.Zeynab",
  },
  {
    src: "https://images.unsplash.com/photo-1668067470659-ea022f81f3cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    title: "Salam Gozel insanlar",
    subtitle: "Necesiz Ashklarim",
    category: "ashkokushko / Bg.Zeynab",
  },
  {
    src: "https://images.unsplash.com/photo-1677498727886-25f44a8a8e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    title: "Salam Gozel insanlar",
    subtitle: "Necesiz Ashklarim",
    category: "ashkokushko / Bg.Zeynab",
  },
  {
    src: "https://images.unsplash.com/photo-1640190582299-b8c67cfca2a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
    title: "Salam Gozel insanlar",
    subtitle: "Necesiz Ashklarim",
    category: "ashkokushko / Bg.Zeynab",
  },
  {
    src: "https://images.unsplash.com/photo-1676548408545-44bd9586cd89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    title: "Salam Gozel insanlar",
    subtitle: "Necesiz Ashklarim",
    category: "ashkokushko / Bg.Zeynab",
  },
];

function GalerryItem({
  src,
  category,
  title,
  subtitle,
  updateActiveImage,
  index,
}) {


  return (
    <div className="gallery-item-wrapper"
    >
        <div/>
      <div className="gallery-item">
        <div className="gallery-item-info">
          <h1 className="gallery-item-title">{title}</h1>
          <h6 className="gallery-item-subtitle">{subtitle}</h6>
          <p className="gallery-item-category">{category}</p>
        </div>
        <div
          className="gallery-item-image"
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      </div>
      <div/>
    </div>
  );
}
export default function Galerry() {
  const [activeImage, setActiveImage] = useState(1);
  return (
    <section className="section-wrapper galerry-wrap"
    data-scroll-section
    >
      <div className="gallery">
        <div className="gellery-counter">
            <span>{activeImage}</span>
            <span className="divider"/>
            <span>{images.length}</span>
        </div>
        {images.map((image, index) => (
          <GalerryItem
            key={image.src}
            index={index}
            {...image}
            updateActiveImage={(index) => setActiveImage(index + 1)}
          />
        ))}
      </div>
    </section>
  );
}
