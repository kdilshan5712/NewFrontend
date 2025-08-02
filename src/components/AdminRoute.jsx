import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
  const userData = JSON.parse(localStorage.getItem("user"));
  const accessToken = localStorage.getItem("accessToken");

  if (!userData || !accessToken || userData.role !== "admin") {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default AdminRoute;
