import { Search } from './search';
import { Repos } from './repos';

export class GlobalStore {
  search = new Search();
  repos = new Repos();
}
