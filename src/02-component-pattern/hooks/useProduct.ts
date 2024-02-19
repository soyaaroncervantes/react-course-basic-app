import {useEffect, useRef, useState} from "react";
import {InitialValuesProductCard, OnChangeArgs, Product} from "../type";

type UseProductArgs = {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValues?: InitialValuesProductCard;
  maxCount?: number;
}
export const useProduct = ({onChange, product, value = 0, initialValues}: UseProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count ?? value);
  const isControlled = useRef(!!onChange);
  const isMounted = useRef(false);
  const reset = () => setCounter(initialValues?.count ?? value );
  const incrementBy = (value: number) => {
    if (isControlled.current) return onChange!({ count: value, product });

    let newValue = Math.max(counter + value, 0);
    newValue = Math.min(newValue, initialValues?.maxCount ?? Infinity);
    if (newValue === counter) return;

    setCounter(newValue);
    onChange && onChange({product, count: newValue});
  };

  useEffect(() => {
    isMounted.current = true;
  }, []);

  useEffect( () => {
    if (!isMounted.current) return;
    setCounter(value)
  }, [value])

  return {
    counter,
    incrementBy,
    isMaxCountReached: !!initialValues?.maxCount && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,
    reset
  };
};
