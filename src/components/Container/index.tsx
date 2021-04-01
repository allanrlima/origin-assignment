import React from 'react';
import { Wrapper } from './styles';

interface Props {
  children: React.ReactNode;
}

export const Container: React.FunctionComponent<Props> = ({
  children
}: Props) => {
  return <Wrapper>{children}</Wrapper>;
};
