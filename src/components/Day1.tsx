"use client";

import DayHeader from "./DayHeader";
import Link from "next/link";

export default function Day1() {
  return (
    <div
      data-testid="Day1"
      className="space-y-4 text-gray-700 dark:text-gray-100"
    >
      <Link href="/" className="underline text-xs font-bold">
        {"< Back"}
      </Link>
      <DayHeader
        day={"1"}
        date={"2025-01-01"}
        title={"Why I've Chosen to Stop Multi-Tabling Poker"}
        tagTypes={["General", "Mental game"]}
      />
      <p>
        Okay, hear me out. There are several reasons why I&apos;ve decided to
        establish this rule for myself.
      </p>
      <p>
        From analyzing my statistics, I&apos;ve noticed that when I multi-table,
        my winrate drops significantly. In fact, it becomes less profitable per
        hour than if I had focused on playing a single table.
      </p>
      <p>
        It seems that when I split my attention across multiple tables, I
        struggle to maintain a coherent mental narrative of the hands being
        played. I find it difficult to track my opponents&apos; tendencies and
        behavior in a meaningful way, which ultimately impacts my
        decision-making.
      </p>
      <p>
        By focusing on a single table, I&apos;m able to fully observe my
        opponents&apos; playing styles. I can pay attention to the hole cards
        they show down and document their tendencies for future reference,
        allowing me to make more informed decisions.
      </p>
      <p>
        Moreover, playing fewer tables helps to reduce variance. A high winrate
        naturally lowers the risk of experiencing extended downswings.
      </p>
      <p>
        In the end, this approach allows me to play my best game with optimal
        focus, resulting in higher hourly profits and fewer downswings.
      </p>
    </div>
  );
}
