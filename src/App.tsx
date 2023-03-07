import React from 'react';
import './App.css';
import Task from './components/task';
import Input from './components/Input'

function App() {

  const tasks = [
    { id: 1, desc: 'go to gym'},
    { id: 2, desc: 'go home'}
  ]

  return (
    <div className="App">
<div className="pj-wrap">
      <div className="title"><h1>What's the Plan Today?</h1></div>
      <div className="todo-body">
        <form action="">
          <div className="todo">
            <Input placeholder={'add to do'} />
            <button>ADD</button>
          </div>
          <div className="todo">
          <Input placeholder={'update to do'} />

            <button>UPDATE</button>
          </div>
        </form>

        <div className="tasks">
         {
          tasks.map((item, index) => {
            return <Task key={index}  item={item} />
          })
         }
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
