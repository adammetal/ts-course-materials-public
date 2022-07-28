import { test, expect } from 'vitest';
import { SmartPhone, OS } from '../phones';
import { LolPhones, NetStar, WellNet } from '../shop';

test('phone shopping', () => {
  const phone = new SmartPhone('Factory', '000', OS.Android);
  const shop = new LolPhones();
  const sim = new NetStar();

  shop.sell(phone, 'Adam', 10000);
  expect(phone.getId()).toBe('(Android) - Adam - (000)');

  sim.transfer(phone, '123');
  expect(phone.getId()).toBe('(Android) - Adam - (123)');
});

test('phone shopping at the same place', () => {
  const phone = new SmartPhone('Factory', '000', OS.iPhone);
  const shop = new WellNet();

  shop.sell(phone, 'Adam', 10000);
  shop.transfer(phone, '456');

  expect(phone.getId()).toBe('(iPhone) - Adam - (456)');
});