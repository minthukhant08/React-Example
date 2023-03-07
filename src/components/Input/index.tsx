import React from "react";
import styles from './style.module.css'

type Props = {
    placeholder?: string
}

const Input:React.FC<Props> = ({ placeholder}) => {
    return (
        <input type="text" placeholder={placeholder} />
    )
}

export default Input;