import React from 'react';

import MadeByText from './MadeByText';

export default {
  component: MadeByText,
  title: 'MadeByText',
};

export const Default = () =>
  <div style={{ backgroundColor: '#000', width: 400, height: 400, padding: 100 }}>
    <MadeByText
      photoUrl='https://unsplash.com/photos/kLfkVa_4aXM'
      personName='Moises'
    />
  </div>