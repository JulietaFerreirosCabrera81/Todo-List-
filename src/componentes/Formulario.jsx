import React, { useState } from 'react'
import styles from './Formulario.module.css';

export const Formulario = ({agregarTodo}) => { 
  
    const initialState = {
          nombre: '',
          descripcion: '',
        };
  
    const [todo, setTodo] = useState(initialState);
  
    const {nombre, descripcion } = todo;

    const handleSubmit =(e)=>{
        e.preventDefault()
        if(!nombre.trim()){
            alert('no deje el campo en blanco')
            return;
        }
        if(!descripcion.trim()){
            alert('no deje la descripcion en blanco')
            return;
        }
        agregarTodo({
            nombre,
            descripcion,
            id:Date.now()
        })
        
        setTodo(initialState);
    };

    const handleChange =(e)=>{
        const{ name, value }= e.target
        
        setTodo((old)=>({
            ...old,
            [name] : value 
         }))
    };

    return (

    <div className={styles["contenedor-formulario"]}>
      <form onSubmit={handleSubmit}>
            <input
                 className={styles["input"]}
                 type="text"
                 name="nombre"
                 placeholder="ingrese el nombre de su tarea"
                 value={nombre}
                 onChange={handleChange}
            />
            <input
                className={styles["input"]}
                type="text"
                placeholder="ingrese la descripcion de su tarea"
                name="descripcion"
                value={descripcion}
                onChange={handleChange}
            />
            <button
                type="submit"
                className={styles["boton"]}
            >
                agregar
            </button >
        </form>
    </div>
    )
};


