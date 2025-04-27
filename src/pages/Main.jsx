import { Card, Carousel } from "../components";
import { styled } from 'styled-components';


const Main = () => {

  const ContentCard = () => {
    return (
      <S.Card>
        <S.Card_title></S.Card_title>
        <S.Card_content></S.Card_content>
      </S.Card>
    )
  }

  return (
    <div>
      MainPage
      <Carousel>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </Carousel>

      <S.Content>
        <S.Title>콘텐츠 큐레이션 제목</S.Title>
        <S.Content_section>
          <ContentCard/>
          <ContentCard/>
          <ContentCard/>
          <ContentCard/>
          <ContentCard/>
          <ContentCard/>
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