import { useEffect, useRef, useState } from "react";
import {styled} from 'styled-components';


const Carousel = ({children}) => {
  const [currentIndex, setCurrentIndex] = useState(1); // 시작은 1번
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const slideRef = useRef(null);
  const slideWidth = 90; // 카드 너비 %로 설정

  const totalSlides = children.length;
  const extendSlides = [
    children[children.length - 1], // 마지막 카드 복제
    ...children,
    children[0], // 첫 번째 카드 복제
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000); // 3초마다 자동으로 넘어가도록 설정

    return () => clearInterval(interval); // clean up
  }, []);

  useEffect(() => {
    if (!slideRef.current) return;

    // 슬라이드 위치 업데이트
    slideRef.current.style.transform = `translateX(-${currentIndex * slideWidth}%)`;

    // 마지막 복제된 카드에 도달했을 때 처리
    if (currentIndex === totalSlides + 1) {
      setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(1); // 첫 번째 카드로 이동
      }, 500); // 0.5초 후에 transition 끄고 첫 번째로 이동
    }

    // 첫 번째 복제된 카드에 도달했을 때 처리
    if (currentIndex === 0) {
      setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(totalSlides); // 마지막 카드로 이동
      }, 500); // 0.5초 후에 transition 끄고 마지막으로 이동
    }
  }, [currentIndex]);

  // transition 다시 활성화
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
      <S.DotsContiner>
        {children.map((_, idx) => (
          <S.Dot
            key={idx}
          />
        ))}
      </S.DotsContiner>
    </S.Slider>
  );
}

const S = {
  Slider : styled.div`
    width: 100%;
    overflow: hidden;
    position: relative;
  `,
  SliderWrapper : styled.div`
    display: flex;
    transition: ${({ transitionEnabled }) => (transitionEnabled ? "transform 0.5s ease-in-out" : "none")};
  `,
  Slide : styled.div`
    flex: 0 0 100%;
    padding : 0 5%;
  `,
  DotsContiner : styled.div`
    position: absolute;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
  `,
  Dot : styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ active }) => (active ? "black" : "lightgray")};
  `
}

export default Carousel;