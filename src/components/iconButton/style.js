import styled from 'styled-components';

export const DivBtn = styled.div`
  text-align: center;
  color: ${props => props.color? props.color: 'rgba(165, 181, 192, 1)'};
  cursor: pointer;

  &:hover {
    color: ${props => props.hoverColor? props.hoverColor: 'rgba(247, 247, 247, 1)'};
  }

  svg {
    width: ${props => props.iconWidth};
    height: ${props => props.iconHeight};
  }
`;