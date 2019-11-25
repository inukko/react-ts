import React from 'react';
import TopContainer from '../containers/Top';
import Label from '../views/components/Label';

const TopAssemble = (): any => {
  const container = TopContainer();
  return <Label {...container} />;
};

export default TopAssemble;
