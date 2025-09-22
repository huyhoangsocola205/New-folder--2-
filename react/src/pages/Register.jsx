import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !confirm) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    if (!email.includes("@")) {
      alert("Email không hợp lệ!");
      return;
    }
    if (password.length < 6) {
      alert("Mật khẩu phải ít nhất 6 ký tự!");
      return;
    }
    if (password !== confirm) {
      alert("Mật khẩu nhập lại không khớp!");
      return;
    }

    alert("Đăng ký thành công!");
  };

  return (
    <div className="register-container">
      <div className="register-box">
        {/* Bên trái */}
        <div className="register-left">
          <h1 className="logo">Gradiator</h1>
          <h2>Create Your Account</h2>
          <p>Join us and start your journey</p>

          <div className="tab-buttons">
            <Link to="/login">
              <button>Sign In</button>
            </Link>
            <button className="active">Sign Up</button>
          </div>

          <form onSubmit={handleSubmit} className="register-form">
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
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />

            <button type="submit" className="btn-register">
              Sign Up
            </button>
          </form>

          <div className="divider">OR</div>

          <button className="btn-apple"> Sign up with Apple</button>
          <button className="btn-google">G Sign up with Google</button>

          <p className="have-account">
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </div>

        {/* Bên phải */}
        <div className="register-right">
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
