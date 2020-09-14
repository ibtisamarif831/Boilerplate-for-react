
let count=0
const addOne=()=>{
    count++
    renderCounterApp()
}
const minusOne=()=>{
    count--
    renderCounterApp()
}
const Reset=()=>{
count=0
renderCounterApp()

}
const someId='myid'



const renderCounterApp=()=>{
    const template2=(
        <div>
            <h1>Count:{count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={Reset}>Reset</button>
    
        </div>
    )
    ReactDOM.render(template2, appRoot);

}
renderCounterApp()