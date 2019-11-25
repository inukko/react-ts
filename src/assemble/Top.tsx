import React from 'react';
import TopContainer from '../containers/Top';
import Label from '../views/components/Label';

const TopAssemble = (): JSX.Element => {
  const { state } = TopContainer();
  if (state === null) {
    return <div />;
  } else {
  }

  return <Label {...state} />;
};

export default TopAssemble;
