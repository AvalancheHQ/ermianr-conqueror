import { bench, describe } from "vitest";

describe("Array operations", () => {
  bench("Array.push", () => {
    const arr: number[] = [];
    for (let i = 0; i < 1000; i++) {
      arr.push(i);
    }
  });

  bench("Array.unshift", () => {
    const arr: number[] = [];
    for (let i = 0; i < 1000; i++) {
      arr.unshift(i);
    }
  });
});

describe("Object operations", () => {
  bench("Object.assign", () => {
    const target = { a: 1, b: 2 };
    for (let i = 0; i < 1000; i++) {
      Object.assign({}, target, { c: i });
    }
  });

  bench("Spread operator", () => {
    const target = { a: 1, b: 2 };
    for (let i = 0; i < 1000; i++) {
      const _result = { ...target, c: i };
    }
  });
});
