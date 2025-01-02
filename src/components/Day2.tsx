"use client";

import DayHeader from "./DayHeader";
import Link from "next/link";

export default function Day2() {
  return (
    <div
      data-testid="Day2"
      className="space-y-4 text-gray-700 dark:text-gray-100"
    >
      <Link href="/" className="underline text-xs font-bold">
        {"< Back"}
      </Link>
      <DayHeader
        day={"2"}
        date={"2025-01-02"}
        title={
          "Playing 99-JJ Out of Position in a 3-Bet Pot: Can Donk-Betting Solve the Problem?"
        }
        tagTypes={["No Limit Hold'em"]}
      />
      <p>
        During a recent morning poker session, I found myself in a spot that I
        often find uncomfortable: playing 6-max No Limit Hold&apos;em from early
        position with a medium-high pocket pair, specifically 99 to JJ. I
        open-raise, and the player to my left calls, followed by the player in
        the next position who decides to squeeze.
      </p>

      <p>
        My immediate instinct is to call. After all, my hand feels strong enough
        to continue, but not strong enough to raise. However, I quickly realize
        that I&apos;m in a tricky situation. I&apos;m out of position, with no
        initiative in the hand, and there&apos;s still a player left to act
        behind me (even though they&apos;re capped).
      </p>

      <p>
        But the real dilemma comes on the flop. How do we proceed from here?
      </p>

      <p>
        In these situations, I typically check my entire range, allowing the
        players behind me to act first. This gives me time to reassess. More
        often than not, this feels like the natural progression of the hand.
        However, I find this approach problematic when I&apos;ve flopped a
        vulnerable overpair — a situation that occurs roughly 25% of the time.
      </p>

      <p>
        At that point, I&apos;m in a tricky spot: I like my hand, but I&apos;m
        aware that it&apos;s susceptible to being outdrawn on later streets.
        Overcards, potential straightening-, or flushing- cards could all
        diminish the strength of my hand.
      </p>

      <p>
        So, I start to wonder if fast-playing with a check-raise is the best
        course of action.
      </p>

      <p>
        But wait — let&apos;s not rush. We&apos;re up against an uncapped
        villain who 3-bet preflop, and there&apos;s a real possibility that they
        hold a higher pocket pair. As tempting as it might be to build the pot
        now, we have to consider whether that&apos;s the right move.
      </p>

      <p>
        The alternative — checking — is also unappealing. If I check, the
        aggressor can continuation-bet with their premium hands and strong
        draws, while also checking back weaker hands like mid-to-bottom pairs or
        gutshots, hoping to improve on later streets.
      </p>

      <p>
        This leaves me in a tough spot, where even if a blank comes on the turn,
        I&apos;m not sure whether I&apos;m in a good or bad position.
      </p>

      <p>
        So, what&apos;s the solution? Maybe we can sidestep this dilemma by
        adopting a donk-bet strategy on the flop, but only under specific
        conditions:
      </p>

      <ol>
        <li>• We&apos;re in a 3-bet pot.</li>
        <li>• We&apos;re out of position.</li>
        <li>• We have a vulnerable overpair.</li>
      </ol>

      <p>
        If we choose to donk bet small, say around 33% of the pot, our opponents
        are likely to call with weaker one-pair hands while folding most of
        their unpaired overcards. This approach allows us to win more when
        we&apos;re ahead and reduces the risk of getting outdrawn when potential
        scare cards hit the turn or river.
      </p>

      <p>
        By donk-betting, we take the initiative in the hand. We can then
        continue to value bet small, as long as we believe our opponents will
        call with weaker hands.
      </p>

      <p>
        Of course, if they decide to raise or make a sizable bet, we can
        confidently fold, knowing that our pocket pair is no longer strong
        enough to continue.
      </p>

      <p>
        Donk-betting has never been a part of my typical poker strategy, but in
        this specific situation, I find it appealing. I might give it a try and
        incorporate it into my play when the conditions are right.
      </p>
    </div>
  );
}
