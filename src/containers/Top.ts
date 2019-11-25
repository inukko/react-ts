import { Effected } from '../effects';

export interface IfTopContainer {
  state: {
    id: number;
    title: string;
    author: string;
  } | null;
}

const TopContainer = (): IfTopContainer => {
  const state = Effected();

  return {
    state,
  };
};

export default TopContainer;
