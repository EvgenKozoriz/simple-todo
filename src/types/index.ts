import { ReactNode } from "react";

export interface Task {
  id: string;
  title: string;
  description: string;
  type: "active" | "completed" | "deleted" | "completed-deleted";
}

export interface TasksState {
  tasks: Task[];
}

export interface TaskProps {
  id: string;
  title: string;
  description: string;
  type: "active" | "completed" | "deleted" | "completed-deleted";
}
export interface TasksShowerProps {
  title: string;
  children: ReactNode;
}
