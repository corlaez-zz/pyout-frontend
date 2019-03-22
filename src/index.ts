import * as ko from "knockout";
import { todoViewModelRegister } from "./viewmodels/todo";
import { registerOvertodoViewModel } from "./viewmodels/overtodo";
import { registerGenderPickerViewModel } from "./viewmodels/genderpicker";
import { registerPlatformPickerViewModel } from "./viewmodels/platform";
import "./extends/handlers";
import "./styles/base.css";
import "./styles/index.css";
import { getTime } from "./overko/effects/api";

todoViewModelRegister();
registerOvertodoViewModel();
registerGenderPickerViewModel();
registerPlatformPickerViewModel();

const App = () => {};

ko.applyBindings(new App());

const alertTime = async () => {
  const time = await getTime();
  if (time) alert("Python time " + time);
};

window["logPythonTime"] = alertTime;
alertTime();
