import { PlusCircle } from 'phosphor-react'

import { Tasks } from './Tasks'

import styles from './NewTask.module.css';

const tasks = [
    {
        id: 1,
        content: "Comprar arroz",
        isCompleted: false,
    },
    {
        id: 2,
        content: "Comprar Feijão",
        isCompleted: false,
    },
    {
        id: 3,
        content: "Ir na Academia",
        isCompleted: false,
    }
    ]
export function NewTask(){

    return (
        <div className={styles.newTask} >
            <input placeholder='Adicione uma Tarefa'>
            </input>
            <button type='submit'>
                    Clicar
                    <PlusCircle size={16} /> 
            </button>

            <div className={styles.tasksCreated}>
                {tasks.map(task => {
                    return <Tasks content={task.content} />
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