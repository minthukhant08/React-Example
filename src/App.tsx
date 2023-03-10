import React, { useEffect, useState } from "react"
import "./App.css"
import Task, { item } from "./components/task"
import Input from "./components/Input"

function App() {


  const [tasks, setTasks] = useState<Array<item>>([
    { id: 1, desc: "go to gym" },
    { id: 2, desc: "go home" },
  ])

  useEffect(()=> {
    console.log("useeffect here")
  }, [1])

  const [keyword, setKeyword] = useState<string>("")

  const addItem = () => {
    setTasks([...tasks, { id: tasks.length + 1, desc: keyword }])
    setKeyword("")
  }

  const deleteItem = (id: number) => {
    const updatedItem = tasks.filter((item) => item.id !== id)
    setTasks(updatedItem)
  }

  const updateItem = (value: item) => {
    const updateItem = tasks.map((item) => {
      if (value.id == item.id) {
        return value
      } else {
        return item
      }
    })

    setTasks(updateItem)
  }

  return (
    <div className="App">
      <div className="pj-wrap">
        <div className="title">
          <h1>What's the Plan Today?</h1>
        </div>
        <div className="todo-body">
          <div className="todo">
            <Input
              placeholder={"add to do"}
              value={keyword}
              onChange={(e: {
                target: { value: React.SetStateAction<string> }
              }) => {
                setKeyword(e.target.value)
              }}
            />
            <button onClick={addItem}>ADD</button>
          </div>

          <div className="tasks">
            {tasks.map((item, index) => {
              return (
                <Task
                  key={index}
                  item={item}
                  handleDelete={deleteItem}
                  handleUpdate={updateItem}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
