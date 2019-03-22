import { observable, computed, Computed } from "knockout";

// delays the execution of f a number of times.
export function execAt(f, stop) {
  let count = 0;
  return () => {
    if (++count >= stop) f();
  };
}

interface ForceCompute<T = any> extends Computed<T> {
  evaluateImmediate();
}

//https://github.com/knockout/knockout/issues/1019#issuecomment-24368184
const forceCompute = (readFunc, context, options) => {
  const trigger = observable().extend({ notify: "always" });
  const target = computed(
    () => {
      trigger();
      return readFunc.call(context);
    },
    null,
    options
  ) as ForceCompute;
  target.evaluateImmediate = function() {
    trigger.valueHasMutated();
  };
  return target;
};
