import styled from 'styled-components';
import { device } from '~/config/styles';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 32px;
  @media ${device.desktop} {
    padding-top: 48px;
  }
`;
