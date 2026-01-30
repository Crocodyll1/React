import AppName from './components/appName.jsx';
import AddTodo from './components/addTodo.jsx';
import TodoItem1 from './components/TodoItem1.jsx';
import TodoItem2 from './components/TodoItem2.jsx';
import  './App.css';


function App() {
  return (
    <center className='todo-container'>
      <AppName />   
      <AddTodo />
      <TodoItem1/>
      <TodoItem2/>

    </center>
  );
}

export default App;
