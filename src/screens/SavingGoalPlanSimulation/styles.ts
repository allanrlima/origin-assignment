import styled from 'styled-components';
import { device } from '~/config/styles';

export const Title = styled.div`
  color: ${props => props.theme.colors.brandColorPrimary};
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
`;

export const BoldTitleText = styled.span`
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0px;
`;

export const ButtonWrapper = styled.span`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const InputsWrapper = styled.span`
  width: 100%;
  @media ${device.desktop} {
    display: grid;
    grid-template-columns: 272px auto;
    grid-gap: 16px;
  }
`;
