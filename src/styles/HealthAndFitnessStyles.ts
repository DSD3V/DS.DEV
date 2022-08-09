import styled from 'styled-components';

import { COLORS } from '../constants';

export const HealthAndFitnessContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HealthAndFitnessImage = styled.img`
  height: 440px;
  width: 240px;
`;

export const HealthAndFitnessImageDate = styled.p`
  color: ${COLORS.GREY};
  margin-top: 15px;
`;

export const HealthAndFitnessImageDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 2%;
`;

export const HealthAndFitnessImagesDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

export const HealthAndFitnessQuote = styled.div`
  color: ${COLORS.GREY};
  font-size: 1.1rem;
  font-style: italic;
  margin-top: 4%;
`;
