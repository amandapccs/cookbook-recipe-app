import styled from 'styled-components';
import backGroundImg from '../../images/backGroundImg.jpeg';

export const MainConteiner = styled.div`
  background-image: url(${backGroundImg});
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin-bottom: 55px;
`;

export const Select = styled.select`
  background-color: #fbeee0;
  color: #422800;
  border: 2px solid #422800;
  border-radius: 30px;
  box-shadow: #422800 4px 4px 0 0;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 12px;
  padding: 5px 18px;
  line-height: 30px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  margin-top: 4px;
  -webkit-user-select: none;
  touch-action: manipulation;

  :active {
  box-shadow: #422800 2px 2px 0 0;
  transform: translate(2px, 2px);
}
`;
