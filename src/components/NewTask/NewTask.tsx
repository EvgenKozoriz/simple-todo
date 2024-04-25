import { useDispatch } from "react-redux";
import { addTask } from "../../store/tasksSlice";
import { uniqueId } from "../../utils/helperFunctions";
import { ChangeEvent, useState } from "react";
import "./newTask.scss";
import { Task } from "../../types";

const NewTask = () => {
  const [titleText, setTitleText] = useState<string>("");
  const [descriptionText, setDescriptionText] = useState<string>("");
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const dispatch = useDispatch();

  const handleAddTask = () => {
    const newTask: Task = {
      id: uniqueId(),
      title: titleText,
      description: descriptionText,
      type: "active",
    };
    dispatch(addTask(newTask));
    setTitleText("");
    setDescriptionText("");
    setModalOpen(false);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleTitleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitleText(e.target.value);
  };

  const handleDescriptionTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescriptionText(e.target.value);
  };
  return (
    <div>
      <button className="open-button" onClick={handleOpenModal}>
        Create New Task
      </button>
      {modalOpen && (
        <div className="new-task-modal">
          <input
            onChange={(e) => handleTitleTextChange(e)}
            value={titleText}
            type="text"
            placeholder="type todo title"
          />
          <textarea
            onChange={(e) => handleDescriptionTextChange(e)}
            value={descriptionText}
            placeholder="type todo description"
          />
          <button
            disabled={!titleText}
            className="add-button"
            onClick={handleAddTask}
          >
            Add New Task
          </button>
          <button className="close-button" onClick={handleCloseModal}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default NewTask;
