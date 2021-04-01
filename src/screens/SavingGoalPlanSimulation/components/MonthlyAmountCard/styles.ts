import styled from 'styled-components';
import { device } from '~/config/styles';

export const Wrapper = styled.div`
  background: #ffffff;
  border: 1px solid #e9eef2;
  border-radius: 8px;
  margin-bottom: 32px;
`;

export const MonthlyAmountHeader = styled.div`
  display: flex;
  padding-left: 24px;
  padding: 24px 32px;
  justify-content: space-between;
  @media ${device.desktop} {
    padding-left: 32px;
  }
`;

export const MonthlyAmountText = styled.div`
  color: ${props => props.theme.colors.primaryGray};
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  @media ${device.desktop} {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const MonthlyAmountValue = styled.div`
  font-family: 'Rubik';
  color: #0079ff;
  font-size: 24px;
  font-weight: 500;
  line-height: 22px;
  @media ${device.desktop} {
    font-size: 32px;
    line-height: 24px;
  }
`;

export const Description = styled.div`
  color: ${props => props.theme.colors.primaryGray};
  background: #f4f8fa;
  padding: 24px 32px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
`;

export const DescriptionBold = styled.span`
  font-weight: 600;
`;
