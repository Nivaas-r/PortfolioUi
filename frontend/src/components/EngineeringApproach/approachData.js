export const APPROACH_ITEMS = [
  {
    id: 'understand',
    icon: 'search',
    title: 'Understand Deeply',
    desc: 'I start with failure modes and edge cases, not the happy path — most production bugs live in the gap between what a ticket says and what actually happens.',
  },
  {
    id: 'design',
    icon: 'layers',
    title: 'Design for Scale',
    desc: 'Stateless services, idempotent APIs, and async processing by default wherever retries or partial failures are possible.',
  },
  {
    id: 'build',
    icon: 'gear',
    title: 'Build & Automate',
    desc: "Tests, CI, and consistent patterns aren't extra work — they're what makes a codebase safe to change six months later.",
  },
  {
    id: 'measure',
    icon: 'chart',
    title: 'Measure & Improve',
    desc: 'I track what actually matters in production — latency, error rates, retry counts — and let that drive the next change, not intuition.',
  },
];
