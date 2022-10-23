import { PlusCircle } from 'phosphor-react'

import { Tasks } from './Tasks'

import styles from './NewTask.module.css';
import { useState, FormEvent, ChangeEvent } from 'react';

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

    const [newTasksText, setNewTasksText] = useState('') // Variavel para armazenar o estado inicial do input.


    function interfaceWithNoTasks(numberOfTasks: number) {
        if (numberOfTasks === 0) {
        var container = document.getElementById('emptyListOfTasks')
        container!.style.display = 'block'  
        }
    }

    function handleCreateNewTask(event: FormEvent<HTMLInputElement>) {  // Gerencia a ciração de novas tasks
        event?.preventDefault()
        console.log('oi')

        setTasks([...tasks, newTasksText])
        interfaceWithNoTasks(tasks.length)
        setNewTasksText('')                                   // Deixa o campo input em branco=> verificar os atributos "value" e "onChange" no input.
        
    }



    function handleNewTasksChange(event: ChangeEvent<HTMLInputElement>) { // Método para monitorar e pegar o valor que acontece quando qualquer mudança é feita na "input"
        setNewTasksText(event?.target.value)
    }

    function deleteTask(taskToDelete:string){
        console.log(`deletar comentarios: ${taskToDelete}`)
        const tasksWithoutDeletedOne =  tasks.filter(task => task!== taskToDelete)
        // Trabalhando a imutabilidade, ou seja iremos setar uma lista de "Tasks" sem a task que queremos deletar
        setTasks(tasksWithoutDeletedOne) // setando a lista nova.
        interfaceWithNoTasks(tasksWithoutDeletedOne.length)

    }
    return (
        <div className={styles.tasksBox}>

            <form onSubmit={handleCreateNewTask}>
                <div className={styles.newTask} >
                   
                    <input onChange={handleNewTasksChange} value={newTasksText}  name="text" placeholder='Adicione uma Tarefa'>  
                    </input>
                    <button type='submit'>
                            Clicar
                            <PlusCircle size={16} /> 
                    </button>

                </div>
            </form>
            <div className={styles.statusTasks}>
                <span>Tarefas Criadas {tasks.length}</span> 
                        
                <span>Tarefas Concluidas</span>

            </div>
            <div id='tasksBiggerThan0' className={styles.tasksCreated}>
                {tasks.map(task => {
                    return <Tasks 
                                onDeleteTask={deleteTask} 
                                key={task} 
                                content={task} 
                            />
                })}
            <div id='emptyListOfTasks' className={styles.emptyListOfTasks}>
                Sua lista está vazia, crie novas tasks

            </div>
                

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