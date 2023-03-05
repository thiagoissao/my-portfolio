interface Owner {
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  id: number;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
}

export interface GithubFile {
  filename: string;
  type: string;
  language: string;
  raw_url: string;
  size: number;
}

export interface GithubGist {
  comments_url: string;
  comments: number;
  commits_url: string;
  created_at: string;
  description: string;
  files: GithubFile[];
  forks_url: string;
  git_pull_url: string;
  git_push_url: string;
  html_url: string;
  id: string;
  node_id: string;
  owner: Owner;
  public: boolean;
  truncated: boolean;
  updated_at: string;
  url: string;
  user?: any;
}

export interface GithubGistHeader {
  title: string;
  description: string;
  bannerUrl: string;
}
