import { createOverkoMock } from "overko";
import { config } from "../src/overko";

describe("Initialization", () => {
  it("Verify state is updated with the results of effects", async () => {
    expect.assertions(2);

    const overko = createOverkoMock(config, {
      todosCache: {
        getTodos: () => [{ title: "title" }]
      },
      api: {
        genders: async () => [{ value: 1, name: "gender" }],
        platforms: async () => [{ value: 1, name: "platform" }]
      }
    });

    expect(overko.state.todos.list().length).toBe(0);
    expect(overko.state.gender.options().length).toBe(0);
    expect(overko.state.platform.options().length).toBe(0);

    await overko.onInitialize();

    expect(overko.state.todos.list().length).toBe(1);
    expect(overko.state.gender.options().length).toBe(1);
    expect(overko.state.platform.options().length).toBe(1);
  });
});
