import styled from 'styled-components';
import backGroundImg from '../../images/backGroundImg.jpeg';

const MainConteiner = styled.div`
  background-image: url(${backGroundImg});
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin-bottom: 55px;
`;

export default MainConteiner;
