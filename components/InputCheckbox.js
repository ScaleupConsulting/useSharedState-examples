import { IS_INPUT_EDITABLE } from "../hooks/sharedStates";

export function InputCheckbox() {
  const [isInputEditable] = IS_INPUT_EDITABLE.useSharedState();
  return <input readOnly={!isInputEditable} />
}
