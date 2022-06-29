import styled from 'styled-components';
import backGroundImg from '../../images/backGroundImg.jpeg';

export const RecipesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const dadada = styled.div`
`;

export const MainContainer = styled.div`
  background-image: url(${backGroundImg});
  width: 100%;
  min-height: 100vh;
  display:flex;
  flex-direction:column;
`;

export const Button = styled.button`
  margin: 2px;

  background-color:'#fbeee0 ';
  color: '#422800 ';
  border: 2px solid #422800;
  border-radius: 30px;
  box-shadow: #422800 4px 4px 0 0;
  display: inline-block;
  font-weight: 600;
  font-size: 12px;
  padding: 0 18px;
  line-height: 30px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  :active {
  box-shadow: #422800 2px 2px 0 0;
  transform: translate(2px, 2px);
}
`;

export const ButtonsSection = styled.section`
display: flex;
justify-content: space-evenly;
align-items: center;
`;
