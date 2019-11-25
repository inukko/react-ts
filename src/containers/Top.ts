import { effected } from '../effects';

const TopContainer = (): any => {
  const states = effected();
  return {
    state: states,
  };
};

export default TopContainer;
