import styled from 'styled-components';

const Div = styled.div`
color: white;
`;

const Button = styled.button`

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

export { Div, Button };
