// * Styled Components * //
import styled from 'styled-components';

export const Th1 = styled.h1`
  font-weight: bold;
  font-size: 32px;

  color: ${({ color }) => color};
  margin: ${({ margin }) => margin};
`;

export const Th2 = styled.h2`
  font-size: 28px;

  color: ${({ color }) => color};
  margin: ${({ margin }) => margin};
`;

export const Th3 = styled.h3`
  font-size: 20px;

  color: ${({ color }) => color};
  margin: ${({ margin }) => margin};
`;

export const TP = styled.p`
  display: inline-block;
  font-size: 14px;

  color: ${({ color }) => color};
  margin: ${({ margin }) => margin};
`;
