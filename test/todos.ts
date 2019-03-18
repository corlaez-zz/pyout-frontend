import "mocha";
import { expect } from "chai";
import config from "../src/overko/config";
import { createOverkoMock } from "overko";
import Overtodo from "../src/viewmodels/overtodo";

describe("Todos", function() {
  describe("initialization", function() {
    it("should add items to the todo lists on Initialization", function() {
      const overko = createOverkoMock(config, {
        todosCache: {
          getTodos: () => [{ title: "title" }]
        }
      });

      const lengthBefore = overko.state.todos.list().length;
      expect(lengthBefore).eq(0);

      overko.onInitialize();

      const lengthAfter = overko.state.todos.list().length;
      expect(lengthAfter).eq(1);
    });
  });

  describe("todo viewModel", function() {
    it("should add items to the todo lists on Initialization", function() {
      const mock = createOverkoMock(config, {
        todosCache: {
          getTodos: () => [{ title: "title" }]
        }
      });

      const todo = new Overtodo({ overko: mock });

      const lengthBefore = todo.todos.length;
      expect(lengthBefore).eq(0);

      mock.onInitialize();

      const lengthAfter = todo.todos.length;
      expect(lengthAfter).eq(1);
    });
  });
});
