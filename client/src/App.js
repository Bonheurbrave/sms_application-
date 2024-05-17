import React from "react";
import Homepage from "./pages/Homepage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import PrefectLogin from "./pages/PrefectLogin";
import PrefectSignUp from "./pages/PrefectSignUp";
import AdminDashboard from "./pages/AdminDashboard";
import PrefectPage from "./pages/PrefectPage";
import PrefectSMSpage from "./pages/PrefectSMSpage";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Homepage />} path="/" />
        <Route element={<AdminLogin />} path="/login-admin" />
        <Route element={<PrefectLogin />} path="/login-prefect" />
        <Route element={<PrefectSignUp />} path="/signup-prefect" />
        <Route element={<AdminDashboard />} path="/admin-dashboard" />
        <Route element={<PrefectPage />} path="/prefect-page" />
        <Route element={<PrefectSMSpage />} path="/sms-page" />
      </Routes>
    </>
  );
}

export default App;
