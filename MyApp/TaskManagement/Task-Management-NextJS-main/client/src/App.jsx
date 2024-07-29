// App.js
import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./index.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Completed from "./pages/Completed";
import Incomplete from "./pages/Incomplete";
import AllTasks from "./pages/AllTasks";
import { AuthContext } from "./context/AuthContext";
import { TaskContextProvider } from "./context/TaskContext";
import Profile from "./pages/Profile";
import GetStarted from "./pages/GetStarted";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    // <div>
    //   <UserDashboard/>
    // </div>
    <TaskContextProvider>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route
          path="/admindash"
          element={user ? <AdminDashboard /> : <Navigate to="/admin-login" />}
        />
        <Route path="/userdash" element={<UserDashboard/>}/>
        
        <Route path="/home" element={user ? <Dashboard /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Dashboard /> : <Register />}
        />
        <Route path="/login" element={user ? <Dashboard /> : <Login />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/all-tasks" element={<AllTasks />} />
        <Route path="/completed" element={user ? <Completed /> : <Login />} />
        <Route
          path="/incomplete"
          element={user ? <Incomplete /> : <Login />}
        />
        <Route path="/profile" element={user ? <Profile /> : <Login />} />
      </Routes>
    </TaskContextProvider>
  );
};

export default App;
