import styled from 'styled-components';

export const RecipeContainer = styled.div`
  display: flex;
  background-color: #fbeee0;
  color: #422800;
  border: 2px solid #422800;
  border-radius: 15px;
  width: 85%;
  font-weight: 600;
  margin: 10px 0;

  p {
    margin: 3px;
  }

  h3 {
    margin: 0;
  }

  button {
    border: none;
    background: transparent;
  }
`;

export const RecipeImg = styled.img`
  border-radius: 15px;
  max-width: 80%;
`;
