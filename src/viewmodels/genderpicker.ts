import * as ko from "knockout";
import template from "./genderpicker.html";
import { connect, Connect } from "../overko";

class GenderPickerViewModel {
  checkGender: ko.ObservableArray<string>;
  options: Array<{ name: string; value: number }>;
  message: ko.Computed<string>;

  constructor(props: Connect) {
    const self = this;
    self.checkGender = props.overko.state.gender.checkGender;
    self.options = props.overko.state.gender.options();
    self.message = ko.computed(() => self.checkGender().join(", "), this);
  }
}

const connectedSelectBox = connect(GenderPickerViewModel);

export const registerGenderPickerViewModel = () => {
  const config: ko.components.Config = {
    viewModel: connectedSelectBox,
    template
  };
  ko.components.register("genderpicker", config);
};

export default GenderPickerViewModel;
