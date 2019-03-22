import template from "./AdsetForm.html";
import * as ko from "knockout";
import { connect } from "../overko";

class AdsetFormVM {}

export const registerAdsetForm = () => {
  const config: ko.components.Config = {
    viewModel: connect(AdsetFormVM),
    template
  };
  ko.components.register("adset-form", config);
};

export default AdsetFormVM;
