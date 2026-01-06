import { useState } from 'react'
import styles from './TodoForm.module.css'
import TodoList from './Todo-list'

function TodoForm(){
    const [data,setData] = useState("")
    const [result,setResult] = useState([])
    function handleSubmit(event){
        event.preventDefault()
        if (!data.trim()) return
        setResult((prev)=>[...prev,{id:Date.now(),text:data,completed: false,change:false}])
        setData("")
    }
    function deleteSubmit(id){
        setResult((prev)=>prev.filter(result=>result.id !== id))
    }
    function doneTask(id){
        setResult((prev)=>prev.map(result=>result.id === id?{...result,completed:!result.completed}:result))
    }
    function changeTask(id,newText){
        setResult((prev)=>prev.map(result=>result.id === id?{...result,text:newText??result.text,change:!result.change}:result))
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" className={styles.field_form} value={data} onChange={(e)=>setData(e.target.value)} placeholder="Enter new task"/>
            <button type='submit' className={styles.submission_form}>Submit</button>
            {result.map((res)=><TodoList key={res.id} id={res.id} res={res.text} completed={res.completed} change={res.change} onChangeTask={changeTask} onDone={doneTask} onDelete={deleteSubmit}/>)}
        </form>
    )
}

export default TodoForm