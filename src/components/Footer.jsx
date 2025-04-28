import {styled} from 'styled-components';

const Footer = () => {
  return (
    <S.Footer>
      Footer
    </S.Footer>
  )
}

const S = {
  Footer : styled.footer`
    width: 100%;
    max-width: 425px;
    height: 70px;
    background-color: lightgrey;

    position: fixed;
    bottom: 0;
  `
}
export default Footer;