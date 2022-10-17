import React from 'react'

// interface
import { ITask } from '../interfaces/Task';

// CSS
import styles from './TaskList.module.css'

type Props = {
  taskList: ITask[];
}

const TaskList = ({taskList}: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id}>
            <h3>{task.title}</h3>
          </div>
        ))
      ) : (
        <h3>Nenhuma tarefa encontrada</h3>
      )}
    </>
  )
}

export {TaskList}