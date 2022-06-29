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
  ${'' /* justify-content: center; */}
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

  ${'' /* // mudei aqui */}
  margin: 2px;

  background-color: ${(props) => (props.primary ? '#422800' : '#fbeee0 ')};
  color: ${(props) => (props.primary ? '#fbeee0' : '#422800 ')};
  border: 2px solid #422800;
  border-radius: 30px;
  box-shadow: #422800 4px 4px 0 0;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  ${'' /* ${''
  font-size: 20px;
  padding: 10 20px; } */}
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

export const ProfileImg = styled.img`
  box-shadow: #fbeee0 4px 4px 5px 0;
  margin:auto;
  margin-top:15px;
  width: 90%;
  height: 15rem;
  border-radius: 6%;
`;

export const EditContainer = styled.form`
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: column;
  margin: 5px;
  ${'' /* margin:auto;
  font-size:20px;
  font-weight:800;
  color:  #422800; */}
`;

export const Prizes = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: row;
  margin: 5px;

  img {
    width: 100px;
    height: 100px;
  }
  p {
    font-size: 20px;
  }
  ${'' /* margin:auto;
  font-size:20px;
  font-weight:800;
  color:  #422800; */}
`;
