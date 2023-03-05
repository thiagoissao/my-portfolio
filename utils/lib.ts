import axios from 'axios';
import matter from 'gray-matter';
import { Octokit } from 'octokit';
import readingTime from 'reading-time';
import {
  GithubGist,
  GithubGistHeader,
} from '../modules/article/dtos/github-gist.dto';
import { IArticle } from '../modules/article/interfaces/article.interface';

const formatGistToArticle = (gist: GithubGist): IArticle => {
  const content = gist.files[0].raw_url;

  return {
    author: {
      name: gist.owner.login,
      picture: gist.owner.avatar_url,
    },
    content,
    coverImage: null,
    updatedAt: gist.updated_at,
    createdAt: gist.created_at,
    id: gist.id,
    ogImage: {
      url: null,
    },
    timeReading: {
      text: readingTime(content).text,
    },
    title: gist.description,
    description: gist.description,
  };
};

const formatWithMatter = async (article: IArticle): Promise<IArticle> => {
  const response = await axios.get<string>(article.content);
  const header = matter(response.data).data as GithubGistHeader;
  return {
    ...article,
    title: header.title,
    description: header.description,
    coverImage: header.bannerUrl,
  };
};

async function getAllGists(): Promise<IArticle[]> {
  const octokit = new Octokit({
    auth: process.env.GITHUB_AUTH_TOKEN,
  });
  const response = await octokit.request('GET /gists');

  const gists: GithubGist[] = (response.data as unknown as GithubGist[]).map(
    gist => {
      const keys = Object.keys(gist.files);
      return {
        ...gist,
        files: keys.map(key => gist.files[key]),
      };
    }
  );

  const articles = gists.map(formatGistToArticle);
  return Promise.all(articles.map(formatWithMatter));
}

async function getGistById(id: string): Promise<IArticle> {
  const octokit = new Octokit({
    auth: process.env.GITHUB_AUTH_TOKEN,
  });
  const response = await octokit.request(`GET /gists/${id}`);

  const keys = Object.keys(response.data.files);
  const gist: GithubGist = {
    ...response.data,
    files: keys.map(key => response.data.files[key]),
  };

  return formatGistToArticle(gist);
}

export const api = {
  getAllGists,
  getGistById,
};
