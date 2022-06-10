import { SharedStateTarget } from "@scaleup-consulting/use-shared-state";



const CHECKBOXES = new SharedStateTarget([2]);

export function Checkbox({id}) {
  const [checkboxes, setCheckboxes] = CHECKBOXES.useSharedState();

  const isChecked = checkboxes.includes(id);

  const onChange = e => {
    if (e.target.checked) {
      setCheckboxes([...checkboxes, id]);
    } else {
      setCheckboxes(checkboxes.filter(checkboxID => checkboxID !== id));
    }
  };

  return <input type="checkbox" checked={isChecked} onChange={onChange} />
}
