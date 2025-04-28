import {styled} from 'styled-components';
import Badge from './Badge';

const Card = ({item}) => {
  return (
    <S.Card onClick={() => window.open(item.url)}>
      <Badge text={"진행중"} color={"#FC5CA8"}/>
      <S.Image_section/>
      <S.Text_section>
        <div style={{display : 'flex', justifyContent : 'space-between'}}>
          <S.Text className="title">{item.title}</S.Text>
          <S.Badge>투표하기</S.Badge>
        </div>
        <S.Text className="period">{item.period}</S.Text>
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
    cursor: pointer;
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
    text-align: start;
    padding : 5px 10px;
    box-sizing: border-box;
  `,
  Text : styled.div`
    &.title {
      flex : 1 0 0;
      font-weight: bold;
      text-overflow: ellipsis;
      overflow : hidden;
      white-space: nowrap;
    }

    &.period {
      text-align: end;
    }
  `,
  Badge : styled.div`
    border: 1px solid #FC5CA8;
    border-radius: 20px;
    padding : 0 10px;
    color : #FC5CA8;
  `
}
export default Card;