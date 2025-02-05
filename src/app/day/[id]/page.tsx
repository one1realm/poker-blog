import Day1 from "@/components/Day1";
import Day2 from "@/components/Day2";
import Day3 from "@/components/Day3";
import Day4 from "@/components/Day4";
import Day5 from "@/components/Day5";
import Day6 from "@/components/Day6";
import Day7 from "@/components/Day7";

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
    case "5":
      return <Day5 />;
    case "6":
      return <Day6 />;
    case "7":
      return <Day7 />;
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
