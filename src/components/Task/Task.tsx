import Trash from "phosphor-react/src/icons/Trash";
import styles from "./Task.module.css";
import { TaskType } from "../../types";

type TaskProps = {
  task: TaskType;
  onDeleteTask: (id: string) => void;
  onCheckTask: (id: string, isChecked: boolean) => void;
};

export const Task = ({ task, onDeleteTask, onCheckTask }: TaskProps) => {
  const handleDeleteTask = () => onDeleteTask(task.id);

  const handleCheckboxChange = () => {
    console.log("handleCheckboxChange");
    onCheckTask(task.id, !task.isDone);
  };

  return (
    <div className={styles.task}>
      <div className={styles.checkboxContainer} onClick={handleCheckboxChange}>
        <input type={"checkbox"} checked={task.isDone} readOnly />
        <span className={styles.checkmark} />
      </div>
      <p>{task.text}</p>
      <button onClick={handleDeleteTask}>
        <Trash size={20} />
      </button>
    </div>
  );
};
