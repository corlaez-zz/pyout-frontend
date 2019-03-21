import * as ko from "knockout";
import template from "./adsetlist.html";
import { connect, Connect } from "../overko";

class AdsetListViewModel {
  //checkGender: ko.ObservableArray<string>;
  data: Array<{ data1: string; data2: string; data3: string; data4: string }>;
  //message: ko.Computed<string>;

  constructor(props: Connect) {
    const self = this;
    self.data = props.overko.state.adsetlist.data();
  }
}

const connectedAdsetList = connect(AdsetListViewModel);

export const registerAdsetListViewModel = () => {
  const config: ko.components.Config = {
    viewModel: connectedAdsetList,
    template
  };
  ko.components.register("adsetlist", config);
};

export default AdsetListViewModel;
