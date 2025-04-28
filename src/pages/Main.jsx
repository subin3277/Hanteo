import { Card, Carousel } from "../components";
import { styled } from 'styled-components';
import {useState, useEffect} from 'react';


const Main = () => {

  const [page, setPage] = useState(0);

  const handleObserver = (entries) => {
    const target = entries[0]
    if (target.isIntersecting) {
      setPage(prevPage => prevPage + 1)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0, //  Intersection Observer의 옵션, 0일 때는 교차점이 한 번만 발생해도 실행, 1은 모든 영역이 교차해야 콜백 함수가 실행.
    });
    // 최하단 요소를 관찰 대상으로 지정함
    const observerTarget = document.getElementById("observer");
    // 관찰 시작
    if (observerTarget) {
      observer.observe(observerTarget);
    }
  }, [])

  

  const ContentCard = () => { 
    return (
      <S.Card>
        <S.Card_title></S.Card_title>
        <S.Card_content></S.Card_content>
      </S.Card>
    )
  }

  const tempListData = [
    <ContentCard/>,
    <ContentCard/>,
    <ContentCard/>,
    <ContentCard/>,
    <ContentCard/>,
    <ContentCard/>,
    <ContentCard/>,
    <ContentCard/>,
    <ContentCard/>,
    <ContentCard/>,
  ]

  const [listData, setListData] = useState([]);

  useEffect(() => {
    setListData(lst => [...lst, ...tempListData])
  }, [page])

  const CarouselData = [
    {img : '', title : '[M COUNTDOWN] 10월 2주차 엠카 사전투표 가기', period : '2020.02.08 10:00 ~ 2020.04.08 17:00 (KST)', url : 'https://www.hanteochart.com/chart/world/global/weekly'},
    {img : '', title : '[M COUNTDOWN] 10월 3주차 엠카 사전투표 가기', period : '2020.02.08 10:00 ~ 2020.04.08 17:00 (KST)', url : 'https://www.hanteochart.com/chart/world/global/weekly'},
    {img : '', title : '[M COUNTDOWN] 10월 4주차 엠카 사전투표 가기', period : '2020.02.08 10:00 ~ 2020.04.08 17:00 (KST)', url : 'https://www.hanteochart.com/chart/world/global/weekly'},
    {img : '', title : '[M COUNTDOWN] 11월 1주차 엠카 사전투표 가기', period : '2020.02.08 10:00 ~ 2020.04.08 17:00 (KST)', url : 'https://www.hanteochart.com/chart/world/global/weekly'},
  ]

  return (
    <div>
      <S.Carousel>
        {/* Carsel 내부 요소들이 한페이지씩 보임임*/}
        <Carousel dots={true} delayTime={3000}>
          {CarouselData.map(item => (
            <Card item={item}/>
          ))}
        </Carousel>
      </S.Carousel>

      <S.Content>
        <S.Title>콘텐츠 큐레이션 제목</S.Title>
        <S.Content_section>
          {listData.map(item => {
            return (<>{item}</>)
          })}
          <div id="observer"></div>
        </S.Content_section>
      </S.Content>

    </div>
  )
}

const S = {
  Content : styled.section`
    width: 100%;
    background-color: lightgrey;
    padding : 10px;
    box-sizing: border-box;
    text-align: start;
  `,
  Carousel : styled.div`
    padding-top : 20px;
  `,
  Title : styled.div`
    font-weight: bold;
  `,
  Content_section : styled.section`
    display: flex;
    flex-direction: column;
    gap : 24px;
    margin-top: 12px;
  `,
  Card : styled.div`
    display: flex;
    background-color: white;
    border-radius: 10px;
  `,
  Card_title : styled.div`
    width : 80px;
    height: 50px;
    background-color: gray;
    border-radius: 10px;
  `,
  Card_content : styled.div`
    
  `
}

export default Main;