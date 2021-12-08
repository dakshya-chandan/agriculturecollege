import React, { useEffect, useState } from "react";
import { sliderData } from "./sliderData";

const Imageslider = () => {
  const [current, setCurrent] = useState(0);
  const length = sliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  // setInterval(() => {
  //   setTimeout(() => {
  //     nextSlide();
  //   }, 3000);
  // }, 5000);
  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null;
  }
  return (
    <section className="slidesContainer">
      <span className="prev" onClick={prevSlide}>
        <i className="fas fa-chevron-left"></i>
      </span>
      <span className="next" onClick={nextSlide}>
        <i className="fas fa-chevron-right"></i>
      </span>
      {sliderData.map((data, index) => {
        return (
          <div
            key={index}
            className={index === current ? "slide active" : "slide"}
          >
            {index === current && (
              <div className="relative">
                <img
                  className="w-[100vw] object-cover"
                  src={data.image}
                  alt="images"
                />
                <div className="absolute top-[10rem] left-[8rem] w-[50%]">
                  <p className="font-semibold text-gray-600 text-3xl">
                    {data.title}
                  </p>
                  <p className="text-gray-600 mt-2">{data.description}</p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Imageslider;
