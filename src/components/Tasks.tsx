import { Trash } from 'phosphor-react'

import styles from './Tasks.module.css'
import { ChangeEvent } from 'react'

interface TaskProps {
        tasks:{
            content:string;
            isCompleted:boolean;
        }
        content: string,
        isCompleted?: boolean;
        onDeleteTask:(task:TaskProps) => void; // Entre paranteses eu aviso que a função recebe um parametro string e que retorna vazio(void)
    }

export function Tasks( props:TaskProps ){

    

    function handleDeleteTask(){
        console.log('deletar')
        props.onDeleteTask(props.content);
    }

    
    function handleConclusionTask(value: unknown, key){
        // var check = document.getElementById('check');
        // if (check.checked == true) {
        //     console.log('conclusion')
        //     }
        // props.isCompleted = true
        console.log('conclusion')
        console.log(props.tasks)
        props.setTasks(props.tasks.map(task => {
            if (task.content == props.content) {
                return{
                    ...task,
                    [key]:value // Garante a reflexão
                }
            }
            return task
        }))                
    }

    
    return (
        
        <div  className={styles.taskUnit} >
            <input  onChange={e => handleConclusionTask(e.target.checked, 'isCompleted')} id='check' type="checkbox" /> 
               
            <span style={{
                textDecoration:props.isCompleted && 'line-through'
            }} id='taskDescription'>{props.content}</span>
            <button onClick={handleDeleteTask} title='Deletar Task'>  
                <Trash size={24} />
            </button>  
        </div>
    )
}
// export function Tasks(props: TaskProps){
    
//     return (
//         <>
            
//             <div className={styles.taskUnit}>
//                <input type="checkbox" /> 
               
//                <span>{props.content}</span>

//                <Trash size={24} />

                    
                

//             </div>

//         </>
            
//     )
// }