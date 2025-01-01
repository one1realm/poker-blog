import Day1 from "@/components/Day1";

export async function generateStaticParams() {
  const days = [];
  for (let id = 0; id < 365; id++) days.push({ id: id.toString() });
  return days;
}

const dayProvider = (id: string) => {
  switch (id) {
    case "1":
      return <Day1 />;
    default:
      return <div>Not found</div>;
  }
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <div data-testid="Day">{dayProvider(id)}</div>;
}
