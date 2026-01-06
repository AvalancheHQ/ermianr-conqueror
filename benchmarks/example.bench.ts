import { bench, describe } from "vitest";

describe("Array Operations", () => {
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

  bench("Array.map", () => {
    const arr = Array.from({ length: 1000 }, (_, i) => i);
    arr.map((x) => x * 2);
  });
});

describe("String Operations", () => {
  bench("String concatenation", () => {
    let _str = "";
    for (let i = 0; i < 100; i++) {
      _str += `item-${i}`;
    }
  });

  bench("String template literals", () => {
    let str = "";
    for (let i = 0; i < 100; i++) {
      str = `${str}item-${i}`;
    }
  });

  bench("Array.join", () => {
    const parts: string[] = [];
    for (let i = 0; i < 100; i++) {
      parts.push(`item-${i}`);
    }
    parts.join("");
  });
});
