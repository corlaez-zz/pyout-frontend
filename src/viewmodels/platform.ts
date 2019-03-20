import * as ko from "knockout";
import template from "./platform.html";
import { connect, Connect } from "../overko";

class PlatformPickerViewModel {
  checkPlatform: ko.ObservableArray<string>;
  options: Array<{ name: string; value: number }>;
  message: ko.Computed<string>;

  constructor(props: Connect) {
    const self = this;
    self.checkPlatform = props.overko.state.platform.checkPlatform;
    self.options = props.overko.state.platform.options();
    self.message = ko.computed(() => self.checkPlatform().join(", "), this);
  }
}

const connectedPlatformPicker = connect(PlatformPickerViewModel);

export const registerPlatformPickerViewModel = () => {
  const config: ko.components.Config = {
    viewModel: connectedPlatformPicker,
    template
  };
  ko.components.register("platformpicker", config);
};

export default PlatformPickerViewModel;
