"use client";

import DayHeader from "./DayHeader";
import Link from "next/link";

export default function Day4() {
  return (
    <div
      data-testid="Day4"
      className="space-y-4 text-gray-700 dark:text-gray-100"
    >
      <Link href="/" className="underline text-xs font-bold">
        {"< Back"}
      </Link>
      <DayHeader
        title={"Staying Sober and Sharper at the Table"}
        tagTypes={["General"]}
      />
      <p>
        I need to be honest with myself: I don&apos;t always give the game my
        full attention. In fact, I&apos;d say I rarely do. More often than not,
        I find myself sipping on a drink, browsing the internet on my phone,
        watching streams/videos, or whatever is on the TV.
      </p>

      <p>
        I go to the live poker games to primarily make profit, but also to have
        a good time with the poker friends I&apos;ve made over the years.
        I&apos;ve become somewhat known for having a couple of drinks each poker
        night, to the point where other players are surprised if I don&apos;t.
        I&apos;ve even had them jokingly ask, “Aren&apos;t you having your wine
        tonight, Bob?”
      </p>

      <p>
        But as the new year begins, it&apos;s time for a change. In the spirit
        of my first blog entry, I&apos;ve realized that these distractions are
        getting in the way of my focus and performance. So, I&apos;ve set a new
        rule for myself: no alcohol before or during poker games. If I decide to
        have a drink, that will signal the end of my poker session. Simple as
        that.
      </p>

      <p>
        I&apos;m also committed to staying more focused and actively engaged in
        the game, particularly when it comes to profiling my opponents and
        identifying exploitable patterns that I can use to my advantage in
        future hands.
      </p>

      <p>
        How will I make this change? By shortening my live poker sessions. In
        the past, I&apos;ve found myself playing marathon sessions that can
        stretch to 12 hours, but let&apos;s face it: staying focused and playing
        your A-game for that long is simply not realistic. So, this year,
        I&apos;m cutting my sessions in half to ensure I&apos;m always playing
        at my best.
      </p>
    </div>
  );
}
