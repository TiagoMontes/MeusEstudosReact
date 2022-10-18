import React from 'react'

// interface
import { ITask } from '../interfaces/Task';

// CSS
import styles from './TaskList.module.css'

type Props = {
  taskList: ITask[];
  // void significa que não retorna nada
  handleDelete: (id: number) => void;
  handleEdit(): void;
}

const TaskList = ({taskList, handleDelete, handleEdit}: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className={styles.task}>
            <div className={styles.details}>
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className={styles.actions}>
              <i className='bi bi-pencil' onClick={handleEdit}></i>
              <i
                className='bi bi-trash'
                onClick={() => {
                  handleDelete(task.id)
                }}
              ></i>
            </div>
          </div>
        ))
      ) : (
        <h3>Nenhuma tarefa encontrada</h3>
      )}
    </>
  )
}

export {TaskList}