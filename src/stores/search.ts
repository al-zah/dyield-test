import { action, IObservableArray, observable, computed, reaction, runInAction } from 'mobx';
import { Base } from './base';

export class Search extends Base {
  @observable users: IObservableArray<User> = observable([], { deep: false });
  @observable orderBy?: keyof User = 'public_repos';
  @observable direction: Direction = 'asc';
  @observable query: string = '';

  constructor() {
    super();

    reaction(
        () => [this.orderBy, this.direction],
        id => this.fetchUsers(),
        { name: 'Search.SortingChange()' },
    );
  }

  @computed get searchUrl() {
    return `search/users?q=${this.query}&sort=${this.orderBy}&order=${this.direction}`;
  };

  fetchUsers = async () => {
    const users = await this.request({ method: 'get', url: this.searchUrl }) as GithubSearchResponse<User>;

    runInAction(() => this.users.replace(users.items));
  };

  @action setQuery = (query: string) => this.query = query;
  @action setOrderBy = (orderBy: keyof User) => this.orderBy = orderBy;
  @action setDirection = (direction: Direction) => this.direction = direction;
}
