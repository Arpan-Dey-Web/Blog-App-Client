// import { useParams } from "next/navigation" //useparams hook useable in client component
// const {id} = useParams()

import { Badge } from "@/src/components/ui/badge";
import { Separator } from "@/src/components/ui/separator";
import { blogService } from "@/src/service/blog.service";
import { BlogPost } from "@/src/types";

export const dynamicParams = false;

export async function generateStaticParams() {
  const { data } = await blogService.getBlogPosts();

  return data?.data
    ?.map((blog: BlogPost) => ({
      id: blog.id,
    }))
    .splice(0, 3);

  // this function will build specifiq some content statically
  // Return a list of `params` to populate the [slug] dynamic segment
  // return korte hobe => [  {id: hkhkhkhokjhk}, {id:hfjkdafhdfhak}, {id: jjljjjjlkjlj} ]
}

export default async function BlockPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: blog } = await blogService.getBlogByid(id);
  const formattedDate = new Date(blog.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Estimate reading time (average 200 words per minute)
  const wordCount = blog.content.split(/\s+/).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));
  return (
    <div>
      <article className="container mx-auto px-4 py-12 max-w-2xl">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-4">
            {blog.title}
          </h1>
          <div className="flex items-center gap-3 text-muted-foreground text-sm">
            <span>{formattedDate}</span>
            <span>·</span>
            <span>{readingTime} min read</span>
            <span>·</span>
            <span>{blog.views} views</span>
          </div>
        </header>
        <Separator className="mb-8" />
        <div className="prose prose-lg dark:prose-invert max-w-none leading-relaxed text-foreground">
          <p className="whitespace-pre-wrap text-lg leading-8">
            {blog.content}
          </p>
        </div>
        <Separator className="my-8" />
        <footer className="space-y-6">
          {blog.tags && blog.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag: string) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="px-3 py-1 text-sm font-normal rounded-full"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{blog._count?.comments ?? 0} comments</span>
            {blog.isFeatured && (
              <Badge variant="outline" className="rounded-full">
                Featured
              </Badge>
            )}
          </div>
        </footer>
      </article>
    </div>
  );
}
