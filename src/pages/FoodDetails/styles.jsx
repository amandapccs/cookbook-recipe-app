import styled from 'styled-components';
import backGroundImg from '../../images/backGroundImg.jpeg';

export const MainConteiner = styled.div`
  background-image: url(${backGroundImg});
  width: 100%;
  min-height: 100vh;
  margin-bottom: 3.5rem;
  display:flex;
  flex-direction:column;
`;

export const RecomendationConteiner = styled.div`
  color: black;
  display: flex;
  margin-bottom: 40px;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
`;

export const FoodImg = styled.img`
  box-shadow: #fbeee0 4px 4px 5px 0;
  margin:auto;
  margin-top:15px;
  width: 90%;
  height: 15rem;
  border-radius: 6%;
`;

export const FoodTitle = styled.h1`
  margin:auto;
  margin-top: 10px;
  background-color: #fbeee0;
  color: #422800;
  border: 2px solid #422800;
  border-radius: 15px;
  font-weight: 700;
  padding:0 10px;
`;

export const IngredientsTitle = styled.h1`
  margin:auto;
  font-size:25px;
  font-weight:800;
  color:  #422800;
`;

export const ShareAndFavContainer = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;
`;

export const FoodInstructions = styled.p`
  font-weight:600;
  color:  #39240d;
  font-size:17px;
  background-color:transparent;
`;
export const InstructionsContainer = styled.div`
  background-color: #ffffff86;
  border-radius: 16px;
  margin: 5px;
  padding:5px;
`;
