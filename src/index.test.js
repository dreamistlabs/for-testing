import ForTesting from "./lib/ForTesting";

describe("ForTesting#greetings", () => {
  test("returns a greeting message", () => {
    const instance = new ForTesting();
    const result = instance.greetings();

    expect(result).toContain("You are a rockstar");
  });
});
