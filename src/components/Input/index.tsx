import React from 'react';

import { Label, Wrapper } from './styles';

interface Props {
  label: string;
  children: React.ReactNode;
}

export const Input = ({ label, children }: Props) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      {children}
    </Wrapper>
  );
};
