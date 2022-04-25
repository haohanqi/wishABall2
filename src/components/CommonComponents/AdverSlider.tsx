/* eslint-disable react/no-array-index-key */
import React, { FC, useEffect, useState, useRef } from "react";
import { SliderContainer, SliderItem } from "./style";

export type Sliders = {
  width?: number;
  time: number;
  activeIndex: number;
};

const sliderData = [
  "Nike Discount on OSE Today",
  "LiNing BasketShoes in OSE",
  "LiNing Baskeoes in OSE",
];
const AdverSlider: FC = () => {
  const [state, setState] = useState({
    activeIndex: 0,
    time: 3,
  });

  const { activeIndex, time } = state;

  const autoPlayRef = useRef(null);

  const nextSlide = () => {
    if (activeIndex === sliderData.length - 1) {
      return setState({
        ...state,
        activeIndex: 0,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
    });

    return null;
  };

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };

    const interval = setInterval(play, 3 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SliderContainer
      width={sliderData.length}
      activeIndex={activeIndex}
      time={time}
    >
      {sliderData.map((item, index) => (
        <SliderItem key={index}>{item}</SliderItem>
      ))}
    </SliderContainer>
  );
};

export default AdverSlider;
