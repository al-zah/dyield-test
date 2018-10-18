interface User {
  login: string;
  id: number;
  avatar_url: string;
  public_repos: number;
  repos_url: string;
}

interface GithubSearchResponse<T> {
  items: T[];
}

interface Repo {
  id: number;
  name: string;
  stargazers_count: number;
  watchers_count: number;
}

type Direction = 'asc' | 'desc';
