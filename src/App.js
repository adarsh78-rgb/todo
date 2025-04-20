import { useState } from 'react';
import './App.css';

function App() {

  let [todolist,setTodolist]=useState([])

  let saveTodoList=(event)=>{
    
    let toname = event.target.todo_name.value;

    if(!todolist.includes(toname)){
      
      let finalDoList = [...todolist,toname]
      setTodolist(finalDoList);

    }
    else{
      alert("Task already exisits");
    }
    //helps to stop re-load
    event.preventDefault();
  }

  let list = todolist.map((value,index)=>{
    return(
      <ToDoListItems value={value} key={index} indexNumber={index} 
      todolist = {todolist}
      setTodolist={setTodolist}
      
      />
    );
  })

  return (
    <div className="App">
      <h1>ToDo</h1>
      <form onSubmit={saveTodoList}>
      <input type="text" name='todo_name' />
      <button>Save</button>
      </form>
    <div className='outerdiv'>
    <ul>
        
      {list}
      </ul>
    </div>
      


    </div>
  );
}

export default App;

function ToDoListItems({value,indexNumber,todolist,setTodolist}){

  let [status,setStatus]=useState(false);
  
  let deleteRow=()=>{
    let finalData = todolist.filter((v,i)=>i!=indexNumber);
    setTodolist(finalData);
  }

  let checkStatus=()=>{
    setStatus(!status);
  }
  
  return(
    <li className={(status)?'completetodo':''} onClick={checkStatus}>{value}<span onClick={deleteRow}>&times;</span></li>
  )
}