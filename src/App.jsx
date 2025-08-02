import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Booking from './pages/Booking';
import MovieDetail from './pages/MovieDetail'; // ✅ Corrected import
import Login from './pages/Login';
import Register from './pages/Register';
import SeatBooking from './pages/SeatBooking';
import Profile from './pages/Profile';
import Dashboard from './pages/admin/Dashboard';
import ManageUsers from './pages/admin/ManageUsers';
import Unauthorized from './pages/Unauthorized';
import RoleRoute from './components/AdminRoute';
import RecoveryEmail from './pages/RecoveryEmail';
import VerifyOtp from './pages/VerifyOtp';
import ResetOtp from './pages/ResetOtp';
import ResetPassword from './pages/ResetPassword';

import './App.css';
import BuyTickets from './pages/BuyTickets';
import MovieInfo from './pages/MovieInfo';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="page-content">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/booking/:showId" element={<BuyTickets />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/BuyTickets/:id" element={<BuyTickets />} />
            <Route path="/SeatGrid/:id" element={<SeatBooking />} />
            <Route path ="/Selectmovie/:id" element={<MovieDetail />} />
            <Route path="/info/:id" element={<MovieInfo />} />
            <Route path ="/InfoBooking/:id" element={<BuyTickets />} />

          


            {/* User Routes */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="/forgot-password" element={<RecoveryEmail />} />
            <Route path="/verify-otp" element={<VerifyOtp />} />
            <Route path="/reset-otp" element={<ResetOtp />} />
            <Route path="/reset-password" element={<ResetPassword />} />

            {/* Admin Routes */}
            <Route
              path="/admin/dashboard"
              element={
                <RoleRoute allowedRoles={['admin']}>
                  <Dashboard />
                </RoleRoute>
              }
            />
            <Route
              path="/manage-users"
              element={
                <RoleRoute allowedRoles={['admin']}>
                  <ManageUsers />
                </RoleRoute>
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
