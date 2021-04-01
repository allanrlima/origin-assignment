import styled from 'styled-components';
import { device } from '~/config/styles';

export const Wrapper = styled.div`
  height: ${props => props.theme.input.height};
  position: relative;
`;

export const InputWrapper = styled.input`
  height: 100%;
  width: 100%;
  padding-left: 44px;
  font-family: 'Rubik';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: ${props => props.theme.colors.tertiaryGray};
  border: 1px solid #e9eef2;
  border-radius: 4px;
  @media ${device.desktop} {
    font-size: 24px;
    line-height: 28.8px;
  }
`;

export const MoneyLogo = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  left: 12px;
  top: 16px;
`;
