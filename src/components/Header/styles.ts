import styled from 'styled-components';
import { device } from '~/config/styles';

export const Wrapper = styled.div`
  height: 56px;
  background: #ffffff;
  display: flex;
  align-items: center;
  padding-left: 16px;
  @media ${device.desktop} {
    height: 80px;
    padding-left: 56px;
  }
`;

export const LogoWrapper = styled.img`
  width: 75px;
  height: 24px;
`;
