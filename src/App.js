import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function Todo({todo,index, completeTodo, removeTodo}){
return(
  <div>
  <div style={{textDecoration: todo.isCompleted ? 'line-through':''}} className="todo">{todo.text}</div>
  <button onClick={() => completeTodo(index)}>Complete</button>
  <button onClick={() => removeTodo(index)}>Remove</button>
  </div>
)
}
function TodoForm({addTodo}){
  const [value, setValue] = useState('');
  const handleSubmit = e =>{
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('')
  }
  return(
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="add item" className="input" value={value} onChange={e => setValue(e.target.value)} />
    </form>
  )
}

function App() {
  const [todos, setTodos] = useState([{
    text:'Learn about React',
    isCompleted:false
  },
  {
    text:'Get Lunch',
    isCompleted:false
  },
  { text:'Walk the Dog',
    isCompleted:false}
  ])

  const addTodo = text =>{
    const newTodos = [...todos, {text}];
    setTodos(newTodos)
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos)
  }
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index,1)
    setTodos(newTodos)
  }

  return (
    <div className="App">
     <div className="todo-list">
      {todos.map((todo,index)=>(
        <Todo key={index} index={index} removeTodo={removeTodo} completeTodo={completeTodo} todo={todo}/>
      ))}
      <TodoForm addTodo={addTodo}/>
     </div>
    </div>
  );
}

export default App;
