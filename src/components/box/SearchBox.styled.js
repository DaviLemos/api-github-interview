// * Styled Components * //
import styled from 'styled-components';
// * Base Variables * //
import { baseWidth, sizes } from '../UI/variables';

export const SrhBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 5px 0px;

  background: #c5d2d3;

  /* Min 1920px */
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
