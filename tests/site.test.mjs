import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { routeFromHash, quoteUrl } from '../src/lib.js';

const root = fileURLToPath(new URL('../', import.meta.url));
const routes = JSON.parse(readFileSync(join(root, 'src/data/routes.json'), 'utf8'));

test('bookmarked routes survive GitHub Pages hash navigation', () => {
  assert.equal(routeFromHash('#/funeral-plans/plan-a'), '/funeral-plans/plan-a');
  assert.equal(routeFromHash('#/gallery/'), '/gallery');
  assert.equal(routeFromHash(''), '/');
  assert.equal(routeFromHash('#/'), '/');
  assert.equal(routeFromHash('#/missing'), '/missing');
});

test('family enquiry preserves the selected plan, age and dependants', () => {
  const url = new URL(quoteUrl({ plan: 'Plan A+ Plus', age: '65–74 years', family: '1 + 13' }));
  assert.equal(url.origin, 'https://wa.me');
  assert.equal(url.pathname, '/27818366788');
  assert.match(url.searchParams.get('text'), /Plan A\+ Plus/);
  assert.match(url.searchParams.get('text'), /65–74 years/);
  assert.match(url.searchParams.get('text'), /1 \+ 13/);
});

test('society enquiries do not include unrelated family selections', () => {
  const text = new URL(
    quoteUrl({ plan: 'Group Societies', age: '0–64 years', family: '1 + 5' }),
  ).searchParams.get('text');
  assert.match(text, /group society package/);
  assert.doesNotMatch(text, /Age band|dependants/);
});

test('all 18 pages have unique routes and every JSX page link resolves', () => {
  assert.equal(routes.length, 18);
  const paths = new Set(routes.map((route) => route.path));
  assert.equal(paths.size, 18);
  for (const file of readdirSync(join(root, 'src/pages'))) {
    const source = readFileSync(join(root, 'src/pages', file), 'utf8');
    for (const [, path] of source.matchAll(/href="#(\/[^"\s]*)"/g)) {
      assert.ok(paths.has(path), `${file}: missing route ${path}`);
    }
    for (const [, path] of source.matchAll(/(?:asset\(|file=)["'](assets\/[^"']+)["']/g)) {
      assert.ok(existsSync(join(root, 'public', path)), `${file}: missing asset ${path}`);
    }
  }
});

test('all confirmed monthly family premiums are preserved', () => {
  const expected = {
    FuneralPlansPlanA: [170, 220, 200, 260, 240, 300],
    FuneralPlansPlanAPlus: [200, 250, 250, 320, 320, 400],
    FuneralPlansPlanB: [250, 290, 280, 370, 360, 460],
  };
  for (const [page, values] of Object.entries(expected)) {
    const source = readFileSync(join(root, 'src/pages', `${page}.jsx`), 'utf8');
    const found = [...source.matchAll(/<strong>\s*\{['"]R(\d+)\.00['"]\}\s*<small>/g)].map((match) =>
      Number(match[1]),
    );
    assert.deepEqual(found, values, page);
  }
});
