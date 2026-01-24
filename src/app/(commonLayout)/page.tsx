import BlogCard from "@/src/components/modules/auth/homepage/BlogCard";
import { Button } from "@/src/components/ui/button";
import { blogService } from "@/src/service/blog.service";
import { userService } from "@/src/service/user.service";
import { BlogPost } from "@/src/types";

export default async function Home() {
  const { data } = await blogService.getBlogPosts();

  return (
    <div className="grid grid-cols-3 gap-4 max-w-7xl mx-auto">
      {data?.data?.map((post: BlogPost) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
