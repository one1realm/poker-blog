import Tags from "@/components/Tags";
import { TagType } from "./Tag";

type Props = {
  title: string;
  tagTypes: TagType[];
};

export default function DayHeader({ title, tagTypes }: Props) {
  return (
    <div data-testid="DayHeader" className="space-y-2">
      <p className="text-xl font-bold">{title}</p>
      <Tags tagTypes={tagTypes} />
    </div>
  );
}
