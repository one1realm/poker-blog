"use client";

import Cards from "./Cards";
import DayHeader from "./DayHeader";
import Link from "next/link";

export default function Day3() {
  return (
    <div
      data-testid="Day3"
      className="space-y-4 text-gray-700 dark:text-gray-100"
    >
      <Link href="/" className="underline text-xs font-bold">
        {"< Back"}
      </Link>
      <DayHeader
        title={"Take Advantage of Weak Callers with Bigger Open-Raises"}
        tagTypes={["No Limit Hold'em"]}
      />
      <p>
        <i>
          This concept may not work in tougher games where players are more
          aggressive, have better hand selection and 3bets more frequently
          preflop.
        </i>
      </p>
      <p>
        We sit down at a live poker table and observe a few pots going to
        showdown. It quickly becomes apparent that the standard open-raise size
        is about 5 big blinds, which is typical for live games. We also notice
        that the game seems to be rather weak-passive, the flops are often
        multi-way, we rarely see 3bets, and players tend to have wide hand
        ranges, frequently holding hands like <Cards hand="As4s" />,{" "}
        <Cards hand="Qh9c" />, <Cards hand="Kd7c" />, <Cards hand="Jh7h" />, and
        <Cards hand="3c3d" />.
      </p>
      <p>
        From this, we conclude that there&apos;s an opportunity to increase our
        open-raise size while still attracting a reasonable number of callers,
        most of whom are playing overly loose ranges.
      </p>
      <p>
        We begin by gradually increasing our open-raise size and closely
        monitoring how our opponents respond. If they continue calling with weak
        hands without adjusting, we keep increasing the size until we notice
        them tightening up their calling ranges. Once we&apos;ve identified the
        point where they start folding more frequently, we can maximize our
        expected value by selecting an open-raise size just below that
        threshold.
      </p>
      <p>
        Ultimately, we may find that an open-raise of 11 big blinds is optimal.
        While this might seem excessive, if our opponents are indeed calling too
        wide, this larger raise size is the most effective way to exploit their
        inelasticity.
      </p>
      <p>
        It&apos;s important to remember that as we increase our open-raise size,
        the post-flop stack-to-pot ratio (SPR) decreases. This means we must
        adjust our hand selection accordingly to account for the reduced
        flexibility in post-flop play.
      </p>
    </div>
  );
}
