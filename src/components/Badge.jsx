import { styled } from 'styled-components';

const Badge = ({text, color}) => {
  return (
    <S.Badge $color={color}>{text}</S.Badge>
  )
}

const S = {
  Badge : styled.div`
    width : 70px;
    background-color: ${props => props.$color};
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
export default Badge