import React, { useState } from "react"
import styles from "./style.module.css"
import Input from '../Input'

type Props = {
  item: item
  handleDelete: any
  handleUpdate: any
}

export type item = {
  desc: string
  id: number
}

const Task: React.FC<Props> = ({ item, handleDelete, handleUpdate }) => {
  const [input , setInput] = useState<string>("")
  const [editMode , setEditMode] = useState<boolean>(false)

  const updateValue = () => {
    if(editMode){
      handleUpdate({id: item.id, desc: input})
    }
    setEditMode(!editMode)
  }
  return (
    <div className={styles.task}>
      <p>{item?.id + "." + item?.desc}</p>
      {
        editMode && <Input placeholder={item.desc} className={styles.position} onChange={(e: { target: { value: React.SetStateAction<string> } })=> {setInput(e.target.value)}}  />
      }
      
      <div className="link">
        <i
          className={`fa-solid fa-trash ${styles.mycolor}`}
          onClick={() => handleDelete(item.id)}
        ></i>
        <i className={`fa-solid fa-pen-to-square ${styles.mycolor}`} 
          onClick={updateValue}
        ></i>
      </div>
    </div>
  )
}

export default Task
