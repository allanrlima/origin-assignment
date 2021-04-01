import styled from 'styled-components';
import { device } from '~/config/styles';

export const Wrapper = styled.div`
  margin-bottom: 24px;
`;

export const Label = styled.div`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 4px;
  @media ${device.desktop} {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
  }
`;
