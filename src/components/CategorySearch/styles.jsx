import styled from 'styled-components';

const Div = styled.div`
color: white;
`;
const Button = styled.button`
  background-color: ${(props) => (props.primary ? '#422800' : '#fbeee0 ')};
  color: ${(props) => (props.primary ? '#fbeee0' : '#422800 ')};
  border: 2px solid #422800;
  border-radius: 30px;
  box-shadow: #422800 4px 4px 0 0;
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

  :active {
  box-shadow: #422800 2px 2px 0 0;
  transform: translate(2px, 2px);
}
/*   :hover {
    background-color: #fff;
  }   */
`;
export { Div, Button };
/* <!-- HTML !-->
<button class="button-74" role="button">Button 74</button>
 */
/* CSS */
/* .button-74 {
  background-color: #fbeee0;
  border: 2px solid #422800;
  border-radius: 30px;
  box-shadow: #422800 4px 4px 0 0;
  color: #422800;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 18px;
  padding: 0 18px;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-74:hover {
  background-color: #fff;
}

.button-74:active {
  box-shadow: #422800 2px 2px 0 0;
  transform: translate(2px, 2px);
}

@media (min-width: 768px) {
  .button-74 {
    min-width: 120px;
    padding: 0 25px;
  }
} */
