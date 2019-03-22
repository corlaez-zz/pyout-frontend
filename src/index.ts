import * as ko from "knockout";
import { registerTodoViewModel } from "./viewmodels/todo";
import { registerOvertodoViewModel } from "./viewmodels/overtodo";
import { registerGenderPickerViewModel } from "./viewmodels/genderpicker";
import { registerPlatformPickerViewModel } from "./viewmodels/platform";
import "./extends/handlers";
import "./styles/base.css";
import "./styles/index.css";
import { overko } from "./overko";

registerTodoViewModel();
registerOvertodoViewModel();
registerGenderPickerViewModel();
registerPlatformPickerViewModel();

const App = () => {};

overko.onInitialize().then(() => {
  ko.applyBindings(new App());
});
