import React, { useState } from 'react';
import './Todolist.css';
import Lists from './Lists';

const Todolist = () => {
    const[list, setList] = useState("");
    const[item, setItem] = useState([]);

    const inputEvent = (event) =>{
        setList(event.target.value);
    }
    const submit = () =>{
        setItem((olditems)=>{
            return [...olditems, list];
        });
        setList("");//when we submit item then input field is empty becoz of this
    };

    const deletItems = (id) =>{
      console.log("delete");

      setItem((oldItems)=>{
         return oldItems.filter((arrElem, index)=>{
           return index !== id;
         });
      });
    }

    
  return(
   <>
    <div className="main_div">
      <div className="center_div">
       <br/>
       <h1>ToDo List</h1>
       <br/>
       <input type="text"
       placeholder="Add a items"
       onChange={inputEvent}
       value={list}
       />

       <button onClick={submit}> + </button>

       <ol>
         {/* <li> {list} </li> */}

         {item.map((itemval, index)=>{
             return(
                 <Lists text={itemval}
                 key={index}
                 id={index}
                 onSelect={deletItems}/>
             );
         })}
       </ol>
      </div>
    </div>
   </>
   );

 }

export default Todolist