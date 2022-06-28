import styled from 'styled-components';
import { Link } from 'react-router-dom';

const RecomendationContainer = styled(Link)`
  background-color: #ffffff86;
  border-radius: 16px;
  flex: none;
  height: 220px;
  margin: 5px;
  padding: 10px;
  width: 180px;
  img {
    object-fit: cover;
    width: 100%;
  }
  h5, h4 {
    color:#422800;
    font-weight: 800;
  }
`;

export default RecomendationContainer;
