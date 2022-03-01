import { useContext,useEffect,useState } from 'react';
import { ApiContext } from '../../utils/api_context';
import { Transaction } from './Transaction';

export const Question3 = () => {
  const api = useContext(ApiContext);
  const [transactions,setTransactions] = useState({});
  const [loading,setLoading] = useState(true);


useEffect( async() => {
  const { transactions } = await api.get('/transactions');
  setTransactions(transactions);
  setLoading(false)
  return () => {
  }
  }, []);

  if(loading){
    return <div>loading...</div>
  }

  return <div>
    {transactions.map((transaction) => (
      <div key={transaction.id}>
       <Transaction key={transaction.id} trans={transaction}/>
      </div>
    ))}
  </div>;
};
