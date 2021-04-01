import styled from 'styled-components';
import { device } from '~/config/styles';

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 24px;
  margin-bottom: 24px;
  align-items: center;
`;

export const HouseImage = styled.img`
  width: 64px;
  height: 64px;
`;

export const TitlesWrapper = styled.div`
  margin-left: 16px;
`;

export const Title = styled.div`
  font-family: 'Rubik';
  color: ${props => props.theme.colors.primaryGray};
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0px;
  @media ${device.desktop} {
    font-size: 24px;
    line-height: 28.8px;
  }
`;

export const Subtitle = styled.div`
  color: ${props => props.theme.colors.secondaryGray};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0px;
  margin-top: 4px;
  @media ${device.desktop} {
    font-size: 16px;
    line-height: 24px;
  }
`;
