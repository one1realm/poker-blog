import Day1 from "@/components/Day1";
import Day2 from "@/components/Day2";
import Day3 from "@/components/Day3";
import Day4 from "@/components/Day4";

export async function generateStaticParams() {
  const days = [];
  for (let id = 0; id < 365; id++) days.push({ id: id.toString() });
  return days;
}

const dayProvider = (id: string) => {
  switch (id) {
    case "1":
      return <Day1 />;
    case "2":
      return <Day2 />;
    case "3":
      return <Day3 />;
    case "4":
      return <Day4 />;
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
