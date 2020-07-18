import React from 'react';
import { action } from '@storybook/addon-actions';

import ExperienceCard from './ExperienceCard';

export default {
  component: ExperienceCard,
  title: 'ExperienceCard',
};

export const Default = () =>
  <div style={{ backgroundColor: '#000', width: 400, height: 400, padding: 100 }}>
    <ExperienceCard
      urlIcon='https://img.icons8.com/plasticine/100/000000/react.png'
      title='React JS'
      description='Create visual components using material-ui framework.'
    />
  </div>