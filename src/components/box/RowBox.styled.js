// * Styled Components * //
import styled from 'styled-components';
// * Base Variables * //
import { baseWidth, sizes } from '../UI/variables';

export const RwBox = styled.div`
  display: flex;
  /* flex-direction: row; */
  justify-content: space-around;

  @media (min-width: ${baseWidth.lg}) {
  }
  /* Max 1920px and Min 1024px */
  @media (max-width: ${baseWidth.lg}) and (min-width: ${baseWidth.md}) {
  }
  /* Max 1024px and Min 500px */
  @media (max-width: ${baseWidth.md}) and (min-width: ${baseWidth.sm}) {
  }
  /* Max 500px */
  @media (max-width: ${baseWidth.sm}) {
    width: 100%;
  }
`;
