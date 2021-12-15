import { SharedStateTarget } from '../hooks/useSharedState';

const INPUT = new SharedStateTarget('initial value');

export function Input() {
  const [value, setValue] = INPUT.useSharedState();
  return <input value={value} onChange={e => setValue(e.target.value)} />
}
