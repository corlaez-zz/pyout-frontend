import { config } from "../src/overko";
import { createOverkoMock } from "overko";
import GenderPickerViewModel from "../src/viewmodels/GenderPicker";

describe("GenderPicker", () => {
  describe("ViewModel", () => {
    it("Check gender works correctly", async () => {
      expect.assertions(6);

      const overko = createOverkoMock(config, {
        todosCache: { getTodos: () => {} }
      });

      const genderPicker = new GenderPickerViewModel({ overko });

      const gender1 = { name: "Man", value: "17" };
      const gender2 = { name: "Woman", value: "18" };
      overko.state.gender.options([gender1, gender2]);

      expect(genderPicker.checkGender().length).toBe(0);

      genderPicker.checkGender.push(gender2.value);

      expect(genderPicker.checkGender().length).toBe(1);
      expect(genderPicker.checkGender()[0]).toBe("18");

      genderPicker.checkGender.push(gender1.value);

      expect(genderPicker.checkGender().length).toBe(2);
      expect(genderPicker.checkGender()[0]).toBe("18");
      expect(genderPicker.checkGender()[1]).toBe("17");
    });
  });
});
