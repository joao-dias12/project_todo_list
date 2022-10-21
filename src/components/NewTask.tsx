import { PlusCircle } from 'phosphor-react'

import styles from './NewTask.module.css';

export function NewTask(){

    return (
        <div className={styles.newTask} >
            <input placeholder='Adicione uma Tarefa'>
            </input>
            <button type='submit'>
                    Clicar
                    <PlusCircle size={16} /> 
            </button>

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