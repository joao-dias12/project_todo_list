import { Trash } from 'phosphor-react'

// import styles from './Tasks.module.css'


interface TaskProps {
        id?: number,
        content: string,
        isCompleted?: boolean;
        onDeleteTask:(task:string) => void; // Entre paranteses eu aviso que a função recebe um parametro string e que retorna vazio(void)
    }

export function Tasks( props:TaskProps ){
    function handleDeleteTask(){
        console.log('deletar')
        props.onDeleteTask(props.content);
    }
    return (
        
        <div className='' >
               <input type="checkbox" /> 
               
              <span>{props.content}</span>

               <Trash size={24} />
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