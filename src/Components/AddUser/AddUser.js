import React from "react";
import { useState } from "react/cjs/react.development";
import styles from './AddUser.module.css'
const AddUser = (props) => {
    const [name, enteredName] = useState("");
    const [age, enteredAge] = useState("");
    const inputNameChangedhandler = (event) => {
        enteredName(event.target.value);
    }
    const inputAgeChangedhandler = (event) => {
        enteredAge(event.target.value);
    }
    const SubmitChangedHandler = (event) => {
        event.preventDefault();
        if(name.length === 0 || age.length === 0){
            return;
        }
        if(age < 1) {
            return;
        }
        props.info(name, age);
        enteredName("");
        enteredAge("");
    }
    return(
        <form className={styles.container} onSubmit={SubmitChangedHandler}>
            <label htmlFor="username">Username</label>
            <input type="text" value={name} id="username" onChange={inputNameChangedhandler}/>
            <label htmlFor="age">Age(Years)</label>
            <input type="number" id="age" value={age} onChange={inputAgeChangedhandler}/>
            <button type="submit">Add User</button>
        </form>
    )
}

export default AddUser;