import * as ko from "knockout";
import template from "./selectbox.html";
import { connect, Connect } from "../overko";

const selectBoxViewModel = function(props: Connect) {
  const self = this;
  self.checkGender = props.overko.state.gender.checkGender;
};

const connectedSelectBox = connect(selectBoxViewModel);

export const selectBoxViewModelRegister = () => {
  const config: ko.components.Config = {
    viewModel: connectedSelectBox,
    template
  };
  ko.components.register("selectbox", config);
};

export default connectedSelectBox;
