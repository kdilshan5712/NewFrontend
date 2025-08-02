import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RecoveryEmail = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendOtp = async () => {
    setError("");
    setMessage("");

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("✅ OTP sent to your email.");
        setTimeout(() => navigate(`/reset-otp?email=${email}`), 1500); // 🔄 Redirect to ResetOtp
      } else {
        setError(data.message || "Failed to send OTP.");
      }
    } catch {
      setError("❌ Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Recover Account</h2>
        <input
          type="email"
          aria-label="Recovery email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <button
          onClick={handleSendOtp}
          style={{
            ...styles.button,
            backgroundColor: loading ? "#6c757d" : "#007bff",
            cursor: loading ? "not-allowed" : "pointer",
          }}
          disabled={loading}
          aria-label="Send OTP"
        >
          {loading ? "Sending..." : "Send OTP"}
        </button>
        {message && <p style={styles.success}>{message}</p>}
        {error && <p style={styles.error}>{error}</p>}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh",
    backgroundColor: "#f9f9f9",
  },
  card: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "400px",
  },
  title: {
    marginBottom: "20px",
    textAlign: "center",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
  },
  success: {
    color: "green",
    marginTop: "10px",
    textAlign: "center",
  },
  error: {
    color: "red",
    marginTop: "10px",
    textAlign: "center",
  },
};

export default RecoveryEmail;
