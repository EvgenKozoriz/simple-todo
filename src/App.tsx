import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllTasks from "./pages/AllTasks/AllTasks";
import CompletedTasks from "./pages/CompletedTasks/CompletedTasks";
import ActiveTasks from "./pages/ActiveTasks/ActiveTasks";
import DeletedTasks from "./pages/DeletedTasks/DeletedTasks";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<AllTasks />} />
          <Route path="/active" element={<ActiveTasks />} />
          <Route path="/completed" element={<CompletedTasks />} />
          <Route path="/deleted" element={<DeletedTasks />} />
          <Route path="*" element={<Navigate to="/error" />} />
          <Route path="/error" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
