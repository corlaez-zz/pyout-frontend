import * as ko from "knockout";
import template from "./selectbox.html";
import { connect, Connect } from "../overko";

class SelectBoxViewModel {
  checkGender: ko.Observable<string>;
  options: Array<{ name: string; value: number }>;

  constructor(props: Connect) {
    const self = this;
    self.checkGender = props.overko.state.gender.checkGender;
    self.options = props.overko.state.gender.options();
  }
}

const connectedSelectBox = connect(SelectBoxViewModel);

export const registerSelectBoxViewModel = () => {
  const config: ko.components.Config = {
    viewModel: connectedSelectBox,
    template
  };
  ko.components.register("selectbox", config);
};

export default SelectBoxViewModel;
