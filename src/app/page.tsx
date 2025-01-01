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
      <ol>
        <li>
          <Link href="/day/1" className="underline">
            Day 1 - Why I&apos;ve Chosen to Stop Multi-Tabling Poker
          </Link>
        </li>
      </ol>
    </div>
  );
}
