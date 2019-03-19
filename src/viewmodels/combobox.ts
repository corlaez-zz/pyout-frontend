import * as ko from "knockout";
import template from "./combobox.html";
import { connect, Connect } from "../overko";

class ComboBoxViewModel {
  selectedOption: ko.Observable<string>;
  options: Array<{ name: string; value: number }>;

  constructor(props: Connect) {
    const self = this;
    self.selectedOption = props.overko.state.countries.selectedOption;
    self.options = props.overko.state.countries.options();
  }
}

const connectedComboBox = connect(ComboBoxViewModel);

export const comboBoxViewModelRegister = () => {
  const config: ko.components.Config = {
    viewModel: connectedComboBox,
    template
  };
  ko.components.register("combobox", config);
};

export default ComboBoxViewModel;
