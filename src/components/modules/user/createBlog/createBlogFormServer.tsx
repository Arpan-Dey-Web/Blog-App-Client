import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/src/components/ui/field";
import { Input } from "@/src/components/ui/input";
import { env } from "@/src/env";
import { revalidateTag, updateTag } from "next/cache";
import { cookies } from "next/headers";

const API_URL = env.API_URL;
export default function CreateBlogFormServer() {
  const createBlog = async (formData: FormData) => {
    "use server";
    console.log(formData.get("title"), "content", "tag");
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const tags = formData.get("tags") as string;

    const blogData = {
      title,
      content,
      tags: tags
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item !== ""),
    };
    const cookieStore = await cookies();
    const res = await fetch(`${API_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Cookie: cookieStore.toString(),
      },
      body: JSON.stringify(blogData),
    });
    if (res.ok) {
      revalidateTag("blogPosts", "max");
      // updateTag("blogPosts"); // use one of them only 
    }

  };
  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Create Blog</CardTitle>
        <CardDescription>You can write your Blog Here</CardDescription>
        <CardContent>
          <form id="blog-form" action={createBlog}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="title">Tittle</FieldLabel>
                <Input
                  type="text"
                  name="title"
                  placeholder="Blog Title"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="content">Content</FieldLabel>
                <Input
                  type="text"
                  name="content"
                  placeholder="Write You Content"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="tags">Tags</FieldLabel>
                <Input
                  type="text"
                  name="tags"
                  placeholder="Write Your Tags"
                  required
                />
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </CardHeader>
      <CardFooter>
        <Button form="blog-form" type="submit" className="w-full">
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
}
