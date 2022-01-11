// * Styled Components * //
import styled from 'styled-components';

export const FlxBox = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};

  background: ${({ background }) => background};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};

  height: ${({ height }) => height};
  width: ${({ width }) => width};

  cursor: ${({ cursor }) => cursor};
`;
