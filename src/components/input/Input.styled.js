// * Styled Components * //
import styled from 'styled-components';
import { baseWidth, sizes } from '../UI/variables';

export const Ipt = styled.input`
  width: ${(props) => props.width};
  /* width: 100%; */
  margin: ${(props) => props.margin};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.size};
  border-radius: ${(props) => props.radius};

  border: none;

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
    width: 80%;
    height: 30px;
  }
`;
