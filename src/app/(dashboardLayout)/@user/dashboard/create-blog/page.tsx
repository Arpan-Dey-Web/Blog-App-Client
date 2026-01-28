import { CreateBlogFormClient } from "@/src/components/modules/user/createBlog/createBlogFormClient";
import { blogService } from "@/src/service/blog.service";
import { BlogPost } from "@/src/types";
// import CreateBlogFormServer from "@/src/components/modules/user/createBlog/createBlogFormServer";
export default async function CreateBlogPage() {
  const { data } = await blogService.getBlogPosts({}, { cache: "no-store" });
  return (
    <div className="flex justify-center items-center">
      {/* <CreateBlogFormServer /> */}
      <CreateBlogFormClient />
      
    </div>
  );
}
