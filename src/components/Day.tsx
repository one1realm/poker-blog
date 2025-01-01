"use client";
import { useParams } from "next/navigation";
import { z } from "zod";
import Day1 from "./Day1";

const dayProvider = (id: string) => {
  switch (id) {
    case "1":
      return <Day1 />;
    default:
      return <div>Not found</div>;
  }
};

export default function Day() {
  const params = useParams();
  const id = z.string().parse(params.id);

  return <div data-testid="Day">{dayProvider(id)}</div>;
}
