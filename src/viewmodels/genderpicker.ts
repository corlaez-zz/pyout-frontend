import * as ko from "knockout";
import template from "./GenderPicker.html";
import { connect, Connect } from "../overko";
import { GenderOption } from "../overko/state";

class GenderPickerViewModel {
  checkGender: ko.ObservableArray<string>;
  options: ko.ObservableArray<GenderOption>;
  message: ko.Computed<string>;

  constructor(props: Connect) {
    const self = this;
    self.checkGender = props.overko.state.gender.checkGender;
    self.options = props.overko.state.gender.options;
    self.message = ko.computed(() =>
      self
        .options()
        .filter(o => self.checkGender().includes(o.value))
        .map(o => o.name)
        .join(", ")
    );
  }
}

export const registerGenderPicker = () => {
  const config: ko.components.Config = {
    viewModel: connect(GenderPickerViewModel),
    template
  };
  ko.components.register("gender-picker", config);
};

export default GenderPickerViewModel;
