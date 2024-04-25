import TasksShower from "../../components/TasksShower/TasksShower";
import Task from "../../components/Task/Task";
import { useDispatch, useSelector } from "react-redux";
import { removeDeleted, selectTasks } from "../../store/tasksSlice";
import "./deletedTasks.scss";

const DeletedTasks = () => {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();

  const handleDeleteAll = () => {
    dispatch(removeDeleted());
  };

  return (
    <>
      <TasksShower title={"Deleted Tasks"}>
        {tasks
          .filter(
            (task) =>
              task.type === "deleted" || task.type === "completed-deleted"
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
      <button
        disabled={
          !tasks.filter(
            (task) =>
              task.type === "deleted" || task.type === "completed-deleted"
          ).length
        }
        className="clean-button"
        onClick={() => handleDeleteAll()}
      >
        Clean Deleted
      </button>
    </>
  );
};

export default DeletedTasks;
