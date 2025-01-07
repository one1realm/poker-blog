"use client";

import DayHeader from "./DayHeader";
import Link from "next/link";

export default function Day7() {
  return (
    <div
      data-testid="Day7"
      className="space-y-4 text-gray-700 dark:text-gray-100"
    >
      <Link href="/" className="underline text-xs font-bold">
        {"< Back"}
      </Link>
      <DayHeader
        day={"7"}
        date={"2025-01-07"}
        title={"My Experience with a Player Going All-In Every Hand"}
        tagTypes={["No Limit Hold'em"]}
      />
      <p>
        A while ago, a loose-aggressive player joined our table, clearly on tilt
        from some bad beats at another game. After a few hands, he made a bold
        declaration: he was going to “shove all-in every hand preflop, without
        even looking at his cards.”
      </p>
      <p>
        I remember thinking,{" "}
        <i>Alright, let&apos;s see if he really sticks to that.</i>
      </p>
      <p>
        I kept a close eye on him, curious if he&apos;d glance at his cards
        before making his move. And sure enough, he did exactly what he promised
        — going all-in every single hand, without peeking at his hole cards.
      </p>
      <p>
        Each time, I hoped for a strong hand to finally come my way — but that
        didn&apos;t happen. On the other hand, I did find myself some decent or
        marginal hands whenever I was in the big blind or late position.
      </p>
      <p>
        Given that he was open-shoving any two cards, it was clear that calling
        with hands that had more than 50% equity against his range would be
        profitable. So, I decided to make calls with the hands K9o, 88, and 99.
        But every time, I found myself on the losing side.
      </p>
      <p>
        In the end, this guy walked away with a massive 11k profit, having
        played for just 15-20 minutes before leaving the table.
      </p>
      <p>
        Looking back, I&apos;m confident I made the right moves — I had a slight
        equity lead every time I called, capitalizing on the +EV opportunities
        that I was given. Still, there&apos;s no denying the frustration that
        comes with losing in such a high-variance situation.
      </p>
    </div>
  );
}
