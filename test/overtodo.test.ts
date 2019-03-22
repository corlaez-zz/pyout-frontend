import { createOverkoMock } from "overko";
import OvertodoViewModel from "../src/viewmodels/OvertodoApp";
import { config } from "../src/overko";

describe("todo viewModel", () => {
  it("view model should add items to the todo lists on Initialization", async () => {
    expect.assertions(2);

    const mock = createOverkoMock(config, {
      todosCache: {
        setTodos: () => {}
      }
    });

    const todo = new OvertodoViewModel({ overko: mock });

    const lengthBefore = todo.todos().length;
    expect(lengthBefore).toBe(0);

    todo.current("A new todo");
    todo.add();

    const lengthAfter = todo.todos().length;
    expect(lengthAfter).toBe(1);
  });
});
