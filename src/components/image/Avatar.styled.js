// * Styled Components * //
import styled from 'styled-components';

export const Img = styled.img`
  border-radius: 50%;
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
