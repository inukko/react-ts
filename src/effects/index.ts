import UseCase from '../usecase';
import { useEffect, useState } from 'react';

interface IfEffected {
  id: number;
  title: string;
  author: string;
}

export const Effected = (): IfEffected | null => {
  const [data, setData] = useState(null);

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

export default Effected;
