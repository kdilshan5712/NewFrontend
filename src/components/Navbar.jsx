import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#333", padding: "10px" }}>
      <Link to="/" style={{ marginRight: "15px", color: "white" }}>Home</Link>
      <Link to="/movieDetails" style={{ marginRight: "15px", color: "white" }}>Movie Details</Link>
      <Link to="/booking" style={{ marginRight: "15px", color: "white" }}>Booking</Link>
      <Link to="/login" style={{ marginRight: "15px", color: "white" }}>Login</Link>
      <Link to="/register" style={{ color: "white" }}>Register</Link>
    </nav>
  );
};

export default Navbar;
