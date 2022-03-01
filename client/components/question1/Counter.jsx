import { useState } from 'react';
import { Button } from '../common/Button';


export const Counter = (props) => {
  let min  = props.min
  let max = props.max
  let zero = 0
  if(min > 0 ){
     zero = min
  }
  if(max < 0 ){
     zero = max
  }

  let [number, setNumber] = useState(zero);
 


  const increaseCounter = async () =>{
    if (number >= max){
      return;
    } 
    else await setNumber(number + 1);
  }

  const decreaseCounter = async () =>{
    if (number <= min){
      return;
    } 
    else  await setNumber(number - 1);
  }

  return (
    <>
    <div>Count = {number}</div>
    <Button onClick={increaseCounter}>Increase Counter</Button>
    <Button onClick={decreaseCounter}>Decrease Counter</Button>
    </>
  );
};
