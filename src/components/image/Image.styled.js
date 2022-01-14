// * Styled Components * //
import styled, { keyframes, css } from 'styled-components';

const Animation = keyframes`
   0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Img = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  background: ${({ background }) => background};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  cursor: ${({ cursor }) => cursor};

  ${({ rotate }) =>
    rotate === true &&
    css`
      animation: ${Animation} 3s linear infinite;
    `}
`;
