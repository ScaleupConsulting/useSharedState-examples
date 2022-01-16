/* eslint-disable react-hooks/rules-of-hooks */
import {useState, useEffect} from 'react';

const isSSR = typeof window === 'undefined';

const EventTarget = isSSR ? Object : window.EventTarget;
export class SharedStateTarget extends EventTarget {
  constructor(initialStateOfNewComponents) {
    super();
    this.initialStateOfNewComponents = initialStateOfNewComponents;
  }

  useSharedState() {
    const [state, setState] = useState(this.initialStateOfNewComponents);
    const setSharedState = detail => super.dispatchEvent(new CustomEvent('set', {detail}));

    useEffect(() => {
      const eventListener = ({detail}) => setState(this.initialStateOfNewComponents = detail);

      super.addEventListener('set', eventListener);
      return () => super.removeEventListener('set', eventListener);
    }, []);

    return [state, setSharedState];
  }
}

export const IS_INPUT_EDITABLE = new SharedStateTarget(true);
