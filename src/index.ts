import * as ko from "knockout";
import { todoViewModelRegister } from "./viewmodels/todo";
import { registerOvertodoViewModel } from "./viewmodels/overtodo";
import { registerGenderPickerViewModel } from "./viewmodels/genderpicker";
import "./extends/handlers";
import "./styles/base.css";
import "./styles/index.css";
import { getTime } from "./overko/effects/api";
import { getGenders } from "./overko/effects/api";

todoViewModelRegister();
registerOvertodoViewModel();
registerGenderPickerViewModel();

const App = () => {};

ko.applyBindings(new App());

const alertTime = async () => {
  const time = await getTime();
  if (time) alert("Python time " + time);
};

const testGender = async () => {
  const gender = await getGenders();
  console.log(gender);
};

window["logPythonTime"] = alertTime;
alertTime();

testGender();
