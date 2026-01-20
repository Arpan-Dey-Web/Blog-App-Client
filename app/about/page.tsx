
export default async function About() {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  throw new Error("something went wrong")
  return (
    <div>
      <h1>This is about page</h1>
    </div>
  );
}
