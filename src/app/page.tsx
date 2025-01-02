import Link from "next/link";

export default function Home() {
  return (
    <div
      data-testid="Home"
      className="space-y-4 text-gray-700 dark:text-gray-100"
    >
      <p>
        The purpose of this blog is to document the poker concepts I learn
        throughout the year and how I apply them to my overall strategy. The
        primary focus will be on the &quot;No Limit Hold&apos;em&quot; and
        &quot;Pot Limit Omaha&quot; variants.
      </p>
      <p className="text-lg font-bold">Entries</p>
      <ol className="flex flex-col gap-y-2">
        <li>
          <Link href="/day/1" className="underline">
            • Day 1 - Why I&apos;ve Chosen to Stop Multi-Tabling Poker
          </Link>
        </li>
        <li>
          <Link href="/day/2" className="underline">
            • Day 2 - Playing 99-JJ Out of Position in a 3-Bet Pot: Can
            Donk-Betting Solve the Problem?
          </Link>
        </li>
      </ol>
    </div>
  );
}
