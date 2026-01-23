
import { Button } from "@/src/components/ui/button";
import { authClient } from "@/src/lib/auth-client";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = await cookies();
  console.log(cookieStore.get("better-auth.session_token"));
  const res = await fetch("http://localhost:5000/api/auth/get-session", {
    headers: {
      Cookie: cookieStore.toString(),
    },
    cache: "no-store",
  });
  const session = await res.json();
  console.log(session);

  return (
    <div>
      <Button variant="outline">Click Me</Button>
    </div>
  );
}
