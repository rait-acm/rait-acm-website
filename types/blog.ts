export type Author = {
  name: string;
  image: string;
  bio?: string;
  _id?: number | string;
  _ref?: number | string;
};

export type Blog = {
  _id: number;
  title: string;
  slug?: any;
  url: string,
  metadata?: string;
  body?: string;
  mainImage?: any;
  author?: Author;
  tags?: string[];
  publishedAt?: string;
};

export type ActualBlogType = {
  _id: number;
  mainImage: string;
  title: string;
  author: string;
  publishedOn: string;
  category: string;
  metadata: string;
  content1: string;
  content2: string;
  smallh: string;
  images: string[];
}
