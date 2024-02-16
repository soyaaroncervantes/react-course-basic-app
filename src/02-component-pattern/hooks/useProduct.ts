import {useEffect, useRef, useState} from "react";
import {OnChangeArgs, Product} from "../type";

type UseProductArgs = {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
}

export const useProduct = ({onChange, product, value = 0}: UseProductArgs) => {
  const [counter, setCounter] = useState(value);
  const isControlled = useRef(!!onChange);
  const incrementBy = (value: number) => {
    if (isControlled.current) return onChange!({ count: value, product });

    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);
    onChange && onChange({product, count: newValue});
  };
  useEffect( () => setCounter(value), [value])
  return { counter, incrementBy };
};
