import { IS_INPUT_EDITABLE } from '../hooks/useSharedState';

export function CheckboxInput({id}) {
  const [isChecked, setIsChecked] = IS_INPUT_EDITABLE.useSharedState();
  return <label>
    <input type="checkbox" checked={isChecked} onChange={e => setIsChecked(e.target.checked)} />is input editable?
  </label>
}
