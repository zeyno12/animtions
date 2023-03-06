import { useEffect } from "react";
import gsap from "gsap";
import LocomotiveScroll from "locomotive-scroll";
export default function useLocoScroll(start) {
  useEffect(() => {
    if (!start) return;

    const scrollEl = document.querySelector("#main-container");
    let locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      class: "is-reveal",
    }); 
  }, [start]);
}
