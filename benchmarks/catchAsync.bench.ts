import { bench, describe } from "vitest";
import { catchAsync } from "../apps/web/src/lib/catchAsync";

describe("catchAsync utility function", () => {
  bench("catchAsync with successful promise", async () => {
    await catchAsync(Promise.resolve("success"));
  });

  bench("catchAsync with rejected promise", async () => {
    await catchAsync(Promise.reject(new Error("error")));
  });

  bench("catchAsync with delayed promise", async () => {
    await catchAsync(
      new Promise((resolve) => setTimeout(() => resolve("delayed"), 0)),
    );
  });

  bench("catchAsync with complex data", async () => {
    const complexData = {
      users: Array.from({ length: 100 }, (_, i) => ({
        id: i,
        name: `User ${i}`,
        email: `user${i}@example.com`,
      })),
    };
    await catchAsync(Promise.resolve(complexData));
  });
});
