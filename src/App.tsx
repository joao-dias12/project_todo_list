
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';

import styles from './App.module.css'

import './global.css'

export function App() {
  return (

    <div>
      <Header/>

      <div className={styles.app}>
        <NewTask/>
       

      </div>
    </div>
    )
  }
  
  



//     <div>
//       <Header />
      
//       <div className={styles.wrapper}>
//         <NewTask />
        
//         <main>
//           {tasks.map(task =>{
//             return (
//               <Tasks content={task.content} />
//             )
//           })}
//         </main>
//       </div>

      

//     </div>
    


