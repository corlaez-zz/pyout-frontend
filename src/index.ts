import * as ko from "knockout";
import { todoViewModelRegister } from "./viewmodels/todo";
import { registerOvertodoViewModel } from "./viewmodels/overtodo";
import { registerGenderPickerViewModel } from "./viewmodels/genderpicker";
import "./extends/handlers";
import "./styles/base.css";
import "./styles/index.css";

import { getGenders } from "./overko/effects/api";

todoViewModelRegister();
registerOvertodoViewModel();
registerGenderPickerViewModel();

const App = () => {};

ko.applyBindings(new App());

const testGenders = async () => {
  const gender = await getGenders();
  console.log(gender);
};

testGenders();
