import  { useEffect, useRef, useState } from 'react'
import { Product, onChangeArgs, InitialValues } from '../interfaces/interface';

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?:InitialValues
  
}

export const useProduct = ({onChange,product,value=0,initialValues}:useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  
  const isMounted = useRef(false);

/**
 * It takes a number, adds it to the counter, and then sets the counter to the result.
 * @param {number} value - number - the value to increase the counter by
 */
  const increaseBy = (value: number) => {
 
    let newValue = Math.max(counter + value, 0);
    if (initialValues?.maxCount) {
      newValue=Math.min(newValue,initialValues.maxCount)
    }
    setCounter(newValue)
    onChange && onChange({count:newValue,product});
  };

/**
 * `reset` is a function that sets the counter to the initial value of the count property of the
 * initialValues object, or the value of the value property, if the initialValues object is undefined.
 */
  const reset = () => {
    setCounter(initialValues?.count || value)
  }
  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value)
  }, [value])
  
  useEffect(() => {
    isMounted.current = true;
  }, [])
  
  return {
    counter,
    isMaxCountReached: !!initialValues?.count && initialValues?.maxCount === counter,
    maxCount: initialValues?.maxCount,
    increaseBy,
    reset
  }
  
}
