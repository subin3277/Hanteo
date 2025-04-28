import { useLocation, useNavigate } from 'react-router-dom';
import {styled} from 'styled-components';

const Nav = () => {

  const menu_list = [
    {title : '차트', url : '/'},
    {title : 'Whook', url : '/whook'},
    {title : '이벤트', url : '/event'},
    {title : '뉴스', url : '/news'},
    {title : '스토어', url : '/store'},
    {title : '충전소', url : '/charge'},
  ]

  const navigate = useNavigate();
  const nowPage = useLocation().pathname;

  return (
    <S.Nav>
      {menu_list.map(item => (
        <S.Nav_item onClick={() => navigate(item.url)} className={item.url === nowPage ? 'select' : ''}>{item.title}</S.Nav_item>
      ))}
    </S.Nav>
  )
}

const S = {
  Nav : styled.nav`
    width: 100%;
    max-width: 100vw;
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