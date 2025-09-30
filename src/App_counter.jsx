import {useState} from 'react';

const AppCounter = () => {

    let [count,setCount] = useState(0);

    function Increase(){
        let out = count+1;
        console.log(out);
        setCount(out)
    }

    function Decrease(){
        let out = count - 1;
        console.log(out);
        setCount(out);
    }

    function Reset(){
        count = 0;
        setCount(count);
        console.log(count);
    }

    return (
        <div>
            <h1>Counter</h1>
            {/* <input type="text" value={count} placeholder='Enter a number' 
                onChange={(e)=>{
                    console.log(e.target.value);
                    setCount(Number(e.target.value));
                    }} /> */}
            <button onClick={Increase}>Increase</button>
            <h1>{count}</h1>
            <button onClick={Decrease}>Decrease</button>
            <button onClick={Reset} style={{marginLeft:"20px"}}>Reset</button>
        </div>
    );
}

export default AppCounter;
