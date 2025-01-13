import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

type Post = {
  source: string;
  metadata: Metadata;
  slug: string;
};

type BlogPost = Omit<Post, "source"> & { source: string };

function getMDXFiles(dir: string): string[] {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

export async function markdownToHTML(markdown: string): Promise<string> {
  const processed = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      // Configuration for syntax highlighting
      theme: {
        light: "min-light",
        dark: "min-dark",
      },
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(markdown);

  return processed.toString();
}

export async function getPost(slug: string): Promise<Post> {
  const filePath = path.join("content", `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf-8");
  const { content: rawContent, data: metadata } = matter(source);
  const content = await markdownToHTML(rawContent);

  return {
    source: content,
    metadata: metadata as Metadata,
    slug,
  };
}

async function getAllPosts(dir: string): Promise<BlogPost[]> {
  const mdxFiles = getMDXFiles(dir);

  return Promise.all(
    mdxFiles.map(async (file) => {
      const slug = path.basename(file, path.extname(file));
      const { metadata, source } = await getPost(slug);

      return {
        metadata,
        slug,
        source,
      };
    })
  );
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const contentPath = path.join(process.cwd(), "content");
  return getAllPosts(contentPath);
}
