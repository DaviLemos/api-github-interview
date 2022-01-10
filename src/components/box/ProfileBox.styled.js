// * Styled Components * //
import styled from 'styled-components';
// * Base Variables * //
import { baseWidth, sizes } from '../UI/variables';

export const PrfBox = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;

  margin: 0 auto;
  /* border-radius: 5%; */
  padding: 5px 0px;
  width: 100%;
  background: #43249f;

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
    /* width: 80%; */
    width: 100%;
  }
`;
