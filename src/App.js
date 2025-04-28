import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Main from './pages/Main';
import Whook from './pages/Whook';
import Event from './pages/Event';
import News from './pages/News';
import Store from './pages/Store';
import Charge from './pages/Charge';
import { Footer, Nav } from './components';
import { useRef, useState } from 'react';
import {styled} from 'styled-components';

const pages = ['/', '/whook', '/event', '/news', '/store', '/charge']

const Swipe = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentIdx = pages.indexOf(location.pathname);
  
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const startX = useRef(null); // 터치 시작 또는 마우스 다운 위치
  const endX = useRef(null);
  const [isDragging, setIsDragging] = useState(false); // 마우스 드래그 중인지 여부

  const minSwipeDistance = 75;

  const onTouchStart = e => {
    touchStartX.current = e.changedTouches[0].clientX;
  }

  const onTouchMove = e => {
    touchEndX.current = e.changedTouches[0].clientX;
  }
  
  const onTouchEnd = () => {
    handleSwipe()
  }

  // 마우스 핸들러
  const onMouseDown = (e) => {
    startX.current = e.clientX;
    setIsDragging(true);
  };

  const onMouseMove = (e) => {
    if (isDragging) {
      endX.current = e.clientX;
    }
  };

  const onMouseUp = () => {
    if (isDragging) {
      handleSwipe();
      setIsDragging(false);
    }
  };

  // 스와이프 판정 함수
  const handleSwipe = () => {
    const distance = startX.current - endX.current;
    if (distance > minSwipeDistance && currentIdx < pages.length - 1) {
      goNext();
    } else if (distance < -minSwipeDistance && currentIdx > 0) {
      goPrev();
    }
  };

  const goNext = () => {
    if (currentIdx < pages.length - 1) {
      navigate(pages[currentIdx + 1]);
    }
  };

  const goPrev = () => {
    if (currentIdx > 0) {
      navigate(pages[currentIdx - 1]);
    }
  };

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      style={{ touchAction: 'none', flex : 1 }}
    >
      <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route path="/whook" element={<Whook/>}/>
        <Route path="/event" element={<Event/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/store" element={<Store/>}/>
        <Route path="/charge" element={<Charge/>}/>
      </Routes>
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <S.App>
        <Router>
        <Nav/>
        <div style={{display : 'flex', flex : '1 0 0', flexDirection : 'row'}}>
          <Swipe/>
        </div>
        </Router>

        <Footer/>
      </S.App>
    </div>
  );
}

const S = {
  App : styled.div`
    
    @media(min-width : 425px) {
      max-width: 425px;
    }
  `
}

export default App;
