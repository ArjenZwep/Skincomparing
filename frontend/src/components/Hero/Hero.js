import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Skin comparing
        </SectionTitle>
        <SectionText>
        Vote now on your favorite skins.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;