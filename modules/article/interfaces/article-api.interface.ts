import matter from 'gray-matter';
import { BlogArticleType } from './blog-article-type.interface';

export interface ArticleApi {
  getRawArticleBySlug: (slug: string) => matter.GrayMatterFile<string>;
  getAllSlugs: () => Array<string>;
  getAllArticles: (fields?: string[]) => Array<BlogArticleType>;
  getArticlesByTag: (tag: string, fields: string[]) => Array<BlogArticleType>;
  getArticleBySlug: (slug: string, fields: string[]) => BlogArticleType;
  getAllTags: () => Array<string>;
}
