import './App.css';
import Todo from './components/Todo.jsx';
import Title from './components/Title.jsx';
import Modal from './components/Modal.jsx'
import React, { useState } from 'react'
import Counter from './components/Counter.jsx'

function App() {
  const [showModal, setShowModal] = useState(false)
  
  return (
    <div>
      <Counter />
      <Title />
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }} />
        <button onClick={() => setShowModal(true)} >Add todo</button>
      </div>
      <div className="todo__wrapper">
      <Todo title="Finish interview section"/>
      <Todo title="Finish DSA"/>
      <Todo title="Finish Frontend Simplified"/>
      </div>
      {showModal && <Modal title = "Do you agree?" />}
    </div>
  );
}

export default App;
