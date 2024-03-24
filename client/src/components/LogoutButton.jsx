import React from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../utils/auth";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    AuthService.logout();
    navigate("/");
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        borderRadius: "8px",
        border: "1px solid transparent",
        padding: "0.6em 1.2em",
        fontWeight: "500",
        backgroundColor: "transparent",
        cursor: "pointer",
        transition: "border-color 0.25s",
      }}
      id="logout-button"
      className="inline-flex items-center mt-1"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
