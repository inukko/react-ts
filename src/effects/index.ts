import UseCase from '../usecase';
import { useEffect, useState } from 'react';

export const effected = (): any => {
  const [data, setData] = useState();

  const getData = async (): Promise<void> => {
    const usecase = new UseCase();
    const result = await usecase.getData().catch(err => err);
    setData(result);
  };

  useEffect(() => {
    // NOTE: APIのデータを取得する
    getData();
  }, []);

  return data;
};
