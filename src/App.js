import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Register, Home, Dashboard, Unauthorized } from "./pages";
import PrivateRoute from "./config/AdminRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/register" element={<Register />} exact />
        <Route path="/unauthorized" element={<Unauthorized />} exact />
        <Route
          path="/home"
          element={
            <PrivateRoute roles={["user"]}>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute roles={["admin"]}>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
