import Adapter from '../adapter';

export default class UseCase {
  public async getData(): Promise<any> {
    const adapter = new Adapter();
    const result = await adapter.fetchData();
    return result;
  }
}
