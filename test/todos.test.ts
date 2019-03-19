import { config } from "../src/overko";
import { createOverkoMock } from "overko";
import Overtodo from "../src/viewmodels/overtodo";

describe("Todos", () => {
  describe("initialization", () => {
    it("should add items to the todo lists on Initialization", async () => {
      const overko = createOverkoMock(config, {
        todosCache: {
          getTodos: () => [{ title: "title" }],
          setTodos: () => {}
        }
      });

      const lengthBefore = overko.state.todos.list().length;
      expect(lengthBefore).toBe(0);

      overko.onInitialize();
      await overko.initialized;

      const lengthAfter = overko.state.todos.list().length;
      expect(lengthAfter).toBe(1);
    });
  });

  describe("todo viewModel", () => {
    it("should add items to the todo lists on Initialization", async () => {
      const mock = createOverkoMock(config, {
        todosCache: {
          getTodos: () => [{ title: "title" }],
          setTodos: () => {}
        }
      });

      const todo = new Overtodo({ overko: mock });

      const lengthBefore = todo.todos().length;
      expect(lengthBefore).toBe(0);

      mock.onInitialize();
      await mock.initialized;

      const lengthAfter = todo.todos().length;
      expect(lengthAfter).toBe(1);
    });
  });
});
