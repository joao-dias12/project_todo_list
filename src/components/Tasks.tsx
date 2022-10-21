import { Trash } from 'phosphor-react'

// import styles from './Tasks.module.css'


interface TaskProps {
        id?: number,
        content: string,
        isCompleted?: boolean;
    }

export function Tasks( props:TaskProps ){
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