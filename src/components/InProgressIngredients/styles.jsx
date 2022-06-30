import styled from 'styled-components';

export const InstructionsContainer = styled.div`
  background-color: #ffffff86;
  border-radius: 16px;
  margin: 5px;
  padding:5px;
`;

export const FoodIngredients = styled.label`
  font-weight:600;
  color:  #39240d;
  font-size:17px;
  background-color:transparent;
  padding: 3px;
`;

export const Checkbox = styled.input`
  margin-right: 10px;
  width: 20px;
  height: 20px;
  
`;

export const CheckboxDiv = styled.div`
  position:relative;
  display:block;
  width:100%;
  height:60px;
  background: transparent;
  overflow:visible;

  /* :not(:last-child){
    border-bottom:2px solid white;
  } */
`;

export const CheckboxInput = styled.input`
  width:50px;
  height:50px;
  position:absolute;
  opacity:0;
  :checked + label svg g path {
    stroke-dashoffset: 0;
  }
`;

export const CheckboxLabel = styled.label`
  /* display:block;
  position:absolute;
  left:0; */
  margin-top:8px;
  margin-left:-80px;
`;

export const CheckboxSvg = styled.svg`
  margin-top:10px;
`;

export const CheckboxPath = styled.path`
  stroke-dasharray:1800;
  stroke-dashoffset:1800;
  transition:.5s all;
`;

export const CheckboxSpan = styled.span`
  font-weight: 800;
  font-size: 18px;
  margin-top: -50px;
  margin-left: 60px;
  display: flex;
  text-align: center;
  align-items: center;
  /* justify-content: center; */
`;
