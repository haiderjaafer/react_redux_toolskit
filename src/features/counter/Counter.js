import { useSelector,useDispatch } from "react-redux";
import { increment,decrement,reset  ,incrementByAmount} from "./counterSlice";
import { useState } from "react";

const Counter =()=>{

    

    const count = useSelector((state)=> state.Counter.count);   // Counter is come from store   
    // count is a state 

    const dispatch  = useDispatch();

    const [incrementAmount ,setIncrementAmount] = useState(0);

    const addValue = Number(incrementAmount) || 0;  // we define a Number variable  if it not number will be 0

    const resetAll =()=>{
        setIncrementAmount(0);  // here will reset incrementAmount to 0 
        dispatch(reset());   // this dispatch will reset global state to zero 

    }


    return (

        <section>
            <p>{count}</p>
            <div>
                <button onClick={()=> dispatch(increment())}>+</button>
                <button onClick={()=> dispatch(decrement())}>_</button>
               
            </div>
            <input type="text" value={incrementAmount} onChange={(e)=> setIncrementAmount(e.target.value)}/>

            <div>
                <button onClick={()=>dispatch(incrementByAmount(addValue))}>Add Amount</button>
                <button onClick={ resetAll}>reset All</button>
                <button >modified files added</button>
            </div>
        </section>

    )
}

export default Counter;