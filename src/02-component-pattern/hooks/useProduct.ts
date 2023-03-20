import {useState} from "react";

interface ProductProps {
  initialCounter: number;
}
export const useProduct = ({ initialCounter }: ProductProps) => {
  const [counter, setCounter] = useState(initialCounter);
  const increaseBy = (value: number) => setCounter( (prevState) => Math.max(0, prevState + value) );

  return {
    counter,
    increaseBy
  }

}
