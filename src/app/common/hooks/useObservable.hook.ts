import { useEffect, useRef } from 'react';
import { observable } from 'mobx';

export function useObservable<T extends Record<never, never>>(prop: T): T {
  const observableRouter = useRef(observable(prop));

  useEffect(() => {
    Object.assign(observableRouter.current, prop);
  }, [prop]);

  return observableRouter.current as T;
}
