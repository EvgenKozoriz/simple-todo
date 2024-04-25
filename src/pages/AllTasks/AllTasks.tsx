import TasksShower from "../../components/TasksShower/TasksShower";
import Task from "../../components/Task/Task";
import { useSelector } from "react-redux";
import { selectTasks } from "../../store/tasksSlice";

const AllTasks = () => {
  const tasks = useSelector(selectTasks);

  return (
    <>
      <TasksShower title={"All Tasks"}>
        {tasks
          .filter(
            (task) =>
              task.type !== "deleted" && task.type !== "completed-deleted"
          )
          .map((task) => (
            <Task
              key={task.id}
              id={task.id}
              type={task.type}
              title={task.title}
              description={task.description}
            />
          ))}
      </TasksShower>
    </>
  );
};

export default AllTasks;
