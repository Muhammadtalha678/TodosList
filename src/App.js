import { useState, useEffect } from "react";
import Navbar from "./Mycomponents/Navbar";
import Todos from "./Mycomponents/Todos"
import Footer from "./Mycomponents/Footer";
import About from "./Mycomponents/About";
import View from "./Mycomponents/View";
import Update from "./Mycomponents/Update";
import AddTodo from './Mycomponents/AddTodo'
import NotFound from './Mycomponents/NotFound'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {

  let initTodo
  if (localStorage.getItem('todos') === null) {
    initTodo = []
  }
  else {
    initTodo = JSON.parse(localStorage.getItem('todos'))
    }

  function deleteTodo(todo) {
    // let index = todos.indexOf(todo)
    setTodos(
      // filter is use for removing elements in array
      todos.filter((element) => { return element.id !== todo.id })
      // todos.slice(1, index + 1)
    )
    // localStorage.removeItem('todos', JSON.stringify(todos))
  }

  function addTodo(Request) {
    console.log(Request);
    
    if (todos.length > 0) {
      let todoExists = todos.some((todo) => todo.task === Request.task)
      if (todoExists) {
        alert("Todo Already Exist")
      }
      else {
        setTodos([...todos, Request])
        return true

      }

    }
    else {
      setTodos([...todos, Request])
      return true

    }
  }

  function upDate(todo) {
    //some return true false / every
    //find return whole value which matches the condition
    let todoExists = todos.some((e) => { return e.task === todo.task && e.id !== todo.id })
    if (todoExists) {
      alert("Todo already exists")
      return false
    }
    else {

      setTodos(
        todos.map((oneTodo) => {
          if (oneTodo.id === todo.id) {
            oneTodo = todo
          }
          return oneTodo
        })
      )
      return true
    }
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  return (

    <Router basename="TodosList">
      <Navbar title="Todos List" searchbar={false} />
      <Routes>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/" element={
          <Todos allTodos={todos} onDelete={deleteTodo} />
        }>
        </Route>
        <Route path="/addTodo" element={
          <AddTodo addTodo={addTodo} allTodos={todos} />
        }>
        </Route>
        <Route path="/viewTodo/:viewId" element={<View allTodos={todos} />}></Route>
        <Route path="/updateTodo/:id" element={<Update onUpdate={upDate} allTodos={todos} />}></Route>
        <Route path="/about" element={
          <About />
        }>
        </Route>
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;

