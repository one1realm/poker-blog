type SuitKey = "d" | "h" | "s" | "c";

const ranks = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"];
const suitSymbols: Record<SuitKey, { symbol: string; color: string }> = {
  d: { symbol: "♦", color: "blue" },
  h: { symbol: "♥", color: "red" },
  s: { symbol: "♠", color: "black" },
  c: { symbol: "♣", color: "green" },
};

export const parseHand = (handStr: string) => {
  const cards = handStr.match(/.{1,2}/g)?.map((card) => {
    const rank = card[0];
    if (!ranks.includes(rank))
      throw new Error(`Failed to parse rank(s) of hand: ${handStr}`);
    const suit = card[1].toLowerCase() as SuitKey;
    if (!suitSymbols[suit])
      throw new Error(`Failed to parse suit(s) of hand: ${handStr}`);
    return { rank, ...suitSymbols[suit] };
  });

  if (!cards) throw new Error("Failed to parse any cards of the provided hand");

  return cards;
};

export type Props = {
  hand: string;
};

export default function Cards({ hand }: Props) {
  const cards = parseHand(hand.replaceAll(/[\s\,]/g, ""));

  return (
    <span
      data-testid="Cards"
      style={{
        display: "inline-flex",
        gap: "0.05rem",
        paddingLeft: "0.2rem",
        paddingRight: "0.2rem",
        verticalAlign: "-0.6rem",
      }}
    >
      {cards.map((card, index) => (
        <span
          key={index}
          style={{
            position: "relative",
            display: "inline-block",
            width: "23px",
            height: "32px",
            border: "1px solid #333",
            borderRadius: "6px",
            padding: "6px",
            fontFamily: "sans-serif",
            color: card.color,
            backgroundColor: "white",
            verticalAlign: "middle",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: "0px",
              left: "3px",
              fontWeight: "bold",
              fontSize: "0.9rem",
            }}
          >
            {card.rank}
          </span>

          <span
            style={{
              position: "absolute",
              top: "72%",
              left: "62%",
              transform: "translate(-50%, -50%)",
              fontSize: "1rem",
            }}
          >
            {card.symbol}
          </span>
        </span>
      ))}
    </span>
  );
}
