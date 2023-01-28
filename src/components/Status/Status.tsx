import styles from "./Status.module.css";

type StatusProps = {
  numberOfTasks: number;
  tasksDone: number;
};

export const Status = ({ numberOfTasks, tasksDone }: StatusProps) => {
  const tasksLabel = numberOfTasks
    ? `${tasksDone} de ${numberOfTasks}`
    : numberOfTasks;

  return (
    <div className={styles.status}>
      <span className={styles.tasksCreated}>
        Tarefas criadas
        <span className={styles.numberWrapper}>5</span>
      </span>
      <span className={styles.tasksCompleted}>
        Concluídas <span className={styles.numberWrapper}>{tasksLabel}</span>
      </span>
    </div>
  );
};
