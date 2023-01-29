import { Header } from "./components/Header/Header";
import { Status } from "./components/Status/Status";
import { Task } from "./components/Task/Task";
import styles from "./App.module.css";
import { PlusCircle } from "phosphor-react";
import { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TaskType } from "./types";

const INITIAL_STATE = [
  {
    id: uuidv4(),
    isDone: false,
    text: `Olá, seja bem-vindo! Crie uma tarefa para adicionar à lista, selecione para marcar como resolvida e clique na lixeira para deletá-la.`,
  },
];

function App() {
  const [currentTask, setCurrentTask] = useState("");
  const [tasks, setTasks] = useState(INITIAL_STATE);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentTask(e.target.value);
  };

  const createTask = () => {
    if (currentTask) {
      setTasks((prevState) => [
        ...prevState,
        { id: uuidv4(), isDone: false, text: currentTask },
      ]);
      setCurrentTask("");
    }
  };

  const deleteTask = (id: string) => {
    const tasksFiltered = tasks.filter((task) => task.id !== id);
    setTasks(tasksFiltered);
  };

  const checkTask = (id: string, isDone: boolean) => {
    const newTasks = tasks.reduce<TaskType[]>((tasks, currentTask) => {
      if (currentTask.id === id) return [...tasks, { ...currentTask, isDone }];

      return [...tasks, currentTask];
    }, []);

    setTasks(newTasks);
  };

  return (
    <main>
      <Header />
      <div className={styles.content}>
        <div className={styles.taskInput}>
          <input
            type={"text"}
            onChange={handleInputChange}
            value={currentTask}
            placeholder="Adicione uma nova tarefa"
          />
          <button onClick={createTask}>
            Criar
            <PlusCircle size={16} />
          </button>
        </div>

        <div className={styles.tasksContainer}>
          <Status numberOfTasks={5} tasksDone={0} />

          <div className={styles.tasksList}>
            {tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                onCheckTask={checkTask}
                onDeleteTask={deleteTask}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
