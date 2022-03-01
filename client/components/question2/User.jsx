import { useState } from 'react';
import { Button } from '../common/Button';

export const User = (props) => {
  const [data, setData] = useState();
  let user = props.user

  if(user.isAdmin){
    return <>
    <p key={user.id} style={{color: "green"}}>Name: {user.name} Email: {user.email}</p>
    </>
  }


  return (
    <>
    <p key={user.id} >Name: {user.name} Email: {user.email}</p>
    </>
  );
};
