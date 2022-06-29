import styled from 'styled-components';
import backGroundImg from '../../images/backGroundImg.jpeg';

const MainConteiner = styled.div`
  background-image: url(${backGroundImg});
  width: 100%;
  min-height: 100vh;
  display: flex;
  ${'' /* justify-content: center; */}
  align-items: center;
  align-content: center;
  flex-direction: column;
`;

export default MainConteiner;
