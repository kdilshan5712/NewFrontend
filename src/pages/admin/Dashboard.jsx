import React, { useEffect, useState } from "react";
import Sidebar from "./adminComponents/Sidebar";
import "./dashboard.css";
import { Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
  Filler
);

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const usersPerPage = 5;

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      console.log("Access token:", token);

      const response = await fetch("http://localhost:5000/api/auth/verified-users", {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log("Fetch status:", response.status);

      if (!response.ok) throw new Error("Failed to fetch users");

      const data = await response.json();
      console.log("Fetched user data:", data);

      setUsers(data.users || []);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (!sortField) return 0;
    const valA = a[sortField]?.toLowerCase?.() || "";
    const valB = b[sortField]?.toLowerCase?.() || "";
    return sortOrder === "asc" ? valA.localeCompare(valB) : valB.localeCompare(valA);
  });

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(sortedUsers.length / usersPerPage);

  const exportCSV = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      ["Name,Email,Role", ...sortedUsers.map((u) => `${u.name},${u.email},${u.role}`)].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "verified_users.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  // Dummy data for Booking & Seat charts
  const bookingData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Bookings",
        data: [12, 19, 15, 10, 8, 14],
        fill: true,
        backgroundColor: "rgba(78, 115, 223, 0.2)",
        borderColor: "rgba(78, 115, 223, 1)",
      },
    ],
  };

  const seatData = {
    labels: ["Booked", "Available"],
    datasets: [
      {
        label: "Seats",
        data: [60, 40],
        backgroundColor: ["#4e73df", "#1cc88a"],
        borderColor: ["#ffffff", "#ffffff"],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className={`dashboard-wrapper ${darkMode ? "dark-mode" : ""}`}>
      {sidebarOpen && <Sidebar darkMode={darkMode} />}
      <div className={`dashboard-main ${darkMode ? "dark-mode" : ""}`}>
        <div className="top-bar" style={{ marginBottom: "15px" }}>
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? "Hide Sidebar" : "Show Sidebar"}
          </button>
          <button onClick={() => setDarkMode(!darkMode)} style={{ marginLeft: "10px" }}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        <h2 className="dashboard-title">📊 Dashboard</h2>

        {loading ? (
          <p>Loading data...</p>
        ) : (
          <>
            <div className="card-grid" style={{ marginBottom: "20px" }}>
              <div className="dash-card">👥 Verified Users: {users.length}</div>
            </div>

            {/* Dummy Chart Section */}
            <div className="chart-section" style={{ display: "flex", gap: "30px", marginBottom: "20px" }}>
              <div style={{ width: "50%" }}>
                <h4>📈 Monthly Bookings</h4>
                <Line data={bookingData} />
              </div>
              <div style={{ width: "40%" }}>
                <h4>🎟 Seat Availability</h4>
                <Doughnut data={seatData} />
              </div>
            </div>

            <div className="user-table-section">
              <h3>Verified Users</h3>
              <input
                type="text"
                placeholder="Search by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <button onClick={exportCSV} style={{ marginLeft: "10px", padding: "6px 12px" }}>
                Export CSV
              </button>

              <table className="user-table">
                <thead>
                  <tr>
                    <th onClick={() => handleSort("name")}>
                      Name {sortField === "name" ? (sortOrder === "asc" ? "▲" : "▼") : ""}
                    </th>
                    <th onClick={() => handleSort("email")}>
                      Email {sortField === "email" ? (sortOrder === "asc" ? "▲" : "▼") : ""}
                    </th>
                    <th onClick={() => handleSort("role")}>
                      Role {sortField === "role" ? (sortOrder === "asc" ? "▲" : "▼") : ""}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentUsers.length > 0 ? (
                    currentUsers.map((user) => (
                      <tr key={user._id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                          <span className={`role-tag ${user.role}`}>{user.role}</span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" style={{ padding: "10px", textAlign: "center" }}>
                        No users found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>

              <div className="pagination">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    style={{
                      padding: "5px 10px",
                      cursor: "pointer",
                      backgroundColor: currentPage === i + 1 ? "#4e73df" : "#eee",
                      color: currentPage === i + 1 ? "white" : "black",
                      border: "none",
                      borderRadius: "4px",
                      marginRight: "5px",
                    }}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;