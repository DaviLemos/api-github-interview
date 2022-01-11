// * Styled Components * //
import styled from 'styled-components';

export const Btn = styled.button`
  font-family: 'Open Sans';
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  background: ${(props) => props.background};
  font-size: ${(props) => props.size};
  border-radius: ${(props) => props.radius};

  border: none;
  cursor: pointer;
  box-shadow: 0px 5px 2px black;
  outline: none;
  text-decoration: none;

  :active {
    box-shadow: 0px 2px 2px black;
    transform: translateY(4px);
    outline: none;
    text-decoration: none;
  }
`;
