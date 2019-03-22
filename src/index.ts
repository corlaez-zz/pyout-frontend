import * as ko from "knockout";
import { registerTodoApp } from "./viewmodels/TodoApp";
import { registerOvertodoApp } from "./viewmodels/OvertodoApp";
import { registerGenderPicker } from "./viewmodels/GenderPicker";
import { registerPlatformPicker } from "./viewmodels/PlatformPicker";
import "./extends/handlers";
import "./styles/base.css";
import "./styles/index.css";
import { overko } from "./overko";

registerTodoApp();
registerOvertodoApp();
registerGenderPicker();
registerPlatformPicker();

const App = () => {};

overko.onInitialize().then(() => {
  ko.applyBindings(new App());
});
