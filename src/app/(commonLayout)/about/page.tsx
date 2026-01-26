"use client";

import { getBlogs } from "@/src/actions/blog.action";
import { useEffect, useState } from "react";

//ekta page k dynamic korte use hoi
// export const dynamic = 'auto' // initial value auto take
// 'auto' | 'force-dynamic' | 'error' | 'force-static'
//

export default function AboutPage() {
  // await new Promise((resolve) => setTimeout(resolve, 4000));
  // throw new Error("something went wrong")

  const [data, setData] = useState([]);
  const [error, setError] = useState<{ message: string | null }>(null);
  console.log(data);
  useEffect(() => {
    (async () => {
      const { data, error } = await getBlogs();
      setData(data);
      setError(error);
    })();
  }, []);

  return (
    <div>
      <h1>This is about page</h1>
    </div>
  );
}
