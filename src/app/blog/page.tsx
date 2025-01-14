import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on AI/ML, Data Science, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  // Ensure posts are sorted by date, descending
  const sortedPosts = posts.sort((a, b) => {
  const dateA = new Date(a.metadata.publishedAt);
  const dateB = new Date(b.metadata.publishedAt);

  // Handle invalid date values
  if (isNaN(dateA.getTime())) return 1; // If dateA is invalid, move it to the end
  if (isNaN(dateB.getTime())) return -1; // If dateB is invalid, move it to the end

  return dateB - dateA; // Subtract to sort descending
});

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">Blog</h1>
      </BlurFade>

      {sortedPosts.map((post, index) => (
        <BlurFade
          delay={BLUR_FADE_DELAY * 2 + index * 0.05}
          key={post.slug}
        >
          <Link
            href={`/blog/${post.slug}`}
            className="flex flex-col space-y-1 mb-4"
          >
            <div className="w-full flex flex-col">
              <p className="tracking-tight font-semibold">
                {post.metadata.title}
              </p>
              <p className="h-6 text-xs text-muted-foreground">
                {new Date(post.metadata.publishedAt).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
              </p>
            </div>
          </Link>
        </BlurFade>
      ))}
    </section>
  );
}
