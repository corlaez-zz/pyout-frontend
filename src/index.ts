import * as ko from "knockout";
import { todoViewModelRegister } from "./viewmodels/todo";
import { registerOvertodoViewModel } from "./viewmodels/overtodo";
import { registerGenderPickerViewModel } from "./viewmodels/genderpicker";
import { registerAdsetListViewModel } from "./viewmodels/adsetlist";
import "./extends/handlers";
import "./styles/base.css";
import "./styles/index.css";
import { getTime } from "./overko/effects/api";

todoViewModelRegister();
registerOvertodoViewModel();
registerGenderPickerViewModel();
registerAdsetListViewModel();

const App = () => {};

ko.applyBindings(new App());

const alertTime = async () => {
  const time = await getTime();
  if (time) alert("Python time " + time);
};

window["logPythonTime"] = alertTime;
alertTime();
