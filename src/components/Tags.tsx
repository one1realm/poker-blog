import Tag, { TagType } from "@/components/Tag";

type Props = {
  tagTypes: TagType[];
};

export default function Tags({ tagTypes }: Props) {
  return (
    <div data-testid="Tags" className="space-x-2">
      {tagTypes.map((tagType) => (
        <Tag key={tagType} tagType={tagType} />
      ))}
    </div>
  );
}
