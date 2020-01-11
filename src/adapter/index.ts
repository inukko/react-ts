import fetch from 'unfetch';
import {entrypoints} from './entrypoints';

export default class Adapter {
  private checkStatus(response: any): any {
    if (response.ok) {
      return response;
    } else {
      const error = new Error(response.statusText);
      return Promise.reject(error);
    }
  }

  public async fetchData(): Promise<any> {
    const result = await fetch(entrypoints('articles'))
      .then(response => {
        try {
          this.checkStatus(response);
          return response.json();
        } catch (err) {
          console.log(err);
        }
      })
      .then(data => data)
      .catch(err => console.log(err));
    return result;
  }
}
