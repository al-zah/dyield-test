import { observable, runInAction } from 'mobx';
import { Base } from './base';

interface RepoMap {
  [userId: string]: Repo[];
}

export class Repos extends Base {
  @observable repos = observable({} as RepoMap);

  fetchReposByUserId = async (userId: string) => {
    const repos = await this.request({ method: 'get', url: `users/${userId}/repos` }) as Repo[];

    runInAction(() => this.repos[userId] = repos);
  }
}
