import React from 'react';
import { HouseImage, Subtitle, Title, TitlesWrapper, Wrapper } from './styles';
import house from '/icons/house.svg';

export const CardHeader = () => {
  return (
    <Wrapper data-testid="card-header">
      <HouseImage src={house} alt={'House'} />
      <TitlesWrapper>
        <Title>{'Buy a house'}</Title>
        <Subtitle>{'Saving goal'}</Subtitle>
      </TitlesWrapper>
    </Wrapper>
  );
};
