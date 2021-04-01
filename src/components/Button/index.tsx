import React from 'react';

import { Wrapper } from './styles';

interface Props {
  text: string;
  onClick: () => void;
}

export const Button: React.FunctionComponent<Props> = ({
  text,
  onClick
}: Props) => {
  return (
    <Wrapper data-testid="button" onClick={onClick}>
      {text}
    </Wrapper>
  );
};
