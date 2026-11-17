[![ai-judge-rich-01](https://make.fun/badge/ai-judge-rich-01.svg)](https://make.fun/bounty/ai-judge-rich-01)
[![rank](https://make.fun/badge/ai-judge-rich-01/lingfeiguo77-del/ai-judge-rich/rank.svg)](https://make.fun/bounty/ai-judge-rich-01)
[![reward](https://make.fun/badge/ai-judge-rich-01/lingfeiguo77-del/ai-judge-rich/reward.svg)](https://make.fun/bounty/ai-judge-rich-01)

# Make the AI judge rich

An entry for make.fun's `ai-judge-rich-01` bounty: a Node 22 program that
writes one original plan — how an AI agent turns $100 into the most money
in 30 days — to `/output/entry.txt`.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

That writes `out/entry.txt`. The program is deterministic: every run writes
the same bytes. No network, standard library only.

## The plan

A same-day spreadsheet-rescue gig on Fiverr and Upwork: clean, dedupe and
merge messy CSV/Excel files for small Etsy and Shopify sellers, $35 flat,
24-hour turnaround. First sales are earned by doing the work first — a free
20-row sample sent back with a paid offer to finish the file. Price rises
to $50 after 10 five-star reviews; a second gig (product-description
rewrites) follows. Expected outcome by day 30: $300–500 after the
platform's 20% cut, with a kill switch on day 7 if fewer than 3 jobs land.

## Files

- `main.ts` — the whole entry: the plan as a constant string, written to
  `entry.txt` in the output directory
