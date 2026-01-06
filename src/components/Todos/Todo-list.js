import styles from './Todo-list.module.css'
import icon_task from '../assets/icon_task.png'
import garbage from '../assets/garbage.png'
import checked from '../assets/checked.png'
import pencil from '../assets/pencil.png'
import { useState } from 'react'

function TodoList({id,res,onDelete,completed,onDone,onChangeTask,change}){
    const [edit,setEdit] = useState(res)
    function saveChange(){
        if(!edit.trim()) return
        onChangeTask(id,edit)
    }
    return(
        <div className={`${styles.block_task} ${completed?styles.done:""}`} >
            <img src={icon_task} className={styles.icon_task} alt='Task'/>
        {
            change?(
                <input value={edit} onChange={(e)=>setEdit(e.target.value)} onKeyDown={(e)=>e.key === 'Enter' && saveChange()} onBlur={saveChange}/>
            ):<p>{res}</p>
        }
        <div className={styles.buttons_todo}>
        <button className={styles.change_button} onClick={()=>onChangeTask(id)}>
            <img src={pencil} className={styles.change} alt='Change'/>
        </button>
        <button className={styles.tick_button} onClick={()=>onDone(id)}>
            <img src={checked} className={styles.tick} alt='Tick'/>
        </button>
        <button className={styles.bin_button} onClick={()=>onDelete(id)}>
            <img src={garbage} className={styles.bin} alt='Bin'/>
        </button>
        </div>
        </div>
    )
}

export default TodoList