import { expect, it } from "vitest";

/**
 * You can't put the optional argument before the required one (i.e. put `last?` before `first`)
 * You can also say it like `last: string | undefined`,
 * but then you have to specify `undefined` as the second argument
 * when invoking the function
 */
export const getName = (first: string, last?: string) => {
  if (last) {
    return `${first} ${last}`;
  }
  return first;
};

it("Should work with just the first name", () => {
  const name = getName("Matt");

  expect(name).toEqual("Matt");
});

it("Should work with the first and last name", () => {
  const name = getName("Matt", "Pocock");

  expect(name).toEqual("Matt Pocock");
});
