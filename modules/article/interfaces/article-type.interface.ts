import { AuthorType } from './author-type.interface';

export interface IArticle {
  id: string;
  title: string;
  description: string;
  date: string;
  coverImage: string;
  author: AuthorType;
  timeReading: {
    text: string;
  };
  ogImage: {
    url: string;
  };
  content: string;
}
