// import { useParams } from "next/navigation" //useparams hook useable in client component

export default async function BlockPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // const {id} = useParams()
  const { id } = await params;

  return (
    <div>
      <h1>this is dynamic page {id}</h1>
    </div>
  );
}
