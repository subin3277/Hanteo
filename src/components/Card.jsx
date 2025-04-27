import {styled} from 'styled-components';

const Card = () => {
  return (
    <S.Card>
      <S.Badge>진행 중</S.Badge>
      <S.Image_section/>
      <S.Text_section>
        <S.Text>[M COUNTDOWN] 10월 2주차 엠카 사전</S.Text>
        <S.Text>2020.02.08 10:00 ~ 2020.04.08 17:00 (KST)</S.Text>
      </S.Text_section>
    </S.Card>
  )
}

const S = {
  Card : styled.div`
    width: 90%;
    height : 200px;
    
    border : 1px solid grey;
    border-radius: 10px;

    position: relative;
  `,
  Image_section : styled.section`
    height: 70%;
    width: 100%;
    background-color: yellow;
    border-radius: 10px 10px 0 0;
  `,
  Text_section : styled.section`
    height: 30%;
    border-radius: 0 0 10px 10px;
  `,
  Text : styled.div`
    
  `,
  Badge : styled.div`
    width : 70px;
    background-color: #FC5CA8;
    padding : 3px;
    font-weight: bold;
    border-radius: 10px;
    color : white;
    text-align: center;

    position: absolute;
    top : 10px;
    left : 10px;
  
  `
}
export default Card;