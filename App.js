import React, {useState} from "react";
import AddUser from "./Components/AddUser/AddUser";
import styles from "./App.module.css";
import CollectionUser from "./Components/CollectionUser/CollectionUser";

function App(){
  const [state, setSatate] = useState('');
  const enteredData = (uName, uAge) => {
    setSatate((prevUserlist)=>{
      return [...prevUserlist, {id: Math.random().toString(), name: uName, age: uAge}]
    });
  };
  console.log(state);
  return (
    <>
      <div className={styles.container}>
        <AddUser info={enteredData} />
      </div>
      <CollectionUser users={state}/>
    </>
  );
};

export default App;
