import React, { useMemo, useState } from 'react'

const App = () => {
    const [count, setCount] = useState(0)
    const [item, setItem] = useState(10)

    const multiCountMemo = useMemo(() => {
        console.log("multicount called");
        return count * 5;
    }, [count]); 

    return (
        <div>
            <h1>useMemo Hook In React</h1>
            <h2>Count :{count}</h2>
            <button onClick={() => setCount(count + 1)}>Count +</button>
            {multiCountMemo}
            <h2>Item :{item}</h2>

            <button onClick={() => setItem(item * 10)}>Update</button>
        </div>
    )
}

export default App
