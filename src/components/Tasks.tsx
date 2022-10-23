import { Trash } from 'phosphor-react'

import styles from './Tasks.module.css'
import { ChangeEvent } from 'react'

interface TaskProps {
        content: string,
        isCompleted?: boolean;
        onDeleteTask:(task:string) => void; // Entre paranteses eu aviso que a função recebe um parametro string e que retorna vazio(void)
    }

export function Tasks( props:TaskProps ){
    function handleDeleteTask(){
        console.log('deletar')
        props.onDeleteTask(props.content);
    }

    function handleConclusionTask(event: ChangeEvent){
        // var check = document.getElementById('check');
        // if (check.checked == true) {
        //     console.log('conclusion')
        //     }
        const checkBoxConcluded = event.target
        
        if (checkBoxConcluded.checked == true){
            console.log('conclusion')
            var taskDescription = document.getElementById('taskDescription');
            taskDescription.style.textDecoration = 'line-through';
        }
        else{
            console.log('Pendente')
        }
    }
    return (
        
        <div  className={styles.taskUnit} >
            <input onChange={handleConclusionTask} id='check' type="checkbox" /> 
               
            <span id='taskDescription'>{props.content}</span>
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