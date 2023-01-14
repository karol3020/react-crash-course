import './Counter.css'
import React, {useState} from 'react'

function Counter() {

    const [cart, setCart] = useState({ 
        item: 'apple', 
        quantity: 0 })

        function addApple() {
            setCart(prevCart => ({

               quantity = cart.quantity + 1

                }
            ) )
        }

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

    return (
      <div className="counter">
        {/* second version  */}
    {/* <button className='decrement' onClick={() => setCounter(counter - 1)}>-</button> */}
    {/* <button className='decrement' onClick={decrementCounter}>-</button> */}
    <button className='decrement' onClick= {() => null}>-</button>
     {/* {counter} */}
     {cart.quantity}
     {cart.item}
    {/* <button className='increment' onClick={incrementCountr}>+</button> */}
    <button className='increment' onClick={addApple}>+</button>
    </div>
    )
}

export default Counter