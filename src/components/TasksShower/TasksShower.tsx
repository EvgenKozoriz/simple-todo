import { TasksShowerProps } from "../../types";
import "./taskShower.scss";

const TasksShower: React.FC<TasksShowerProps> = ({ title, children }) => {
  return (
    <div className="tasks-shower">
      <h2 className="tasks-shower-title">{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default TasksShower;
