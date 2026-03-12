import { BrowserRouter, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import AdminNavBar from "./admin/AdminNavBar";
import MainNavBar from "./pages/MainNavBar";

function App() {

  const getRole = () => {
    if (sessionStorage.getItem("isAdmin") === "true") return "admin";
    return "guest";
  };

  const [role, setRole] = useState(getRole());

  return (
    <BrowserRouter basename="/practice-app">
      <RoleHandler role={role} setRole={setRole} />
    </BrowserRouter>
  );
}

function RoleHandler({ role, setRole }) {

  const location = useLocation();

  useEffect(() => {
    // update role whenever route changes
    if (sessionStorage.getItem("isAdmin") === "true") {
      setRole("admin");
    } else {
      setRole("guest");
    }
  }, [location, setRole]);

  if (role === "admin") {
    return <AdminNavBar />;
  }

  return <MainNavBar />;
}

export default App;