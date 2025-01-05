"use client";

import DayHeader from "./DayHeader";
import Link from "next/link";

export default function Day5() {
  return (
    <div
      data-testid="Day5"
      className="space-y-4 text-gray-700 dark:text-gray-100"
    >
      <Link href="/" className="underline text-xs font-bold">
        {"< Back"}
      </Link>
      <DayHeader
        day={"5"}
        date={"2025-01-05"}
        title={"Key Reasons to Fold Low Pocket Pairs in Early Position"}
        tagTypes={["No Limit Hold'em"]}
      />
      <p>
        I used to believe that the primary reason to fold low pocket pairs from
        early position was to avoid the risk of losing in a set-over-set
        scenario. While that&apos;s definitely a valid concern, I&apos;ve come
        to realize there&apos;s another factor to consider.
      </p>
      <p>
        When we&apos;re holding the lowest pocket pairs, like pocket deuces or
        threes, we&apos;re essentially &quot;blocking&quot; a significant
        portion of our opponents&apos; potential pre-flop folding range. In
        other words, by holding these hands, we reduce the likelihood that our
        opponents will have weak hands like A2o, K3o, or 72o. This increases the
        risk that opponents will call our raise, leaving us in a tricky spot
        where we have to play out-of-position with a hand that has poor
        post-flop playability. Even worse, we might face a 3-bet, and we&apos;ll
        be forced to fold without realizing the equity of our hand.
      </p>
      <p>
        Compare this a hand like A5s, which block potential ace-high hands from
        opponents, but it also unblocks weaker hands that might contain a deuce
        or three. Additionally, A5s has good post-flop potential, with chances
        to hit nut flush draws or both high and low straights, giving it much
        better playability compared to low pocket pairs.
      </p>
    </div>
  );
}
