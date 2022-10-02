import React, { useState } from 'react'
import { Formulario } from './Formulario';
import { Todo } from './Todo';
import styles from './TodoListas.module.css';

export const TodoListas = () => {
  
    const [todos, setTodos]= useState([]);
   
    const agregarTodo = (todo)=>{
        setTodos((old)=>[todo, ...old])
    };

    const eliminarTodo = (id)=>{
        setTodos((old)=> old.filter(item => item.id !== id ))
    };

    const todoCompletado = id =>{

       const todoCompletados = todos.map(item=>(
        item.id === id ? {...item, completado : !item.completado} : item
       ))   
       
       setTodos(todoCompletados)
    };
  
    return (
    <>
        <h1 className={styles["h1"]}>ToDo List</h1>
        <Formulario agregarTodo={agregarTodo}/>
        <div>
        {
            todos.map((item)=>(
            <Todo key={item.id} 
                todo={item} 
                completado= {false}
                eliminarTodo={eliminarTodo}
                todoCompletado={todoCompletado}
            />))
        }
        </div>
    </>
  )
};


