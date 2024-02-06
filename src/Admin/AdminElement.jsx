import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminElement = ({ children }) => {
  const user = useSelector((state) => state.auth.user);
  const isAdmin = user.isAdmin;

  const navigate = useNavigate;
  if (isAdmin) {
    return <>{children}</>;
  } else {
    return <div>You are now Access to View this Page</div>;
  }
};

export default AdminElement;
