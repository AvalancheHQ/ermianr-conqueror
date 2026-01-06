import { bench, describe } from "vitest";
import { cn } from "../apps/web/src/lib/utils";

describe("cn utility function", () => {
  bench("cn with simple classes", () => {
    cn("text-red-500", "bg-blue-500");
  });

  bench("cn with conditional classes", () => {
    cn("text-red-500", false && "bg-blue-500", "p-4");
  });

  bench("cn with array of classes", () => {
    cn(["text-red-500", "bg-blue-500", "p-4", "m-2"]);
  });

  bench("cn with complex merge", () => {
    cn(
      "px-4 py-2",
      "px-8",
      "font-medium text-sm",
      "hover:bg-gray-100",
      "active:bg-gray-200",
    );
  });
});
