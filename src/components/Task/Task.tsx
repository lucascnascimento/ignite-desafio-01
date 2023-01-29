import Trash from "phosphor-react/src/icons/Trash";
import styles from "./Task.module.css";
import { TaskType } from "../../types";

type TaskProps = {
  task: TaskType;
  onDeleteTask: (id: string) => void;
  onCheckTask: (id: string, isChecked: boolean) => void;
};

const getTaskStyles = (isDone: boolean) => {
  if (isDone) return `${styles.task} ${styles.taskDone}`;

  return styles.task;
};

export const Task = ({ task, onDeleteTask, onCheckTask }: TaskProps) => {
  const { id, isDone, text } = task;
  const handleDeleteTask = () => onDeleteTask(id);

  const handleCheckboxChange = () => {
    onCheckTask(id, !isDone);
  };

  return (
    <div className={getTaskStyles(isDone)}>
      <div className={styles.checkboxContainer} onClick={handleCheckboxChange}>
        <input type={"checkbox"} checked={task.isDone} readOnly />
        <span className={styles.checkmark} />
      </div>
      <p>{text}</p>
      <button onClick={handleDeleteTask}>
        <Trash size={20} />
      </button>
    </div>
  );
};
