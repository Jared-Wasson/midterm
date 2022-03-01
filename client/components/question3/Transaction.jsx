import { useState } from 'react';
import { Button } from '../common/Button';


export const Transaction = (props) => {
  const [data, setData] = useState();
  let trans = props.trans

  return (
    <>
    <p>  Transaction of $ {trans.amount} : from {trans.fromUser.name} to {trans.toUser.name}</p>
    </>
  );
};