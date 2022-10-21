import { PlusCircle } from 'phosphor-react'

import { Tasks } from './Tasks'

import styles from './NewTask.module.css';
import { useState } from 'react';

interface TaskProps {
    tasks: {
        content:string;
        isCompleted:boolean;
    }
}



export function NewTask(){

    const [tasks, setTasks] = useState([ 
        'Comprar Feijão'
                 
    ])

    function handleCreateNewTask(){
        event?.preventDefault()
        console.log('oi')
        const NewTaskText = event.target.text.value
        console.log(NewTaskText)
        setTasks([...tasks, NewTaskText])
                

       
    }

    return (
        <div className={styles.tasksBox}>

            <form onSubmit={handleCreateNewTask}>
                <div className={styles.newTask} >
                    <input name="text" placeholder='Adicione uma Tarefa'>
                    </input>
                    <button type='submit'>
                            Clicar
                            <PlusCircle size={16} /> 
                    </button>

                </div>
            </form>
            <div className={styles.statusTasks}>
                <span>Tarefas Criadas</span> 
                        
                <span>Tarefas Concluidas</span>

            </div>
            <div className={styles.tasksCreated}>
                {tasks.map(task => {
                    return <Tasks key={task} content={task} />
                })}
                

            </div>
        </div>
    )
}
//         <div className={styles.componentTask}>
//             <div className={styles.newTask}>
//                 <input placeholder="Adicione uma Tarefa" name="" id="" >

//                 </input>

//                 <button type='submit'>
//                     Clicar
//                     <PlusCircle size={16} /> 
//                 </button>
            
//             </div>
//             <div className={styles.tasksBox}>
//                 <header>
//                     <span>Tarefas Criadas</span> 
                    
//                     <span>Tarefas Concluidas</span> 
                    
//                 </header>

//                 <hr color='' size='1' />
//             </div>
//             <div className={styles.tasksList}> 
//                 <img src=""></img>
//                 <strong> Você ainda não tem tarefas cadastradas</strong>
//                 <p>Crie Tarefas e organize seus itens a fazer</p>

            
            
//             </div>
           

            
//         </div>
        
        
//     )
// }