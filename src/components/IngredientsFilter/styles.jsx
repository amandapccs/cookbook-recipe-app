import styled from 'styled-components';

const ButtonContainer = styled.button`
  background-color: transparent;
  color: #422800;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 0px;
  height: 16.25rem;
  width: 100%;
  border: none;
`;

const Image = styled.img`
  background-color: white;
  box-shadow: #422800 4px 4px 0 0;
  margin-top: 20px;
  width: 100%;
  height: 100%;
  max-width: 12rem;
  max-height: 12rem;
  border-radius: 50%;
`;
// const LinkConteiner = styled(Link)`
//   text-align: center;
// `;

const CardTitle = styled.h4`
  /* margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
 */
  padding: 5px;
  margin-top: 1rem;
  background-color: #fbeee0;
  color: #422800;
  border: 2px solid #422800;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  font-weight: 1000;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`;
export { ButtonContainer, Image, CardTitle };
