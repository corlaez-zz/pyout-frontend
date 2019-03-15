import 'mocha'
import { expect } from 'chai'
import config from '../src/overko/config'
import { createOverkoMock } from '../src/overko/lib/Overko';

describe('Todos', function () {
  describe('initialization', function () {
    it('should add items to the todo lists on Initialization', function () {
      const overko = createOverkoMock(config, {
        todosCache: {
          getTodos: () => ([{ title: 'title' }])
        }
      })

      const lengthBefore = overko.getSnapshot().state.todos.list().length
      expect(lengthBefore).eq(0)

      overko.onInitialize()

      const lengthAfter = overko.getSnapshot().state.todos.list().length
      expect(lengthAfter).eq(1)
    });
  });
});
