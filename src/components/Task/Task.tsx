import React from "react";
import { completeTask, removeTask } from "../../store/tasksSlice";
import { useDispatch } from "react-redux";
import "./task.scss";
import { TaskProps } from "../../types";

const Task: React.FC<TaskProps> = ({ id, title, description, type }) => {
  const dispatch = useDispatch();

  const handleDeleteTask = (id: string) => {
    dispatch(removeTask(id));
  };

  const handleCompleteTask = (id: string) => {
    dispatch(completeTask(id));
  };

  return (
    <div
      className={
        type === "completed" || type === "completed-deleted"
          ? "task completed"
          : "task"
      }
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <button
        className="complete-button"
        disabled={
          type === "completed" ||
          type === "completed-deleted" ||
          type === "deleted"
        }
        onClick={() => handleCompleteTask(id)}
      >
        {type === "completed" || type === "completed-deleted"
          ? "completed"
          : "complete Task"}
      </button>
      <button
        className="delete-button"
        disabled={type === "deleted" || type === "completed-deleted"}
        onClick={() => handleDeleteTask(id)}
      >
        {type === "deleted" || type === "completed-deleted"
          ? "deleted"
          : "Delete Task"}
      </button>
    </div>
  );
};

export default Task;
