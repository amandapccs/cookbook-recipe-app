import styled from 'styled-components';
import backGroundImg from '../../images/backGroundImg.jpeg';

export const MainContainer = styled.div`
  background-image: url(${backGroundImg});
  height:640px;
  display:flex;
  flex-direction:column;
`;

export const LogoContainer = styled.div`
display:flex;
margin:auto;
`;
export const LogoImg = styled.img`
display:flex;
height:240px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom:150px;
  `;

export const InputLogin = styled.input`
  display:flex;
  margin: auto;
  border: none;
  color:#422800;
  border-bottom: 2px solid #422800;
  background: #ffffff86;
  border-radius:15px;
  padding: 10px;
  padding-left: 24px;
  font-weight: 700;
  width: 75%;
  ::placeholder{
    color:#422800;
    background-color:transparent;
  }
`;

export const ButtonLogin = styled.button`
  /* display:flex;
  margin: auto;
  margin-top:20px;
  border: none;
  background: #ffffff86;
  border-radius:15px;
  padding: 10px;
  padding-left: 24px;
  font-weight: 700;
  width: 75%; */
  color:#422800;
  margin:auto;
  margin-top:20px;
  background-color:#fbeee0;
  border: 2px solid #422800;
  border-radius: 30px;
  cursor: pointer;
  display: inline-block;
  font-weight: 800;
  font-size: 16px;
  padding: 0 18px;
  line-height: 25px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  `;
