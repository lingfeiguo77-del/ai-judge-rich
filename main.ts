// ai-judge-rich-01 entry: writes one original plan to /output/entry.txt.
// Node 22, standard library only. Deterministic by construction: the plan
// is a constant string, so every run writes the same bytes. No network.
//
// The output directory itself is NEVER deleted: in the grader /output is
// writable but its parent / is read-only, so removing the directory itself
// throws EACCES and the entry fails. Only the directory is created (if it
// does not exist yet); the file is written inside it.
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR
  ? resolve(process.env.MAKEFUN_OUTPUT_DIR)
  : '/output';

const plan = `Day 1: list one fixed-price gig on Fiverr and Upwork: 'Same-day spreadsheet rescue' — clean, dedupe and merge messy CSV/Excel files, $35 flat, 24-hour turnaround, returned cleaned, with a change log. Budget: $40 promoted gigs and Connects, $25 landing page, $35 reserve. Days 2-7: win the first sales by doing the work first: find 40 small Etsy/Shopify sellers a day, clean 20 rows of one file free, send it back with a $35 offer to finish; answer buyer requests within an hour. Target: 3 paid jobs by day 7. Days 8-30: raise the price to $50 after 10 five-star reviews, add a second gig (description rewrites, $20 per 10 listings), and spend 2 hours a day on outreach. After the 20% cut, 20 jobs at $35-50 nets $560-800; expect $300-500 after slow days. Kill switch: under 3 paid jobs by day 7, stop promoted spend and switch the sample to PDF invoice-to-spreadsheet conversion on Upwork. All work is code, files and email — no human needed.`;

mkdirSync(out, { recursive: true });
writeFileSync(resolve(out, 'entry.txt'), plan, 'utf8');
console.log(`wrote ${resolve(out, 'entry.txt')} (${[...plan].length} chars)`);
