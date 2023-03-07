import React from "react";
import styles from "./style.module.css"

type Props = {
  item?: item
}

type item = {
  desc: string,
  id: number
}

const Task:React.FC<Props> = ({item}) => {
    return (
        <div className={styles.task}>
            <p>{ item?.id + "." + item?.desc}</p>
            <div className="link">
              <a href=""><i className={`fa-solid fa-trash ${styles.mycolor}`}></i> </a>
              <a href=""><i className={`fa-solid fa-pen-to-square ${styles.mycolor}`}></i></a>
            </div>
          </div>
    )
}

export default Task