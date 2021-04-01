import React from 'react';
import { LogoWrapper, Wrapper } from './styles';
import logo from '~/icons/logo.svg';

export const Header = () => {
  return (
    <Wrapper data-testid="header">
      <LogoWrapper src={logo} alt={'Logo'} data-testid="logo" />
    </Wrapper>
  );
};
