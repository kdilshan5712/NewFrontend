import { Navigate } from 'react-router-dom';

const RoleRoute = ({ allowedRoles, children }) => {
  const userData = JSON.parse(localStorage.getItem("user"));
  const accessToken = localStorage.getItem("accessToken");

  if (!userData || !accessToken || !allowedRoles.includes(userData.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default RoleRoute;
