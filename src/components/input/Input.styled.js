import styled from 'styled-components';
import { baseWidth, sizes } from '../UI/variables';

export const Ipt = styled.input`
  font-family: 'Open Sans';
  border: ${(props) => props.border};
  width: ${(props) => props.width};
  /* width: 100%; */
  margin: ${(props) => props.margin};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.size};
  border-radius: ${(props) => props.radius};

  background-color: transparent;
`;
