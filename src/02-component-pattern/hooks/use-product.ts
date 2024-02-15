import {useState} from "react";

export const UseProduct = (initValue = 0) => {
  const [counter, setCounter] = useState(initValue);
  const incrementBy = (value: number) => {
    setCounter( prev => Math.max( prev + value, 0));
  };
  return { counter, incrementBy };
};
