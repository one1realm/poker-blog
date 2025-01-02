import Tags from "@/components/Tags";
import { TagType } from "./Tag";

type Props = {
  day: string;
  date: string;
  title: string;
  tagTypes: TagType[];
};

export default function DayHeader({ day, date, title, tagTypes }: Props) {
  return (
    <div data-testid="DayHeader" className="space-y-2">
      <p className="text-xl font-bold">{title}</p>
      <p className="text-xs italic font-bold">
        Day {day} - {date}
      </p>
      <Tags tagTypes={tagTypes} />
    </div>
  );
}
