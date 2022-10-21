
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';

import{ Task } from './components/Tasks'


import styles from './App.module.css'

import './global.css'

export function App() {
  return (

    <div>
      <Header/>

      <div className={styles.app}>
        <NewTask/>
        <main className='Tasks'>
          Todas as Tasks
        </main>

      </div>
    </div>
    )
  }
  
  //   const tasks = [
  //     {
  //         id: 1,
  //         content: "Comprar arroz",
  //         isCompleted: false,
  //     },
  //     {
  //         id: 2,
  //         content: "Comprar Feijão",
  //         isCompleted: false,
  //     },
  //     {
  //         id: 3,
  //         content: "Ir na Academia",
  //         isCompleted: false,
  //     }
  //     ]



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
    


