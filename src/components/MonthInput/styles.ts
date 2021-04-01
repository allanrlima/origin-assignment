import styled from 'styled-components';

export const Wrapper = styled.div`
  height: ${props => props.theme.input.height};
  position: relative;
  border: 1px solid #e9eef2;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;

export const HiddenArrow = styled.div`
  height: 14px;
  width: 8px;
`;

export const ArrowLeft = styled.img`
  height: 14px;
  width: 8px;
  cursor: pointer;
`;

export const ArrowRight = styled.img`
  height: 14px;
  width: 8px;
  cursor: pointer;
  transform: scaleX(-1);
`;

export const DateWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DateWrapperMonth = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;

export const DateWrapperYear = styled.div`
  color: ${props => props.theme.colors.secondaryGray};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;
