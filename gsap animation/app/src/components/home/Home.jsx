import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import Footer from "../footer/Footer";
import About from "../about/About";
import Featured from "../featured/Featured";
import Galerry from "../galerry/Galerry";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import useLocoScroll from "../hooks/useLocoScroll";
const Home = () => {
  const [preloader, setPreloader] = useState(false);
useLocoScroll(!preloader)
  const [timer, setTimer] = useState(1);

  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, []);
  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  return (
    <>
      {preloader ? (
        <div className="loader-wrapper absolute">
          <h1>Flirty Flowers</h1>
          <h2>Rio de Jane </h2>
        </div>
      ) : (
        <div className="main-container" id="main-container"
        data-scroll-container
        >
          <Navbar />
          <Header />
          <Featured />
          <About />
          <Galerry />
          <Footer />
        </div>
      )
      }
    </>
  );
};
export default Home;
