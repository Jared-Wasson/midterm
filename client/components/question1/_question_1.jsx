import { Counter } from './Counter';
export const Question1 = () => {
  return <div>
     <Counter max={5} min={-5}/>
     <Counter max={-5} min={-15}/>
     <Counter max={15} min={5}/>
    </div>
};
