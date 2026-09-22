import type { ThemeId } from "@/lib/themes"

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string }
  | { type: "code"; text: string }

export type Post = {
  slug: string
  title: string
  date: string
  readingTime: string
  excerpt: string
  /** Fandom skin applied to the whole page when the post is open. */
  theme: ThemeId
  tags: string[]
  body: Block[]
}

export const POSTS: Post[] = [
  {
    slug: "on-writing-boring-code",
    title: "In praise of boring code",
    date: "2024-11-02",
    readingTime: "5 min",
    excerpt:
      "The most valuable code I write is the code nobody notices. A short defense of predictability over cleverness.",
    theme: "base",
    tags: ["engineering", "craft"],
    body: [
      {
        type: "p",
        text: "Early in my career I thought good code was clever code. The tighter the abstraction, the more impressed I was with myself. These days the code I'm proudest of is the code a tired engineer can read at 3am during an incident and immediately understand.",
      },
      {
        type: "h2",
        text: "Cleverness has a cost",
      },
      {
        type: "p",
        text: "Every clever trick is a small tax on the next person who reads it — and that person is usually future-you, with less context than you have right now. Boring code front-loads the effort so nobody pays interest later.",
      },
      {
        type: "quote",
        text: "Write code as if the person maintaining it is a violent psychopath who knows where you live. That person is you, in eight months.",
      },
      {
        type: "p",
        text: "None of this means avoiding good abstractions. It means earning them. Reach for the plain version first, and only add machinery when the pain is real and repeated.",
      },
    ],
  },
  {
    slug: "the-legend-of-clean-code",
    title: "The Legend of Clean Code",
    date: "2024-09-18",
    readingTime: "6 min",
    excerpt:
      "What a lifetime of Nintendo games taught me about level design, onboarding, and rewarding curiosity in software.",
    theme: "nintendo",
    tags: ["design", "games", "Nintendo"],
    body: [
      {
        type: "p",
        text: "The first level of Super Mario Bros. teaches you the entire game without a single word of text. A Goomba walks toward you. You either jump or you die. That's a tutorial, a mechanic, and a stakes-setter in about four seconds.",
      },
      {
        type: "h2",
        text: "World 1-1 is documentation",
      },
      {
        type: "p",
        text: "Great software onboards the same way. The happy path should be so obvious that the docs feel optional. If your API needs a paragraph to explain the first call, you've built a level that opens with a boss fight.",
      },
      {
        type: "quote",
        text: "It's dangerous to go alone — but a good default config means you rarely have to.",
      },
      {
        type: "h2",
        text: "Reward the explorer",
      },
      {
        type: "p",
        text: "Zelda hides heart pieces behind bombable walls. The best tools hide power behind discoverable flags — invisible to beginners, delightful to the curious. Progressive disclosure is just good dungeon design.",
      },
    ],
  },
  {
    slug: "setting-sail-with-distributed-systems",
    title: "Setting Sail with Distributed Systems",
    date: "2024-07-30",
    readingTime: "7 min",
    excerpt:
      "A crew is only as strong as its weakest link, and so is your cluster. Notes on consensus, trust, and chasing an impossible dream.",
    theme: "onepiece",
    tags: ["distributed systems", "anime", "One Piece"],
    body: [
      {
        type: "p",
        text: "Every great crew has specialists — a navigator, a cook, a doctor — who each own one thing and trust the others to own theirs. A healthy distributed system is the same: services that do one job well and communicate through clear contracts instead of reaching into each other's kitchens.",
      },
      {
        type: "h2",
        text: "Consensus is a crew agreement",
      },
      {
        type: "p",
        text: "Raft and Paxos are just formalized ways for a crew to agree on which way the ship is pointing, even when messages get lost in a storm. The magic isn't the algorithm — it's accepting that some nodes will always be unreachable and building for it anyway.",
      },
      {
        type: "quote",
        text: "I don't want to conquer anything. I just want the whole system to stay up when one node goes down.",
      },
      {
        type: "p",
        text: "Set sail with idempotency, retries with backoff, and the humility to assume the network hates you. The Grand Line is just production with better weather effects.",
      },
    ],
  },
  {
    slug: "twelfth-man-building-for-scale",
    title: "The 12th Man: Building for Scale",
    date: "2024-06-11",
    readingTime: "6 min",
    excerpt:
      "The loudest stadium in the NFL is a lesson in load. What game day traffic teaches you about capacity planning.",
    theme: "seahawks",
    tags: ["infrastructure", "sports", "Seahawks"],
    body: [
      {
        type: "p",
        text: "CenturyLink — sorry, Lumen Field — once hit 137.6 decibels of crowd noise. That's not a metaphor for load, that IS load: a sudden, coordinated spike that either your defense handles or it doesn't.",
      },
      {
        type: "h2",
        text: "The snap count is your rate limiter",
      },
      {
        type: "p",
        text: "A false start is what happens when you react to noise instead of signal. Rate limiters and circuit breakers are your offensive line staying disciplined while everything around them screams. Hold the line, or you're moving back five yards.",
      },
      {
        type: "quote",
        text: "Defense wins championships. Backpressure wins uptime.",
      },
      {
        type: "p",
        text: "Autoscaling is your bench. It only helps if you called it up before the drive started — cold starts during a fourth-quarter surge are how you lose the game.",
      },
    ],
  },
  {
    slug: "a-song-of-bugs-and-fixes",
    title: "A Song of Bugs and Fixes",
    date: "2024-04-22",
    readingTime: "8 min",
    excerpt:
      "In the game of production, you win or you page. On heisenbugs, dread, and the long night of the on-call engineer.",
    theme: "darkfantasy",
    tags: ["debugging", "on-call", "dark fantasy"],
    body: [
      {
        type: "p",
        text: "There is a particular dread to the pager going off at 3am. The graphs are red. The cause is unknown. And somewhere in a codebase older than your tenure, a bug has been sleeping, waiting for the exact traffic pattern that would wake it.",
      },
      {
        type: "h2",
        text: "The heisenbug does not want to be seen",
      },
      {
        type: "p",
        text: "Attach a debugger and it vanishes. Add a log line and the race condition resolves itself out of spite. These are the ghosts of concurrency, and you exorcise them not with cleverness but with patience, observability, and a willingness to stare into the abyss of a flame graph.",
      },
      {
        type: "quote",
        text: "The night is dark and full of segfaults.",
      },
      {
        type: "p",
        text: "When the fix finally lands, there is no glory. The graphs go green, the pager sleeps, and you write the post-mortem so the next watcher on the wall knows what came for you in the dark.",
      },
    ],
  },
  {
    slug: "building-block-by-block",
    title: "Building Block by Block",
    date: "2024-02-14",
    readingTime: "5 min",
    excerpt:
      "Every cathedral starts with a single dirt block. On composability, iteration, and the joy of small, snappable parts.",
    theme: "minecraft",
    tags: ["architecture", "games", "Minecraft"],
    body: [
      {
        type: "p",
        text: "The genius of Minecraft is that everything is the same size. A block of dirt and a block of diamond obey identical rules, so anything that works on one works on all of them. That uniformity is why a twelve-year-old can build a working computer out of redstone.",
      },
      {
        type: "h2",
        text: "Small parts, snappable edges",
      },
      {
        type: "p",
        text: "Good software has the same property. When your components share consistent interfaces, composition becomes play. You stop asking 'can these fit together?' and start asking 'what should I build?'",
      },
      {
        type: "quote",
        text: "You don't need a blueprint to start. You need one block, and permission to place the next one.",
      },
      {
        type: "p",
        text: "Ship the dirt hut. It keeps the creepers out tonight. The cathedral is just a dirt hut you kept iterating on, one snappable block at a time.",
      },
    ],
  },
]

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug)
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
