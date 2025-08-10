"use client";

import DayHeader from "./DayHeader";
import Link from "next/link";

export default function Day8() {
  return (
    <div
      data-testid="Day8"
      className="space-y-4 text-gray-700 dark:text-gray-100"
    >
      <Link href="/" className="underline text-xs font-bold">
        {"< Back"}
      </Link>
      <DayHeader
        title={"No Mind's Eye"}
        tagTypes={["No Limit Hold'em", "Mental game"]}
      />
      <p>
        I&apos;ve been playing poker for years now, and I&apos;ve developed a
        style that&apos;s brought me a fairly decent win rate. I&apos;ve learned
        the game the hard way, by sitting down, making mistakes, leaking chips,
        and slowly patching those leaks through experience. It&apos;s been a
        long grind, and one that&apos;s relied more on instinct and
        trial-and-error than on theoretical study.
      </p>
      <p>But lately, I feel like I&apos;ve hit some kind of plateau.</p>
      <p>
        The games are getting tougher. The player pool is smaller, and there are
        fewer poker rooms than before. The competition that remains is sharper.
        And if I want to continue winning, to eventually sit in bigger games and
        hold my own against stronger opponents, something has to change.
      </p>
      <p>And I&apos;ve noticed is this ...</p>
      <p>
        <strong>I have a really hard time visualizing poker ranges.</strong>
      </p>
      <p>
        Sure, I know them to an extent. I can tell you what a standard opening
        range looks like from various positions, or which hands someone might
        3-bet in a certain spot. But I don&apos;t really see them. I don&apos;t
        have that mental picture some players talk about, where they visualize
        how a range evolves, street by street, from preflop to river. For me,
        it&apos;s all vague. More like a feeling, or a foggy guess, than a clear
        framework. It&apos;s like trying to find my way through a dark room.
      </p>
      <p>
        Then I stumbled upon an interesting condition:{" "}
        <strong>Aphantasia</strong>.
      </p>
      <p>
        It&apos;s the inability to visualize images in your mind, what&apos;s
        often called the <i>mind&apos;s eye</i>. Some people can close their
        eyes and see an apple. I close mine, and there&apos;s just... nothing.
        No apple. No anything.
      </p>
      <p>So how much has this affected the way I process poker hands?</p>
      <p>
        I don&apos;t know... I don&apos;t construct ranges in my mind street by
        street. Instead, I just sort of feel them, shaped by years of trial, and
        error. I often know when something feels off, when a bluff might get
        through, or when to fold a strong hand. But I&apos;m not thinking in
        terms of combos like, <i>He has 12 value hands and 6 bluffs</i>.
        I&apos;m just reacting based on instinct.
      </p>
      <p>
        And on the early streets, that&apos;s mostly fine. But as the hand
        progresses, to the turn or river, when ranges narrow and decisions get
        more nuanced, I start to feel lost. I don&apos;t have a clear map of
        what hands my opponent could or should have. My decisions become
        guesses. Sometimes good ones, but guesses all the same.
      </p>
      <p>
        It&apos;s worked well enough to turn a profit. But I fear it won&apos;t
        carry me further. If I want to keep progressing, I need to evolve, but
        in a way that suits how I think.
      </p>
      <p>
        What I need are concepts, systems, heuristics, and frameworks. I need to
        train my intuition not just through volume and repetition, but through
        intentional, structured study. I need to build a process that helps me
        effectively read hands and apply theory at the table, in live poker
        games.
      </p>
    </div>
  );
}
