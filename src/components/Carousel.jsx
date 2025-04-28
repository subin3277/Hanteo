import { useEffect, useRef, useState } from "react";
import {styled} from 'styled-components';


const Carousel = ({children, dots, delayTime}) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const slideRef = useRef(null);

  const totalSlides = children.length;
  const extendSlides = [children[children.length - 1], ...children, children[0], ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, delayTime); // delayTime 마다 자동으로 넘어가도록 설정

    return () => clearInterval(interval); 
  }, []);

  useEffect(() => {
    if (!slideRef.current) return;

    slideRef.current.style.transform = `translateX(-${currentIndex * 110}%)`;

    // 마지막 카드 도달했을 때
    if (currentIndex === totalSlides + 1) {
      setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(1);
      }, 500);
    }

    // 첫번째 카드에 도달했을 때
    if (currentIndex === 0) {
      setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(totalSlides);
      }, 500);
    }
  }, [currentIndex]);

  // transition 활성화
  useEffect(() => {
    if (!transitionEnabled) {
      const timeout = setTimeout(() => {
        setTransitionEnabled(true);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [transitionEnabled]);

  return (
    <S.Slider>
      <S.SliderWrapper
        ref={slideRef}
        transitionEnabled={transitionEnabled}
      >
        {extendSlides.map((slide) => (
          <S.Slide>
            {slide}
          </S.Slide>
        ))}
      </S.SliderWrapper>
      
      {/* Dots */}
      {dots &&
        <S.DotsContiner>
          {children.map((_, idx) => (
            <S.Dot key={idx} active={idx === currentIndex - 1  ? true : false} />
          ))}
        </S.DotsContiner>
      }
    </S.Slider>
  );
}

const S = {
  Slider : styled.div`
    width: 100%;
    max-width: 100dvw;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
  `,
  SliderWrapper : styled.div`
    display: flex;
    transition: ${({ transitionEnabled }) => (transitionEnabled ? "transform 0.5s ease-in-out" : "none")};
    margin-bottom: 50px;
  `,
  Slide : styled.div`
    flex: 0 0 100%;
    padding : 0 5%;
  `,
  DotsContiner : styled.div`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
  `,
  Dot : styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ active }) => (active ? "#FC5CA8" : "lightgray")};
  `
}

export default Carousel;