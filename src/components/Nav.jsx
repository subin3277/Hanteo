import {styled} from 'styled-components';

const Nav = () => {
  return (
    <S.Nav>
      <S.Nav_item>차트</S.Nav_item>
      <S.Nav_item>Whook</S.Nav_item>
      <S.Nav_item>이벤트</S.Nav_item>
      <S.Nav_item>뉴스</S.Nav_item>
      <S.Nav_item>스토어</S.Nav_item>
      <S.Nav_item>충전소</S.Nav_item>
    </S.Nav>
  )
}

const S = {
  Nav : styled.nav`
    width: 100%;
    background-color: #FFB1B2;
    height : 60px;

    overflow-x : auto;
    white-space: nowrap;

    -webkit-overflow-scrolling: touch;
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari */
    }
  `,
  Nav_item : styled.div`
    width: 80px;
    height: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding : 10px;
    box-sizing: border-box;
    cursor: pointer;
    font-weight : bold;

    &.select {
      color : white;
    }
  `
}

export default Nav;