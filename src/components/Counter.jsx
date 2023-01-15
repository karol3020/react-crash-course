import './Counter.css'
import React, {useState} from 'react'

function Counter() {
    const [arr, setArr] = useState([])

    function addPlus() {
        setArr(prevArr => [...prevArr, "+"])
    }

    function addMinus() {
        setArr(prevArr => [...prevArr, "-"])
    }

    return (
        <div>
            <button onClick={addPlus} >+</button>
            <button onClick={addMinus} >-</button>
            {arr.toString()}
        </div>
    )

    // const [cart, setCart] = useState({ 
    //     item: 'apple', 
    //     quantity: 0 })

    //     function removeApple() {
    //         //1. Use a call back to get the previous value
    //         //2.Spread out all the properties of the prev value
    //         //3.Only change the property that you need to change 
    //         setCart((prevCart) => ({
    //             ...prevCart,
    //             quantity: prevCart.quantity -1 
    //             }))
    //     }

    //     function addApple() {
    //         setCart(prevCart => ({
    //             ...prevCart,
    //             quantity: prevCart.quantity + 1
    //             }))
    //     }

    // const [counter, setCounter] =  useState(0)

    // //first version 
    // function decrementCounter() {
    //     setCounter(counter - 1)
    // }

    // //if we want to decre by 2 
    // // function decrementCounter() {
    // //     setCounter((prevCounter) => prevCounter - 1)
    // //     setCounter((prevCounter) => prevCounter - 1)
    // // }

    // function incrementCountr() {
    //     setCounter(counter + 1)
    // }

    // return (
    //   <div className="counter">
    //     {/* second version  */}
    // {/* <button className='decrement' onClick={() => setCounter(counter - 1)}>-</button> */}
    // {/* <button className='decrement' onClick={decrementCounter}>-</button> */}
    // <button className='decrement' onClick= {removeApple}>-</button>
    //  {/* {counter} */}
    //  {cart.quantity}
    //  {cart.item}
    // {/* <button className='increment' onClick={incrementCountr}>+</button> */}
    // <button className='increment' onClick={addApple}>+</button>
    // </div>
    // )
}

export default Counter