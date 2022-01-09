import styled from 'styled-components';
import { baseWidth, sizes } from '../UI/variables';

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
  box-shadow: 5px 5px 5px black;
  outline: none;
  text-decoration: none;

  :active {
    box-shadow: 2px 2px 2px black;
    transform: translateY(4px);
    outline: none;
    text-decoration: none;
  }

  @media (min-width: ${baseWidth.lg}) {
  }
  @media (max-width: ${baseWidth.lg}) and (min-width: ${baseWidth.md}) {
  }
  @media (max-width: ${baseWidth.md}) and (min-width: ${baseWidth.sm}) {
  }
  @media (max-width: ${baseWidth.sm}) {
    width: ${sizes.medium.width};
  }
`;
