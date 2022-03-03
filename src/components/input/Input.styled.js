// * Styled Components * //
import styled from 'styled-components';

export const Ipt = styled.input`
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.size};
  border-radius: ${(props) => props.radius};
  border: ${(props) => props.border};
  background: ${(props) => props.background};
  color: ${(props) => props.color};
`;
