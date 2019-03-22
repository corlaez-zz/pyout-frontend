import { createOverkoMock } from "overko";
import { config } from "../src/overko";
import OvertodoViewModel from "../src/viewmodels/overtodo";

describe("Todos", () => {
  describe("initialization", () => {
    it("overko should add items to the todo lists on Initialization", async () => {
      expect.assertions(2);

      const overko = createOverkoMock(config, {
        todosCache: {
          getTodos: () => [{ title: "title" }],
          setTodos: () => {}
        }
      });

      const lengthBefore = overko.state.todos.list().length;
      expect(lengthBefore).toBe(0);

      await overko.onInitialize();

      const lengthAfter = overko.state.todos.list().length;
      expect(lengthAfter).toBe(1);
    });
  });

  describe("todo viewModel", () => {
    it("view model should add items to the todo lists on Initialization", async () => {
      const mock = createOverkoMock(config, {
        todosCache: {
          getTodos: () => [{ title: "title" }],
          setTodos: () => {}
        }
      });

      const todo = new OvertodoViewModel({ overko: mock });

      const lengthBefore = todo.todos().length;
      expect(lengthBefore).toBe(0);

      await mock.onInitialize();

      const lengthAfter = todo.todos().length;
      expect(lengthAfter).toBe(1);
    });
  });
});
