import styles from './Header.module.css'

import todo_logo from '../assets/todo-logo.svg'


export function Header () {

    return (
        <header className={styles.header}>
            <img src={todo_logo} alt="Logo da Todo" />

        </header>
    )

}