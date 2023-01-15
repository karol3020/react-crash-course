import './App.css';
// import Todo from './components/Todo.jsx';
// import Title from './components/Title.jsx';
// import Modal from './components/Modal.jsx'
// import React, { useState, useEffect } from 'react'
// import Counter from './components/Counter.jsx'

import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Nav from './components/Nav.jsx'
import Users from './pages/Users.jsx';

function App() {
  // const [showModal, setShowModal] = useState(false)
  
  // //First step create a function 
  // function onTodoDelete() {
  //   setShowModal(true)
  //   console.log ('onTodoDelete')
  // }

  // function closeModal() {
  //   setShowModal(false)
  //   console.log('closed')
  // }

  // useEffect(() => {
  //   console.log('ONLY on mount')
  //   setShowModal(!showModal) //can be like that
  // }, [])

  // useEffect(() => {
  //   console.log( 'on mount AND showModal')
  //   // setShowModal(!showModal) infinit loop 
  // }, [showModal])

  // useEffect(() => {
  //   console.log('EVERY render')
  //   // setShowModal(!showModal) infinit loop
  // })

  return (
  <Router>
    {/* <Nav /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users/:id' element={<Users />} />
          {/* <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} /> */}
        </Routes>
      </Router>

    //   <div>
    //   <Title />
    //   <div>
    //     <input type="text" onChange={(event) => {
    //       console.log(event.target.value)
    //     }} />
    //     <button onClick={() => setShowModal(true)} >Add todo</button>
    //   </div>
    //   <div className="todo__wrapper">
    //   {/* Second step passing props  */}
    //   <Todo onTodoDelete={onTodoDelete} title="Finish interview section"/>
    //   <Todo onTodoDelete={onTodoDelete} title="Finish DSA"/>
    //   <Todo onTodoDelete={onTodoDelete} title="Finish Frontend Simplified"/>
    //   </div>
    //   {showModal && <Modal closeModal = {closeModal} title = "Do you agree?" />}
    // </div>
  );
}

export default App;
