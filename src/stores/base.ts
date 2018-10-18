import axios from 'axios';

export class Base {
  async request(
      { url, method, params, body, options, headers }:
          { url: string, method: 'delete' | 'get' | 'patch' | 'post' | 'put', params?: {}, body?: {}, options?: {}, headers?: {} },
  ): Promise <{}> {
    return axios({
      baseURL: 'https://api.github.com',
      data: body,
      method,
      params,
      url,
      ...(options || {}),
    }).then((response) => {
      return response.data;
    });
  }
}
