import { Navigate,  useLocation } from "react-router-dom";

const PrivateRoute = ({ children, roles }) => {
  let location = useLocation();
  let isAuthenticated = true;
  let loading = false;
  let user = {
    role: 'user'
  }
  
  if (loading) {
    return <p className="container">Checking auth..</p>;
  }
  const userHasRequiredRole = user && roles.includes(user.role) ? true : false;

  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  if (isAuthenticated && !userHasRequiredRole) {
    return <Navigate to="/unauthorized" state={{ from: location }} />;; // build your won access denied page (sth like 404)
  }

  return children;

};

export default PrivateRoute;
