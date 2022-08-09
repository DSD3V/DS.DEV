import { healthAndFitnessData } from '../data/healthAndFitness';
import { TabContainer } from '../styles/GlobalStyles';
import {
  HealthAndFitnessContainer,
  HealthAndFitnessImage,
  HealthAndFitnessImageDate,
  HealthAndFitnessImageDiv,
  HealthAndFitnessImagesDiv,
  HealthAndFitnessQuote,
} from '../styles/HealthAndFitnessStyles';
import { TabHeader } from './TabHeader';

export const HealthAndFitness = ({ title }: { title: string }) => (
  <TabContainer>
    <TabHeader title={title} />
    <HealthAndFitnessContainer>
      <HealthAndFitnessImagesDiv>
        {healthAndFitnessData.map(({ imageDate, imageSrc }) => (
          <HealthAndFitnessImageDiv key={imageSrc}>
            <HealthAndFitnessImage src={imageSrc} />
            <HealthAndFitnessImageDate>{imageDate}</HealthAndFitnessImageDate>
          </HealthAndFitnessImageDiv>
        ))}
      </HealthAndFitnessImagesDiv>
      <HealthAndFitnessQuote>
        "He who cannot obey himself will be commanded." - Friedrich Nietzsche
      </HealthAndFitnessQuote>
    </HealthAndFitnessContainer>
  </TabContainer>
);
