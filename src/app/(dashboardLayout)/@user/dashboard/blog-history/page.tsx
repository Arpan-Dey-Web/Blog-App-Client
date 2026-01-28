import HistoryTable from "@/src/components/modules/user/history/HistoryTable";
import PaginationControls from "@/src/components/ui/pagination-control";
import { blogService } from "@/src/service/blog.service";

export default async function BlockPage({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) {
  const { page } = await searchParams;

  const response = await blogService.getBlogPosts({ page });
  const posts = response?.data?.data || [];
  // console.log(posts);
  const pagination = response.data?.pagination || {
    limit: 10,
    page: 1,
    total: 0,
    totalpages: 1,
  };
  console.log(pagination);
  return (
    <div className="p-6">
      <h1> this is BlockPage</h1>
      <HistoryTable posts={posts} />
      <PaginationControls meta={pagination} />
    </div>
  );
}
