import styled from 'styled-components';
import backGroundImg from '../../images/backGroundImg.jpeg';

export const MainConteiner = styled.div`
  background-image: url(${backGroundImg});
  width: 100%;
  min-height: 100vh;
  display: flex;
  ${'' /* justify-content: center; */}
  align-items: center;
  align-content: center;
  flex-direction: column;
  margin-bottom: 55px;
`;

export const Form = styled.form`
   display: flex;
  align-items: center;
  align-content: center;
  flex-direction: raw;
`;

export const ProfileContainer = styled.div`
  background-color: #ffffff86;
  border-radius: 16px;
  margin: 5px;
  padding:10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    color:#422800;
    font-weight: 800;
    margin: 0;
  }
  p {
    font-size: 20px;
  }

`;

export const Input = styled.input`
  background-color: #ffffff86;
  border-radius: 16px;
  margin: 5px;
  padding:10px;

  margin: 2px;

  background-color: ${(props) => (props.primary ? '#422800' : '#fbeee0 ')};
  color: ${(props) => (props.primary ? '#fbeee0' : '#422800 ')};
  border: 2px solid #422800;
  border-radius: 30px;
  cursor: pointer;
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

`;

export const ProfileImgContainer = styled.div`
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 50%;
`;

export const ProfileImg = styled.img`
  box-shadow: #fbeee0 4px 4px 5px 0;
  max-width: 400px;
  max-height: 400px;
  margin: -75px 0 0 -100px;
`;

export const EditContainer = styled.form`
  background-color: #ffffff86;
  border-radius: 16px;
  margin: 5px;
  padding:10px;
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: column;
  margin: 5px;
  h2 {
    font-size: 20px;
  }
`;

export const Prizes = styled.div`
  background-color: #ffffff86;
  border-radius: 16px;
  margin: 5px;
  padding:10px;
  display: flex;
  justify-content: space-be
  align-items: center;
  align-content: center;
  flex-direction: row;
  margin: 5px;

  img {
    width: 100px;
    height: 100px;
    margin: 5px;
  }
  p {
    margin: 8px;
    text-align: center;
    font-size: 20px;
  }
`;
