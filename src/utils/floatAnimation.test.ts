import test from 'node:test';
import assert from 'node:assert/strict';
import { getProjectFloatSpec, getProjectFloatStyle } from './floatAnimation';

test('getProjectFloatSpec returns subtle, calm motion bounds', () => {
  for (let albumIdx = 0; albumIdx < 5; albumIdx++) {
    for (let itemIdx = 0; itemIdx < 12; itemIdx++) {
      const spec = getProjectFloatSpec(itemIdx, albumIdx);
      assert.ok(spec.durationSec >= 4.4 && spec.durationSec <= 6.2, `duration out of subtle range: ${spec.durationSec}`);
      assert.ok(spec.amplitudePx >= 4 && spec.amplitudePx <= 7, `amplitude out of subtle range: ${spec.amplitudePx}`);
      assert.ok(spec.delaySec <= 0 && spec.delaySec > -spec.durationSec, `delay should be negative within one cycle: ${spec.delaySec}`);
    }
  }
});

test('adjacent items have staggered phases so cards do not bob in unison', () => {
  const first = getProjectFloatSpec(0, 0);
  const second = getProjectFloatSpec(1, 0);
  const third = getProjectFloatSpec(2, 0);

  assert.notEqual(first.delaySec, second.delaySec);
  assert.notEqual(second.delaySec, third.delaySec);
});

test('getProjectFloatStyle formats CSS custom properties properly', () => {
  const style = getProjectFloatStyle(1, 0) as Record<string, string>;
  assert.match(style['--float-duration'], /^\d+(\.\d+)?s$/);
  assert.match(style['--float-delay'], /^-?\d+(\.\d+)?s$/);
  assert.match(style['--float-distance'], /^-\d+(\.\d+)?px$/);
});
