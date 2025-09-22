import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    alert("Đăng nhập thành công!");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {/* Bên trái */}
        <div className="login-left">
  <div className="login-header">
    <div className="login-left">
  <div className="logo-row">
    <div className="logo-icon">✦</div>
    <div className="logo-text">Gradiator</div>
  </div>
  <h2>Welcome Back Creative!</h2>
  <p>We Are Happy To See You Again</p>
</div>

  </div>


          <div className="tab-buttons">
            <button className="active">Sign In</button>
            <Link to="/register">
              <button>Sign Up</button>
            </Link>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="form-options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#">Forgot Password?</a>
            </div>

            <button type="submit" className="btn-login">
              Login
            </button>
          </form>

          <div className="divider">OR</div>

          <button className="btn-apple"> Log in with Apple</button>
          <button className="btn-google">G Log in with Google</button>
        </div>

        {/* Bên phải */}
        <div className="login-right">
          <p className="footer"></p>
          
  
          <div className="bg-effect"></div>
          <p className="footer">
            
            © 2025 Gradiator. All rights reserved. Unauthorized use or
            reproduction of any content or materials is prohibited.
          </p>
        </div>
      </div>
    </div>
    
  );
}
