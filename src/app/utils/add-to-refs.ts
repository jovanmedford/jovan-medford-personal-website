import { MutableRefObject } from "react";

export const addToRefs = (refs: MutableRefObject<Element[]>) => {
  return function (el: Element) {
    if (el && !refs.current?.includes(el)) {
      refs.current?.push(el);
    }
  };
};
