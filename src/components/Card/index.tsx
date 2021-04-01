import React from 'react';
import { Wrapper } from './styles';

interface Props {
  children: React.ReactNode;
}

export const Card = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};
