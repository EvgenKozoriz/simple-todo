import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Task, TasksState } from "../types";

const initialState: TasksState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<Task>) {
      state.tasks.push(action.payload);
    },
    completeTask(state, action: PayloadAction<string>) {
      const id = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.type = "completed";
      }
    },
    removeTask(state, action: PayloadAction<string>) {
      const id = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        if (task.type === "completed") {
          task.type = "completed-deleted";
        } else {
          task.type = "deleted";
        }
      }
    },
    removeDeleted(state) {
      state.tasks = state.tasks.filter(
        (task) => task.type !== "deleted" && task.type !== "completed-deleted"
      );
    },
  },
});

export const { addTask, removeTask, completeTask, removeDeleted } =
  tasksSlice.actions;

export const selectTasks = (state: { tasks: TasksState }) => state.tasks.tasks;

export default tasksSlice.reducer;
