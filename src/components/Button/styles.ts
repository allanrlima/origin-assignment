import styled from 'styled-components';

export const Wrapper = styled.button`
  width: 320px;
  height: 56px;
  background: ${props => props.theme.colors.brandColorPrimary};
  color: #fff;
  border-radius: 32px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
`;
