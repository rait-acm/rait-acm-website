import { Blog } from "@/types/blog";

const BlogData: Blog[] = [
  {
    _id: 1,
    url: "tech-startups",
    mainImage: "/images/blog/blog-01.png",
    title: "Startup World - Tech Edition",
    metadata: "What springs to your mind when you first hear the word....",
  },
  {
    _id: 2,
    url: "outernet",
    mainImage: "/images/blog/blog-02.png",
    title: "Outernet : How internet became our reality?",
    metadata:
      "Back in 1990, when Tim Berner-Lee created the internet, it was seen as a new revolution. ",
  },
  {
    _id: 3,
    url: "coding",
    mainImage: "/images/blog/blog-03.png",
    title: "NFTS: The Evolution",
    metadata:
      "Let's dive into the world of NFT. It all began with Satoshi Nakamoto, who created the famous cryptocurrency Bitcoin",
  },
  
];

export default BlogData;
