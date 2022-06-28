import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterConteiner = styled.footer`
  padding: 1.25rem;
  bottom: 0;
  background-color: #422800;
  position: fixed;
  width: 100%;
  height: 3.5rem;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-shrink:0;
`;
const FooterLink = styled(Link)`
  display: flex;
`;
const Img = styled.img`
  filter:
  invert(100%) 
  sepia(100%)
  saturate(100%)
  hue-rotate(1110deg)
  brightness(100%)
  contrast(90%);
`;
export { FooterConteiner, FooterLink, Img };
