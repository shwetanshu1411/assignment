// import { useState, useContext } from "react";
// import { loginUser } from "../services/api";
// import { AuthContext } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// const LoginPage = () => {
//   const [email, setEmail] = useState("eve.holt@reqres.in");
//   const [password, setPassword] = useState("cityslicka");
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const { token } = await loginUser(email, password);
//       login(token);
//       navigate("/users");
//     } catch (error) {
//       alert("Login Failed: " + error.message);
//     }
//   };

//   return (
//     <form onSubmit={handleLogin}>
//       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default LoginPage;


import { useState, useContext } from "react";
import { loginUser } from "../services/api";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { token } = await loginUser(email, password);
      login(token);
      navigate("/users");
    } catch (error) {
      alert("Login Failed: " + error.message);
    }
  };

  return (
    <form onSubmit={handleLogin} style={styles.form}>
      <label style={styles.label}>Email:</label>
      <input
        type="email"
        value={email}
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
        required
        style={styles.input}
      />

      <label style={styles.label}>Password:</label>
      <input
        type="password"
        value={password}
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
        required
        style={styles.input}
      />

      <button type="submit" style={styles.button}>Login</button>
    </form>
  );
};

// Basic inline styles
const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "300px",
    margin: "auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "2px 2px 12px rgba(0,0,0,0.1)"
  },
  label: {
    fontWeight: "bold",
    marginBottom: "5px"
  },
  input: {
    padding: "8px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px"
  },
  button: {
    padding: "10px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px"
  }
};

export default LoginPage;
