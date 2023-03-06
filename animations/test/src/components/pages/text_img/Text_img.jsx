import React, { useEffect, useState } from "react";
import { Container, Title, UL } from "./StyledAnimation";
import { data } from "../../mock/Fakedata";
const Text_img = () => {
  const [position, setPosition] = useState({
    x: "",
    y: "",
  });

  const handleMouseMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    document.documentElement.style.cursor = 'none';
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Container>
      <Title>salam canim necesen</Title>
      <UL>
        {data.map((elem, id) => (
          <li key={id}>
            <span>{elem.text}</span>
            <div className="img_cont">
              <img src={elem.image} />
            </div>
          </li>
        ))}
      </UL>
      <div
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
        className="cursor"
      ></div>
    </Container>
  );
};
export default Text_img;
