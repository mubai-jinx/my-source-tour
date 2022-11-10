import { describe, it, expect } from 'vitest';
import { isObject, isOn } from '../src';

describe('测试utils', () => {
  it('测试isObject', () => {
    expect(isObject({})).toBe(true)
    expect(isObject(1)).toBe(false)
    expect(isObject(null)).toBe(false)
  });
  it('测试isOn', () => {
    expect(isOn('click')).toBe(false)
    expect(isOn('onClick')).toBe(true)
  });
})