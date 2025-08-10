"use client";

import Cards from "./Cards";
import DayHeader from "./DayHeader";
import Link from "next/link";

export default function Day6() {
  return (
    <div
      data-testid="Day6"
      className="space-y-4 text-gray-700 dark:text-gray-100"
    >
      <Link href="/" className="underline text-xs font-bold">
        {"< Back"}
      </Link>
      <DayHeader
        title={"A Bad Call in Yesterday's Live Poker Session"}
        tagTypes={["No Limit Hold'em"]}
      />
      <p>
        Seated to my right is a middle-aged man who plays a tight-aggressive
        style, typically involved in only one or two hands per orbit.
      </p>
      <p>
        In this hand, he limps from early position. I glance at my cards{" "}
        <Cards hand="KdQd" /> a great hand that I&apos;ll always raise in this
        situation. I make it 6bb, and the action folds around to the cutoff, who
        has a loose, sticky style and tends to call much too frequently once
        he&apos;s put money in the pot, he flats.
      </p>
      <p>
        Then, to my surprise, the original limper raises to 22bb. My gut tells
        me to fold right now, but my mind recognizes that the player in the
        cutoff is the type that to never raise here. I&apos;ve heard him
        complain many times in the past that he can&apos;t raise in these
        situations because it would make him look too strong. I figured that
        I&apos;m guaranteed to see the flop. I call, cutoff calls as well.
      </p>
      <p>Pot: 68bb</p>
      <p>
        Flop: <Cards hand="Ah 6c 4h" />
      </p>
      <p>The action checks through.</p>
      <p>
        Turn: <Cards hand="7s" />
      </p>
      <p>
        The original limper leads out with a 22bb bet. I fold, and the cutoff
        folds.
      </p>
      <p>
        I played the hand poorly. I knew I played it poorly. Calling the
        re-raise preflop was a mistake. My hand is easily dominated by stronger
        holdings like AA, KK, AK, or even AQ, hands that the limper is likely to
        limp-raise with. Moreover, I&apos;m out of position against the
        loose-sticky player to my left, which reduces my ability to win the pot
        with a bluff. I would have to flop incredibly well to be confident
        enough to raise the flop, such as a pair with a flush draw and a gutshot
        straight draw. I could perhaps opt for a range check, but that approach
        seems far too passive.
      </p>
    </div>
  );
}
