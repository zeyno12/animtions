import React, { useEffect, useRef, useState } from 'react';
import gsap from "gsap";
import SplitText from "../../utils/Split3.min"
import SectionHeader from "../sectionheader/SectionHeader";
import "./About.css";
import cn from "classnames";
import useOnScreen from '../hooks/useOnScreen';
export default function About() {

const ref=useRef();
const[reveal,setReveal]=useState(false)

const onScreen=useOnScreen(ref)

useEffect(()=>{
  if(onScreen) setReveal(onScreen)

},[onScreen])
  useEffect(()=>{
    if(reveal){
    const split=new SplitText("#headline",{
    type:"lines",
    });
    gsap.to(split.lines,{
    duration:1,
    y:-20,
    opacity:1,
    stagger:0.1,
    ease:"power2",
    })
  }
},[reveal])
  return (
    <section className={cn("about-section")}
    data-scroll-section
    >
        <SectionHeader title="about"/>
      <p ref={ref} id="headline"
      className={cn({"is-reveal":reveal})}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias rerum
        totam dolore modi dolorem qui, molestiae ut eius at enim commodi illum
        ipsam voluptas!
      </p>
    </section>
  );
}
