import PaginationControls from "@/src/components/ui/pagination-control";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import { BlogPost } from "@/src/types";

export default function HistoryTable({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Tags</TableHead>
            <TableHead>View</TableHead>
            <TableHead className="text-right">Comments</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>{post.title}</TableCell>
              <TableCell>{post.tags}</TableCell>
              <TableCell>{post.views}</TableCell>
              <TableCell>{post.isFeatured}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <PaginationControls/> */}
    </div>
  );
}
