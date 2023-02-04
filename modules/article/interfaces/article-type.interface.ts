import { AuthorType } from './author-type.interface';

export interface ArticleType {
  slug: string;
  title: string;
  description: string;
  date: string;
  coverImage: string;
  author: AuthorType;
  excerpt: string;
  timeReading: {
    text: string;
  };
  ogImage: {
    url: string;
  };
  content: string;
}
