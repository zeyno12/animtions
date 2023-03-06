import React from "react";
import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100%;

  .cursor {
    width: 25px;
    height: 25px;
    margin: 0;
    padding: 0;
    background-color: rgb(238, 138, 31);
    border-radius: 50%;
    pointer-events: none;
    position: fixed;
    transform: translate(-50%, -50%);
  }
`;
export const Title = styled.h1`
  letter-spacing: 4px;
  align-items: center;
  color: hotpink;
`;
export const UL = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 30%);
  justify-content: center;
  margin: auto;
  position: relative;
  top: 40px;
  li {
    margin-bottom: 15px;
    padding: 7px;
    font-size: 30px;
    text-transform: uppercase;
    span {
      &:hover {
        & ~ div {
          transform:rotate(-5deg) scale(1);
          opacity: 1;
        }
      }
    }
    .img_cont {
      position: absolute;
      width: 300px;
      transform: translateX(100px) scale(0.8);
      opacity: 0;
transition: 0.6s;
      img {
        border: 1px solid rgb(255, 255, 255, 0.5);
        width: 50%;
        height: 50%;
        border-radius: 15px;
      }
    }
  }
`;
