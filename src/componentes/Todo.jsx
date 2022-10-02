import styles from './Todo.module.css';
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";

export const Todo = ({todo, eliminarTodo, todoCompletado}) => {
   
    const{id, nombre, descripcion, completado }= todo;
  
    return (
        <>
            <div className={completado ? styles["tarea-completado"] :styles["tarea-contenedor"] } >
                <div className={styles["nombre"]}>{nombre}</div>
                <div className={styles["descripcion"]}>{descripcion}</div>
                <div>
                    <button className={styles["boton"]} onClick={()=>eliminarTodo(id)}><AiOutlineCloseCircle className={styles["icono"]}/></button>
                    <button className={styles["boton"]} onClick={()=>todoCompletado(id)}><AiOutlineCheckCircle className={styles["icono"]}/></button>
                </div>
            </div>
        </>
    )
};


